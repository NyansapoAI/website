"use client"
import { generateRandomName } from "@/lib/utils"
import React from "react"
export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
interface Connect {
  id: number
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
  durationTheModelTakesToAnalzeEachNumberInMilliseconds: number
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
  durationTheModelTakesToAnalzeEachScreenshotInMilliseconds: number
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
  durationTheModelTakesToAnalzeEachScreenshotInMilliseconds: number
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
  where: {
    firstName_lastName_campId: {
      campId: number
      firstName: string
      lastName: string
    }
  }
}

interface Student {
  connectOrCreate: Create5
}

interface Camp {
  connect: Connect
}

interface Data {
  countAndMatchResults: CountAndMatchResults
  numberRecognitionResults: NumberRecognitionResults
  numeracyOperationResults: NumeracyOperationResults
  wordProblemResults: WordProblemResults
  durationOfAdditionAssessmentInMilliseconds: number
  durationOfCountAndMatchAssessmentInMilliseconds: number
  durationOfDivisionAssessmentInMilliseconds: number
  durationOfMultiplicationAssessmentInMilliseconds: number
  durationOfNumberRecognitionAssessmentInMilliseconds: number
  durationOfSubtractionAssessmentInMilliseconds: number
  durationOfWholeAssessmentInSeconds: number
  durationOfWordProblemAssessmentInMilliseconds: number
  assessmentType: string
  student: Student
  camp: Camp
  numeracyAssessmentContent: {
    connect: Connect
  }
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
      connectOrCreate: {
        where: {
          firstName_lastName_campId: {
            campId: parseInt(process.env.NEXT_PUBLIC_NUMERACY_CAMP_ID!),
            firstName: "",
            lastName: "",
          },
        },
        age: 10,
        camp: {
          connect: {
            id: parseInt(process.env.NEXT_PUBLIC_NUMERACY_CAMP_ID!),
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
        id: parseInt(process.env.NEXT_PUBLIC_NUMERACY_CAMP_ID!),
      },
    },
    durationOfAdditionAssessmentInMilliseconds: 0,
    durationOfCountAndMatchAssessmentInMilliseconds: 0,
    durationOfDivisionAssessmentInMilliseconds: 0,
    durationOfMultiplicationAssessmentInMilliseconds: 0,
    durationOfNumberRecognitionAssessmentInMilliseconds: 0,
    durationOfSubtractionAssessmentInMilliseconds: 0,
    durationOfWholeAssessmentInSeconds: 0,
    durationOfWordProblemAssessmentInMilliseconds: 0,
    assessmentType: "BASELINE",
    numeracyAssessmentContent: {
      connect: {
        id: 1,
      },
    },
  },
  numeracyAssessmentConfigInput: {
    numberOfCountAndMatchThatShouldBeWrongOrAboveToFailCountAndMatchAssessment: 1,
    numberOfNumberRecognitionsThatShouldBeWrongOrAboveToFailNumberRecognitionsAssessment: 1,
    numberOfProblemsThatShouldBeWrongOrAboveToFailAdditionAssessment: 1,
    numberOfProblemsThatShouldBeWrongOrAboveToFailDivisionAssessment: 1,
    numberOfProblemsThatShouldBeWrongOrAboveToFailMultiplicationAssessment: 1,
    numberOfProblemsThatShouldBeWrongOrAboveToFailSubtractionAssessment: 1,
    numberOfProblemsThatShouldBeWrongOrAboveToFailWordProblemAssessment: 1,
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
