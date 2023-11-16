"use client"
import { generateRandomName } from "@/lib/utils"
import React from "react"
export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export interface AssessmentInput {
  letterAssessmentResults: {
    create: AssessmentData[]
  }
  questionAssessmentResults: {
    create: QuestionAssessmentData[]
  }
  paragraphSentenceResults: {
    create: ParagraphSentenceData[]
  }
  storySentenceResults: {
    create: StorySentenceData[]
  }
  wordAssessmentResults: {
    create: WordAssessmentData[]
  }
  student: {
    create: StudentData
  }
  camp: {
    connect: {
      id: number | null
    }
  }
  literacyAssessmentContent: {
    connect: {
      id: number
    }
  }
  choosenParagraph: number
  assessmentType: string
}

interface AssessmentData {
  answerFromOriginalModelPrediction: null | string
  expectedAnswer: null | string
  localAbsolutePathOfRecordedVoiceFile: null | string
  durationTheModelTakesToAnalzeEachLetterInMilliseconds: null | number
  urlOfRecordedVoice: null | string
}

export interface QuestionAssessmentData {
  answerFromUser: null | string
  multipleChoiceQuestion: {
    connect: {
      id: number | null
    }
  }
  multipleChoiceQuestionAnswer: {
    connect: {
      id: number | null
    }
  }
}

export interface ParagraphSentenceData {
  answerFromOriginalModelPrediction: null | string
  durationTheModelTakesToAnalzeEachSentenceInMilliseconds: null | number
  expectedAnswer: null | string
  localAbsolutePathOfRecordedVoiceFile: null | string
  index: null | number
  urlOfRecordedVoice: null | string
}

export interface StorySentenceData {
  answerFromOriginalModelPrediction: null | string
  expectedAnswer: null | string
  localAbsolutePathOfRecordedVoiceFile: null | string
  index: number | null
  urlOfRecordedVoice: null | string
  durationTheModelTakesToAnalzeEachSentenceInMilliseconds: null | number
}

export interface WordAssessmentData {
  expectedAnswer: null | string
  durationTheModelTakesToAnalzeEachWordInMilliseconds: null | number
  answerFromOriginalModelPrediction: null | string
  localAbsolutePathOfRecordedVoiceFile: null | string
  urlOfRecordedVoice: null | string
}

export interface StudentData {
  age: null | number
  camp: {
    connect: {
      id: number | null
    }
  }
  gender: null | Gender
  lastName: null | string
  grade: null | number
  firstName: null | string
}
const { firstName, lastName } = generateRandomName()
export const initialAssessmentInput: AssessmentInput = {
  letterAssessmentResults: {
    create: [],
  },
  questionAssessmentResults: {
    create: [],
  },
  paragraphSentenceResults: {
    create: [],
  },
  storySentenceResults: {
    create: [],
  },
  wordAssessmentResults: {
    create: [],
  },
  student: {
    create: {
      age: 10,
      camp: {
        connect: {
          id: parseInt(process.env.NEXT_PUBLIC_LITERACY_CAMP_ID!),
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
      id: parseInt(process.env.NEXT_PUBLIC_LITERACY_CAMP_ID!),
    },
  },
  assessmentType: "BASELINE",
  literacyAssessmentContent: {
    connect: {
      id: 1,
    },
  },
  choosenParagraph: 1,
}
type ContextType = {
  setAssessmentId: React.Dispatch<React.SetStateAction<number | undefined>>
  assessmentId: number | undefined
  feedbackId: string
  setFeedbackId: React.Dispatch<React.SetStateAction<string>>
  assessmentInput: AssessmentInput
  setAssessmentInput: React.Dispatch<React.SetStateAction<AssessmentInput>>
}
const AssessmentContext = React.createContext<ContextType>({
  assessmentInput: initialAssessmentInput,
  setAssessmentInput: () => {},
  feedbackId: "",
  setFeedbackId: () => {},
  setAssessmentId: () => {},
  assessmentId: undefined,
})
export { AssessmentContext }
