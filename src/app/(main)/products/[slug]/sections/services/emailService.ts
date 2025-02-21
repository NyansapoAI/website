import emailjs from "@emailjs/browser"
import {
  FormData,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from "../types"

// Initialize EmailJS
emailjs.init(EMAIL_PUBLIC_KEY)

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Extract email from combined email/phone field
const extractEmail = (emailPhone: string): string | null => {
  const parts = emailPhone.split(/[\s,;]+/)
  for (const part of parts) {
    if (isValidEmail(part)) {
      return part
    }
  }
  return null
}

// Sanitize input to prevent XSS attacks
const sanitizeInput = (input: string): string => {
  // Simple HTML entity encoding
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Validate form data
const validateFormData = (data: FormData): boolean => {
  if (data.productType === "hekima") {
    // Extract and validate email
    const email = extractEmail(data.emailPhone)
    if (!email) return false

    // Check required fields
    if (
      !data.institutionName.trim() ||
      !data.institutionType ||
      !data.location.trim() ||
      !data.contactNameRole.trim() ||
      !data.studentCount ||
      !data.teacherCount
    ) {
      return false
    }

    // Validate numeric fields
    if (isNaN(Number(data.studentCount)) || isNaN(Number(data.teacherCount))) {
      return false
    }

    return true
  } else {
    // Validate Nyansapo form
    if (
      !data.firstName.trim() ||
      !data.secondName.trim() ||
      !data.organizationType ||
      !data.assessmentSupport.trim() ||
      !data.childrenCount ||
      !data.primaryCountry.trim()
    ) {
      return false
    }

    // Validate numeric field
    if (isNaN(Number(data.childrenCount))) {
      return false
    }

    return true
  }
}

// Format data for email template
const formatEmailData = (data: FormData): Record<string, string> => {
  if (data.productType === "hekima") {
    const templateData = {
      to_name: "Admin", // Add a default recipient name
      institutionName: sanitizeInput(data.institutionName),
      institutionType: sanitizeInput(data.institutionType),
      location: sanitizeInput(data.location),
      contactNameRole: sanitizeInput(data.contactNameRole),
      emailPhone: sanitizeInput(data.emailPhone),
      studentCount: data.studentCount,
      teacherCount: data.teacherCount,
      classLevels: data.classLevels.join(", "),
      submitted_at: new Date().toLocaleString(),
    }

    // Debug log
    console.log("Template data being sent:", templateData)

    return templateData
  } else {
    return {
      fullName: `${sanitizeInput(data.firstName)} ${sanitizeInput(
        data.secondName
      )}`,
      organizationType: sanitizeInput(data.organizationType),
      assessmentSupport: sanitizeInput(data.assessmentSupport),
      childrenCount: data.childrenCount,
      primaryCountry: sanitizeInput(data.primaryCountry),
      submitted_at: new Date().toLocaleString(),
    }
  }
}

// Send form data via EmailJS
export const sendFormEmail = async (data: FormData): Promise<boolean> => {
  try {
    // Validate form data
    if (!validateFormData(data)) {
      console.error("Form validation failed")
      return false
    }

    // Format data for email template
    const templateParams = formatEmailData(data)

    // Add form type to help email template logic
    templateParams.formType = data.productType

    // Debug email data
    console.log("Sending email with data:", {
      serviceId: EMAIL_SERVICE_ID,
      templateId: EMAIL_TEMPLATE_ID,
      params: templateParams,
    })

    // Send email
    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      return true
    }

    return false
  } catch (error) {
    console.error("Failed to send email:", error)
    return false
  }
}
