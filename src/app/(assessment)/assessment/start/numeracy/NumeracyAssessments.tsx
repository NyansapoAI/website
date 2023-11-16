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
import { WordProblem } from "./wordProblem"
import { Questionnaire } from "../../Questionnaire"
import NumeracyAssessmentResult from "./results/NumeracyAssessmentResult"
import { ResultsQuestionnaire } from "../../ResultsQuestionnaire"
export interface NumeracyAssessmentContent {
  id: number
  countAndMatchs: {
    id: number
    number: number
  }[]
  numberRecognitions: {
    number: number
    id: number
  }[]
  numeracyOperations: {
    firstNumber: number
    mathOperator: string
    secondNumber: number
    correctAnswer: number
    id: number
  }[]
  wordProblems: {
    id: number
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
  addition: 2,
  subtraction: 3,
  multiplication: 4,
  division: 5,
  wordProblem: 6,
  questionnaire: 7,
  results: 8,
  feedback: 9,
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
  numberRecognition: 1,
  numeracyOperation: 2,
  wordProblem: 1,
} as const

export enum NumeracyOperations {
  ADDITION = "ADDITION",
  SUBTRACTION = "SUBTRACTION",
  MULTIPLICATION = "MULTIPLICATION",
  DIVISION = "DIVISION",
}
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
    <div
      className="sm:max-w-fit w-full border-none h-full  mt-8  bg-transparent mx-auto "
      ref={parent}
    >
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
        {currentItem == numeracyAssessmentVariants.addition && (
          <NumeracyOperation
            operator={NumeracyOperations.ADDITION}
            data={data.numeracyOperations.filter(
              (operation) =>
                operation.mathOperator == NumeracyOperations.ADDITION
            )}
          />
        )}
        {currentItem == numeracyAssessmentVariants.subtraction && (
          <NumeracyOperation
            operator={NumeracyOperations.SUBTRACTION}
            data={data.numeracyOperations.filter(
              (operation) =>
                operation.mathOperator == NumeracyOperations.SUBTRACTION
            )}
          />
        )}
        {currentItem == numeracyAssessmentVariants.multiplication && (
          <NumeracyOperation
            operator={NumeracyOperations.MULTIPLICATION}
            data={data.numeracyOperations.filter(
              (operation) =>
                operation.mathOperator == NumeracyOperations.MULTIPLICATION
            )}
          />
        )}
        {currentItem == numeracyAssessmentVariants.division && (
          <NumeracyOperation
            operator={NumeracyOperations.DIVISION}
            data={data.numeracyOperations.filter(
              (operation) =>
                operation.mathOperator == NumeracyOperations.DIVISION
            )}
          />
        )}
        {currentItem == numeracyAssessmentVariants.wordProblem && (
          <WordProblem data={data.wordProblems} />
        )}
        {currentItem == numeracyAssessmentVariants.questionnaire && (
          <Questionnaire
            assessmentType="numeracy"
            setCurrentItem={setCurrentItem}
          />
        )}
        {currentItem == numeracyAssessmentVariants.results && (
          <NumeracyAssessmentResult />
        )}
        {currentItem == numeracyAssessmentVariants.feedback ? (
          <ResultsQuestionnaire
            assessmentType="numeracy"
            setCurrentItem={setCurrentItem}
          />
        ) : null}
      </NumeracyAssessmentContext.Provider>
    </div>
  )
}
export default NumeracyAssessments
