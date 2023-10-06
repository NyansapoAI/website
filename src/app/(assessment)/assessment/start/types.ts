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
