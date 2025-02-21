"use client"
import React, { useState } from "react"
import { TutorChatProps, FormData } from "./types"
import WelcomeSection from "./components/WelcomeSection"
import HekimaForm from "./forms/HekimaForm"
import NyansapoForm from "./forms/NyansapoForm"
import { sendFormEmail } from "./services/emailService"

const TutorChat: React.FC<TutorChatProps> = ({ ctaText, productSlug }) => {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  // Initialize form data based on product type
  const [formData, setFormData] = useState<FormData>(() => {
    if (productSlug === "hekima-learning-app") {
      return {
        productType: "hekima",
        institutionName: "",
        institutionType: "",
        location: "",
        contactNameRole: "",
        emailPhone: "",
        studentCount: "",
        teacherCount: "",
        classLevels: [],
      }
    }
    return {
      productType: "nyansapo",
      firstName: "",
      secondName: "",
      organizationType: "",
      assessmentSupport: "",
      childrenCount: "",
      primaryCountry: "",
    }
  })

  // Get title based on product type
  const getTitle = () => {
    return formData.productType === "hekima"
      ? "Maximize the Benefits of Hekima Learning App"
      : "Maximize the Benefits of Nyansapo Learning App"
  }

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value } as FormData))
  }

  // Handle checkbox changes for class levels
  const handleCheckboxChange = (level: string) => {
    if (formData.productType !== "hekima") return

    setFormData((prev) => {
      if (prev.productType === "hekima") {
        const classLevels = prev.classLevels.includes(level)
          ? prev.classLevels.filter((l) => l !== level)
          : [...prev.classLevels, level]
        return { ...prev, classLevels }
      }
      return prev
    })
  }

  // Reset form after submission
  const resetForm = () => {
    setFormData((prev) => {
      if (prev.productType === "hekima") {
        return {
          productType: "hekima",
          institutionName: "",
          institutionType: "",
          location: "",
          contactNameRole: "",
          emailPhone: "",
          studentCount: "",
          teacherCount: "",
          classLevels: [],
        }
      }
      return {
        productType: "nyansapo",
        firstName: "",
        secondName: "",
        organizationType: "",
        assessmentSupport: "",
        childrenCount: "",
        primaryCountry: "",
      }
    })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)
      setSubmissionStatus(null)

      // Send email
      const success = await sendFormEmail(formData)

      if (success) {
        setSubmissionStatus({
          success: true,
          message: "Thank you for your interest! We'll contact you soon.",
        })
        resetForm()
      } else {
        setSubmissionStatus({
          success: false,
          message:
            "There was a problem submitting your form. Please try again.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-sm">
      {!showForm ? (
        <WelcomeSection
          ctaText={ctaText}
          title={getTitle()}
          onGetStarted={() => setShowForm(true)}
        />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.productType === "hekima" ? (
            <HekimaForm
              formData={
                formData as Extract<FormData, { productType: "hekima" }>
              }
              onInputChange={handleInputChange}
              onCheckboxChange={handleCheckboxChange}
            />
          ) : (
            <NyansapoForm
              formData={
                formData as Extract<FormData, { productType: "nyansapo" }>
              }
              onInputChange={handleInputChange}
            />
          )}

          {/* Status message */}
          {submissionStatus && (
            <div
              className={`p-4 rounded-md ${
                submissionStatus.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submissionStatus.message}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-500 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
              disabled={isSubmitting}
            >
              Back
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default TutorChat
