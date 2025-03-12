// Union type for form data
export type FormData =
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

export interface TutorChatProps {
  ctaText: string
  productSlug: string
}

export const organizationTypes = [
  "Not for profit",
  "Social enterprise",
  "For profit",
  "Government/multilateral",
  "Academic",
  "Other",
]

export const institutionTypes = [
  "Public School",
  "Private School",
  "NGO",
  "Religious Institution",
  "Other",
]

export const classLevelOptions = [
  "Pre-Primary",
  "Lower Primary (1-3)",
  "Upper Primary (4-6)",
  "Lower Secondary (7-9)",
  "Upper Secondary (10-12)",
]
