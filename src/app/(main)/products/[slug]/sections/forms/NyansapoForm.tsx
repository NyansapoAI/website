import React from "react"
import { FormData, organizationTypes } from "../types"

interface NyansapoFormProps {
  formData: Extract<FormData, { productType: "nyansapo" }>
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
}

const NyansapoForm: React.FC<NyansapoFormProps> = ({
  formData,
  onInputChange,
}) => {
  return (
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
            onChange={onInputChange}
            className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
            onChange={onInputChange}
            className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
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
          onChange={onInputChange}
          className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
          required
        />
      </div>
    </>
  )
}

export default NyansapoForm
