import React from "react"
import { FormData, institutionTypes, classLevelOptions } from "../types"

interface HekimaFormProps {
  formData: Extract<FormData, { productType: "hekima" }>
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
  onCheckboxChange: (level: string) => void
}

const HekimaForm: React.FC<HekimaFormProps> = ({
  formData,
  onInputChange,
  onCheckboxChange,
}) => {
  return (
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
            onChange={onInputChange}
            className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
            onChange={onInputChange}
            className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-50 mb-2">Class Levels Covered</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {classLevelOptions.map((level) => (
            <div key={level} className="flex items-center">
              <input
                type="checkbox"
                id={level}
                checked={formData.classLevels.includes(level)}
                onChange={() => onCheckboxChange(level)}
                className="mr-2"
              />
              <label htmlFor={level} className="text-gray-50">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HekimaForm
