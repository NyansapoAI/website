import { FormData } from "../types"

// Sanitize input to prevent XSS attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Format data for form submission
const formatFormData = (data: FormData): Record<string, string> => {
  if (data.productType === "hekima") {
    return {
      "Form Type": "Hekima Learning App",
      "Institution Name": sanitizeInput(data.institutionName),
      "Institution Type": sanitizeInput(data.institutionType),
      Location: sanitizeInput(data.location),
      "Contact Name & Role": sanitizeInput(data.contactNameRole),
      "Email & Phone": sanitizeInput(data.emailPhone),
      "Student Count": data.studentCount,
      "Teacher Count": data.teacherCount,
      "Class Levels": data.classLevels.join(", "),
      "Submitted At": new Date().toLocaleString(),
    }
  } else {
    return {
      "Form Type": "Nyansapo Learning App",
      "Full Name": `${sanitizeInput(data.firstName)} ${sanitizeInput(
        data.secondName
      )}`,
      "Organization Type": sanitizeInput(data.organizationType),
      "Assessment Support": sanitizeInput(data.assessmentSupport),
      "Children Count": data.childrenCount,
      "Primary Country": sanitizeInput(data.primaryCountry),
      "Submitted At": new Date().toLocaleString(),
    }
  }
}

// Send form data via Formspree
export const sendFormEmail = async (data: FormData): Promise<boolean> => {
  try {
    const formData = formatFormData(data)

    const response = await fetch("https://formspree.io/f/xvgkolpr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    return response.ok
  } catch (error) {
    console.error("Failed to send form:", error)
    return false
  }
}
