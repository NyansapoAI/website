export interface Word {
  word: string
  id: number
}

export interface Story {
  id: number
  story: string
  index?: number
}
export interface Letter {
  id: number
  letter: string
  literacyAssessmentContentId: number
}

export interface MultipleChoiceQuestionAnswer {
  id: number
  answer: string
  correct: boolean
}

export interface Question {
  id: number
  literacyAssessmentContentId: number
  question: string
  multipleChoiceQuestionAnswers: MultipleChoiceQuestionAnswer[]
}
export interface Paragraph {
  id: number
  paragraph: string
  index?: number
}

export interface LiteracyAssessmentContent {
  letters: Letter[]
  multipleChoiceQuestions: Question[]
  words: Word[]
  stories: Story[]
  paragraphs: Paragraph[]
  id: number
}

export interface LiteracyAssessment {
  id: number
  literacyAssessmentContent: LiteracyAssessmentContent
}

export interface RootObject {
  data: LiteracyAssessment
}
export type WhisperApiResponse = {
  response: string
  fileName: string
  url: string
} & {
  duration: number
}
export type WhisperApiResponseHandWriting = {
  response: string
  url: string
}

export type LiteracyAssessmentResult = {
  literacyAssessment: {
    id: string
    dynamicallyGeneratedLearningLevel: {
      dynamicallyGeneratedLearningLevel: string
    }
    letterAssessmentResults: {
      correctAccordingToModelPrediction: {
        correct: boolean
      }
      expectedAnswer: string
      answerFromOriginalModelPrediction: string
      id: string
      index: number
      urlOfRecordedVoice: string
      answerFromModifiedModelPrediction: string
    }[]
    wordAssessmentResults: {
      answerFromOriginalModelPrediction: string
      answerFromModifiedModelPrediction: string
      expectedAnswer: string
      urlOfRecordedVoice: string
      correctAccordingToModelPrediction: {
        correct: boolean
      }
      id: string
      index: number
    }[]
    paragraphSentenceResults: {
      answerFromModifiedModelPrediction: string
      answerFromOriginalModelPrediction: string
      id: string
      index: number
      urlOfRecordedVoice: string
      wordsRightOrWrongAccordingToModelPrediction: {
        wordsRightOrWrongModelPrediction: {
          correct: boolean
          word: string
        }[]
        wordsRightOrWrongAccordingToOriginalModelPrediction: {
          correct: boolean
          word: string
        }[]
      }
    }[]
    storySentenceResults: {
      answerFromModifiedModelPrediction: string
      answerFromOriginalModelPrediction: string
      expectedAnswer: string
      id: string
      index: number
      wordsRightOrWrongAccordingToModelPrediction: {
        wordsRightOrWrongModelPrediction: {
          correct: boolean
          word: string
        }[]
        wordsRightOrWrongAccordingToOriginalModelPrediction: {
          correct: boolean
          word: string
        }[]
      }
      urlOfRecordedVoice: string
    }[]
    questionAssessmentResults: {
      answerFromUser: string
      correct: boolean
      multipleChoiceQuestionAnswer: {
        answer: string
        correct: boolean
      }
      multipleChoiceQuestion: {
        question: string
        id: string
      }
    }[]
  }
}
