"use client"
import React, { useState } from "react"
import { MessageCircle } from "lucide-react"

// Union type for form data
type FormData =
  | {
      productType: "nyansapo"
      firstName: string
      secondName: string
      organizationType: string
      assessmentSupport: string
      childrenCount: string
      primaryCountry: string
    }
  | {
      productType: "hekima"
      institutionName: string
      institutionType: string
      location: string
      contactNameRole: string
      emailPhone: string
      studentCount: string
      teacherCount: string
      classLevels: string[]
    }

interface TutorChatProps {
  ctaText: string
  productSlug: string
}

const organizationTypes = [
  "Not for profit",
  "Social enterprise",
  "For profit",
  "Government/multilateral",
  "Academic",
  "Other",
]

const institutionTypes = [
  "Public School",
  "Private School",
  "NGO",
  "Religious Institution",
  "Other",
]

const classLevelOptions = [
  "Pre-Primary",
  "Lower Primary (1-3)",
  "Upper Primary (4-6)",
  "Lower Secondary (7-9)",
  "Upper Secondary (10-12)",
]

const TutorChat: React.FC<TutorChatProps> = ({ ctaText, productSlug }) => {
  const [showForm, setShowForm] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle submission based on productType
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => {
      if (prev.productType === "hekima") {
        return { ...prev, [name]: value } as FormData
      }
      return { ...prev, [name]: value } as FormData
    })
  }

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

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-sm">
      {!showForm ? (
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-yellow-500">
              Maximize the Benefits of Nyansapo Learning App
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
          {formData.productType === "hekima" ? (
            <>
              <h2 className="text-2xl font-bold text-gray-50 mb-6">
                Institution Information
              </h2>
              <div className="space-y-2">
                <label htmlFor="institutionName" className="block text-gray-50">
                  School/Organization Name
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="institutionType" className="block text-gray-50">
                  Type of Institution
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select institution type</option>
                  {institutionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-gray-50">
                  Location (County, Town)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactNameRole" className="block text-gray-50">
                  Contact Name & Role
                </label>
                <input
                  type="text"
                  id="contactNameRole"
                  name="contactNameRole"
                  value={formData.contactNameRole}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="emailPhone" className="block text-gray-50">
                  Email & Phone Number
                </label>
                <input
                  type="text"
                  id="emailPhone"
                  name="emailPhone"
                  value={formData.emailPhone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-50 mt-8 mb-6">
                Student & Teacher Reach
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="studentCount" className="block text-gray-50">
                    Total Number of Students
                  </label>
                  <input
                    type="number"
                    id="studentCount"
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="teacherCount" className="block text-gray-50">
                    Number of Teachers Using the Platform
                  </label>
                  <input
                    type="number"
                    id="teacherCount"
                    name="teacherCount"
                    value={formData.teacherCount}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-50 mb-2">
                  Class Levels Covered
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {classLevelOptions.map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        id={level}
                        checked={formData.classLevels.includes(level)}
                        onChange={() => handleCheckboxChange(level)}
                        className="mr-2"
                      />
                      <label htmlFor={level}>{level}</label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
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
                <label
                  htmlFor="organizationType"
                  className="block text-gray-50"
                >
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
                <label
                  htmlFor="assessmentSupport"
                  className="block text-gray-50"
                >
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
            </>
          )}

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
