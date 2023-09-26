interface Answer {
  answer: string
  correct: boolean
  id: number
}

export interface Question {
  question: string
  id: number
  multipleChoiceQuestionAnswers: Answer[]
}

export interface Letter {
  id: number
  letter: string
}

export interface Word {
  word: string
  id: number
}

export interface Story {
  id: number
  story: string
}

export interface Paragraph {
  id: number
  paragraph: string
}

interface LiteracyAssessmentContent {
  letters: Letter[]
  multipleChoiceQuestions: Question[]
  words: Word[]
  stories: Story[]
  paragraphs: Paragraph[]
}

export interface LiteracyAssessment {
  id: number
  literacyAssessmentContent: LiteracyAssessmentContent
}

export interface LiteracyAssessmentData {
  literacyAssessment: LiteracyAssessment
}

export interface RootObject {
  data: LiteracyAssessmentData
}
