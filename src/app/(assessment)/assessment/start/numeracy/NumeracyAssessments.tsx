"use client"
import { useState, useRef, useEffect } from "react"
import autoAnimate from "@formkit/auto-animate"

import CountAndMatch from "./countAndMatch"
import {
  NumeracyAssessmentContext,
  NumeracyAssessmentInput,
  initialNumeracyAssessmentInput,
} from "./NumeracyAssessmentContext"
import NumberRecognition from "./numberRecognition"
import NumeracyOperation from "./numeracyOperation"
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
export const numeracyAssessmentVariants = {
  countAndMatch: 0,
  numberRecognition: 1,
  numeracyOperation: 2,
  wordProblem: 3,
}
/**
 * Configuration object for numeracy assessments.
 * @typedef {Object} NumeracyAssessmentConfig
 * @property {number} countAndMatch - Number of count and match assessments.
 * @property {number} numberRecognition - Number of number recognition assessments.
 * @property {number} numeracyOperation - Number of numeracy operation assessments.
 * @property {number} wordProblem - Number of word problem assessments.
 */
export const numeracyAssessmentConfig = {
  countAndMatch: 2,
  numberRecognition: 2,
  numeracyOperation: 2,
  wordProblem: 2,
} as const

const NumeracyAssessments = ({ data }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [assessmentId, setAssessmentId] = useState<number | undefined>()
  const [currentItem, setCurrentItem] = useState<number>(
    numeracyAssessmentVariants.countAndMatch
  )
  const [feedbackId, setFeedbackId] = useState<string>("")
  const [assessmentData, setAssessmentData] = useState<NumeracyAssessmentInput>(
    initialNumeracyAssessmentInput
  )
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  useEffect(() => {
    console.log(assessmentData)
  }, [assessmentData])
  return (
    <div ref={parent}>
      <NumeracyAssessmentContext.Provider
        value={{
          setCurrentItem: setCurrentItem,
          currentItem: currentItem,
          assessmentId: assessmentId,
          feedbackId: feedbackId,
          setFeedbackId: setFeedbackId,
          setAssessmentId: setAssessmentId,
          assessmentInput: assessmentData,
          setAssessmentInput: setAssessmentData,
        }}
      >
        {currentItem == numeracyAssessmentVariants.countAndMatch && (
          <CountAndMatch data={data.countAndMatchs} />
        )}
        {currentItem == numeracyAssessmentVariants.numberRecognition && (
          <NumberRecognition data={data.numberRecognitions} />
        )}
        {currentItem == numeracyAssessmentVariants.numeracyOperation && (
          <NumeracyOperation data={data.numeracyOperations} />
        )}
      </NumeracyAssessmentContext.Provider>
    </div>
  )
}
export default NumeracyAssessments
