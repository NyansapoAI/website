import React from "react"
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
  gender: null | "MALE" | "FEMALE"
  lastName: null | string
  grade: null | number
  firstName: null | string
}
export const initialAssessmentInput = {
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
      age: null,
      camp: {
        connect: {
          id: null,
        },
      },
      gender: null,
      lastName: null,
      grade: null,
      firstName: null,
    },
  },
  camp: {
    connect: {
      id: null,
    },
  },
}
type ContextType = {
  assessmentInput: AssessmentInput
  setAssessmentInput: React.Dispatch<React.SetStateAction<AssessmentInput>>
}
const AssessmentContext = React.createContext<ContextType>({
  assessmentInput: initialAssessmentInput,
  setAssessmentInput: () => {},
})
export { AssessmentContext }
