import React from "react"
import AudioPlayer from "../AudioPlayer"
import { LiteracyAssessmentResult } from "../../start/types"
import Spinner from "@/components/ui/spinner"

type ResultInfoProps = {
  result: LiteracyAssessmentResult["literacyAssessment"]["wordAssessmentResults"][number]
}
export default function WordInfoPanel({ result }: ResultInfoProps) {
  return (
    <div className=" flex flex-col gap-3">
      <p className="flex gap-2 items-center">
        <span className="text-sm">Correct Answer</span>
        <span className="text-lg font-semibold">{result.expectedAnswer}</span>
      </p>
      <div className="flex gap-2 justify-between items-center">
        <p className="flex gap-2 items-center">
          <span className="text-sm">Model Prediction</span>
          <span className="text-lg font-semibold">
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

      {/* <p className='flex gap-2 items-center'>
          <span className='text-sm'>Student Answer</span>
          <span className='text-lg font-semibold'>
          {result.studentAnswer}
          </span>
        </p> */}
      <div>
        {result.urlOfRecordedVoice ? (
          <AudioPlayer audioLink={result.urlOfRecordedVoice} />
        ) : (
          <span className="text-rose-400 text-sm">
            <Spinner />
          </span>
        )}
      </div>
    </div>
  )
}
