import React from "react"
import AudioPlayer from "../AudioPlayer"
import { LiteracyAssessmentResult } from "../../start/types"

export type ResultInfoProps = {
  result: LiteracyAssessmentResult["literacyAssessment"]["letterAssessmentResults"][number]
}

export default function LetterInfoPanel({ result }: ResultInfoProps) {
  return (
    <div className="flex flex-col gap-3 ">
      <p className="flex gap-2 items-center">
        <span className="text-sm">Correct Answer</span>
        <span className="text-xl font-semibold">{result.expectedAnswer}</span>
      </p>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-3 justify-between items-center">
          <p className="flex gap-2 items-center">
            <span className="text-sm">Model Prediction</span>
            <span className="text-xl font-semibold">
              {result.answerFromOriginalModelPrediction}
            </span>
          </p>
        </div>
        {result.answerFromModifiedModelPrediction && (
          <p className="flex gap-2 items-center">
            <span className="text-sm">Updated Model Prediction</span>
            <span className="text-xl font-semibold">
              {result.answerFromModifiedModelPrediction}
            </span>
          </p>
        )}
      </div>
      <div className="">
        {result && result.urlOfRecordedVoice ? (
          <AudioPlayer audioLink={result.urlOfRecordedVoice} />
        ) : (
          <span className="text-rose-400 text-sm">audio not available</span>
        )}
      </div>
    </div>
  )
}
