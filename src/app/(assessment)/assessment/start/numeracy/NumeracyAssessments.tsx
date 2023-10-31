"use client"
import React, { useEffect } from "react"
import CountAndMatch from "./countAndMatch"
import {
  NumeracyAssessmentContext,
  NumeracyAssessmentInput,
  initialNumeracyAssessmentInput,
} from "./NumeracyAssessmentContext"
export interface NumeracyAssessmentContent {
  id: string
  countAndMatchs: {
    id: string
    number: number
  }[]
  numberRecognitions: {
    number: number
    id: string
  }[]
  numeracyOperations: {
    firstNumber: number
    mathOperator: string
    secondNumber: number
    correctAnswer: number
    id: string
  }[]
  wordProblems: {
    id: string
    problem: string
    problemAnswer: number
  }[]
}

interface NumeracyAssessment {
  data: {
    numeracyAssessmentContent: NumeracyAssessmentContent
  }
}
type Props = {
  data: NumeracyAssessmentContent
}
const numeracyAssessmentVariants = {
  countAndMatch: 0,
  numberRecognition: 1,
  numeracyOperation: 2,
  wordProblem: 3,
}

const NumeracyAssessments = ({ data }: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [assessmentId, setAssessmentId] = React.useState<number | undefined>()
  const [currentItem, setCurrentItem] = React.useState<number>(
    numeracyAssessmentVariants.countAndMatch
  )
  const [feedbackId, setFeedbackId] = React.useState<string>("")
  const [assessmentData, setAssessmentData] =
    React.useState<NumeracyAssessmentInput>(initialNumeracyAssessmentInput)
  useEffect(() => {
    console.log(assessmentData)
  }, [assessmentData])
  return (
    <div>
      <NumeracyAssessmentContext.Provider
        value={{
          assessmentId: assessmentId,
          feedbackId: feedbackId,
          setFeedbackId: setFeedbackId,
          setAssessmentId: setAssessmentId,
          assessmentInput: assessmentData,
          setAssessmentInput: setAssessmentData,
        }}
      >
        <CountAndMatch data={data.countAndMatchs} />
      </NumeracyAssessmentContext.Provider>
    </div>
  )
}
export default NumeracyAssessments
