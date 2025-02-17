"use client"
import React, { useState } from "react"
import { MessageCircle } from "lucide-react"

interface FormData {
  institutionName: string
  institutionType: string
  location: string
  contactNameRole: string
  emailPhone: string
  studentCount: string
  teacherCount: string
  classLevels: string[]
}

const TutorChat = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    institutionName: "",
    institutionType: "",
    location: "",
    contactNameRole: "",
    emailPhone: "",
    studentCount: "",
    teacherCount: "",
    classLevels: [],
  })

  const institutionTypes = [
    "Primary",
    "Secondary",
    "NGO",
    "Government",
    "Private",
  ]

  const classLevelOptions = [
    "PP1",
    "PP2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
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

  const handleCheckboxChange = (level: string) => {
    setFormData((prev) => ({
      ...prev,
      classLevels: prev.classLevels.includes(level)
        ? prev.classLevels.filter((l) => l !== level)
        : [...prev.classLevels, level],
    }))
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-sm">
      {!showForm ? (
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-yellow-500">
              Get Started Today!
            </h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-700">
              Want to see how Hekima Learning can transform assessments in your
              school or classroom? Contact us for a personalized quote and let’s
              tailor a solution that meets your needs.
            </p>
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
