"use client"
import { generateRandomName } from "@/lib/utils"
import React from "react"
export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
interface Connect {
  id: string
}

interface CountAndMatch {
  connect: Connect
}

interface Create {
  studentAnswer: number
  index: number
  countAndMatch: CountAndMatch
}

interface CountAndMatchResults {
  create: Create[]
}

interface NumberRecognition {
  connect: Connect
}

interface Create2 {
  answerFromOriginalModelPrediction: string
  urlOfRecordedVoice: string
  localAbsolutePathOfRecordedVoiceFile: string
  numberRecognition: NumberRecognition
}

interface NumberRecognitionResults {
  create: Create2[]
}

interface NumeracyOperation {
  connect: Connect
}

interface Create3 {
  localAbsolutePathOfScreenshot: string
  numeracyOperation: NumeracyOperation
  answerFromOriginalModelPrediction: string
  index: number
  urlOfScreenshot: string | null
}

interface NumeracyOperationResults {
  create: Create3[]
}

interface WordProblem {
  connect: Connect
}

interface Create4 {
  answerFromOriginalModelPrediction: string
  urlOfScreenshot: string | null
  wordProblem: WordProblem
  localAbsolutePathOfScreenshot: string
}

interface WordProblemResults {
  create: Create4[]
}

interface Create5 {
  age: number
  firstName: string
  gender: string
  lastName: string
  camp: NumeracyOperation
  grade: number
}

interface Student {
  create: Create5
}

interface Camp {
  connect: Connect
}

interface Data {
  countAndMatchResults: CountAndMatchResults
  numberRecognitionResults: NumberRecognitionResults
  numeracyOperationResults: NumeracyOperationResults
  wordProblemResults: WordProblemResults
  student: Student
  camp: Camp
}

interface NumeracyAssessmentConfigInput {
  numberOfCountAndMatchThatShouldBeWrongOrAboveToFailCountAndMatchAssessment: number
  numberOfNumberRecognitionsThatShouldBeWrongOrAboveToFailNumberRecognitionsAssessment: number
  numberOfProblemsThatShouldBeWrongOrAboveToFailAdditionAssessment: number
  numberOfProblemsThatShouldBeWrongOrAboveToFailDivisionAssessment: number
  numberOfProblemsThatShouldBeWrongOrAboveToFailMultiplicationAssessment: number
  numberOfProblemsThatShouldBeWrongOrAboveToFailSubtractionAssessment: number
  numberOfProblemsThatShouldBeWrongOrAboveToFailWordProblemAssessment: number
}

export interface NumeracyAssessmentInput {
  data: Data
  numeracyAssessmentConfigInput: NumeracyAssessmentConfigInput
}

const { firstName, lastName } = generateRandomName()
export const initialNumeracyAssessmentInput: NumeracyAssessmentInput = {
  data: {
    countAndMatchResults: {
      create: [],
    },
    numberRecognitionResults: {
      create: [],
    },
    numeracyOperationResults: {
      create: [],
    },
    wordProblemResults: {
      create: [],
    },
    student: {
      create: {
        age: 10,
        camp: {
          connect: {
            id: process.env.NEXT_PUBLIC_ASSESSMENT_CAMP_ID!,
          },
        },
        gender: Gender.MALE,
        lastName: lastName,
        firstName: firstName,
        grade: 4,
      },
    },
    camp: {
      connect: {
        id: process.env.NEXT_PUBLIC_ASSESSMENT_CAMP_ID!,
      },
    },
  },
  numeracyAssessmentConfigInput: {
    numberOfCountAndMatchThatShouldBeWrongOrAboveToFailCountAndMatchAssessment: 3,
    numberOfNumberRecognitionsThatShouldBeWrongOrAboveToFailNumberRecognitionsAssessment: 3,
    numberOfProblemsThatShouldBeWrongOrAboveToFailAdditionAssessment: 3,
    numberOfProblemsThatShouldBeWrongOrAboveToFailDivisionAssessment: 3,
    numberOfProblemsThatShouldBeWrongOrAboveToFailMultiplicationAssessment: 3,
    numberOfProblemsThatShouldBeWrongOrAboveToFailSubtractionAssessment: 3,
    numberOfProblemsThatShouldBeWrongOrAboveToFailWordProblemAssessment: 3,
  },
}
type ContextType = {
  setAssessmentId: React.Dispatch<React.SetStateAction<number | undefined>>
  assessmentId: number | undefined
  currentItem: number
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
  feedbackId: string
  setFeedbackId: React.Dispatch<React.SetStateAction<string>>
  assessmentInput: NumeracyAssessmentInput
  setAssessmentInput: React.Dispatch<
    React.SetStateAction<NumeracyAssessmentInput>
  >
}
const NumeracyAssessmentContext = React.createContext<ContextType>({
  assessmentInput: initialNumeracyAssessmentInput,
  setAssessmentInput: () => {},
  feedbackId: "",
  setCurrentItem: () => {},
  currentItem: 0,
  setFeedbackId: () => {},
  setAssessmentId: () => {},
  assessmentId: undefined,
})
export { NumeracyAssessmentContext }
