"use client"
import React, { useState } from "react"
import { MessageCircle } from "lucide-react"

interface FormData {
  firstName: string
  secondName: string
  organizationType: string
  assessmentSupport: string
  childrenCount: string
  primaryCountry: string
}

interface TutorChatProps {
  ctaText: string
}

const TutorChat: React.FC<TutorChatProps> = ({ ctaText }) => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    secondName: "",
    organizationType: "",
    assessmentSupport: "",
    childrenCount: "",
    primaryCountry: "",
  })

  const organizationTypes = [
    "Not for profit",
    "Social enterprise",
    "For profit",
    "Government/multilateral",
    "Academic",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-sm">
      {!showForm ? (
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-yellow-500">
              Maximize the Benefits of Nyansapo Learning App{" "}
            </h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl text-gray-700 font-semibold">
                Reach out to us
              </h2>
            </div>
            <p className="text-gray-700">{ctaText}</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              I&apos;m Interested!
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-gray-50">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="secondName" className="block text-gray-50">
                Second Name
              </label>
              <input
                type="text"
                id="secondName"
                name="secondName"
                value={formData.secondName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="organizationType" className="block text-gray-50">
              Organization Type
            </label>
            <select
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select organization type</option>
              {organizationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="assessmentSupport" className="block text-gray-50">
              What assessments would you like support?
            </label>
            <textarea
              id="assessmentSupport"
              name="assessmentSupport"
              value={formData.assessmentSupport}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="childrenCount" className="block text-gray-50">
              How many children are you intending to reach?
            </label>
            <input
              type="number"
              id="childrenCount"
              name="childrenCount"
              value={formData.childrenCount}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="primaryCountry" className="block text-gray-50">
              Primary country of operation
            </label>
            <input
              type="text"
              id="primaryCountry"
              name="primaryCountry"
              value={formData.primaryCountry}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-500 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
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
