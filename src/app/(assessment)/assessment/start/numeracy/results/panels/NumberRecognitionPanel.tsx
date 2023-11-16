import React, { SyntheticEvent, useEffect, useState } from "react"

import { Transition } from "@headlessui/react"
import toast from "react-hot-toast"
import { NumeracyAssessmentResponse } from "../../../types"
import AudioPlayer from "@/app/(assessment)/assessment/results/AudioPlayer"

export type ResultInfoProps = {
  data: NumeracyAssessmentResponse["numeracyAssessment"]["numberRecognitionResults"][number]
}

export default function NumberRecognitionPanel({ data }: ResultInfoProps) {
  return (
    <div className="relative bg-slate-100 z-50 max-w-xl flex flex-col gap-3 dark:bg-slate-800 rounded-xl text-dark dark:text-slate-100 shadow-lg p-4">
      <p className="flex gap-2 items-center">
        <span className="text-sm">Correct Answer</span>
        <span className="text-xl font-semibold">
          {data.numberRecognition.number}
        </span>
      </p>
      <p className="flex gap-2 items-center">
        <span className="text-sm">Model Prediction</span>
        <span className="text-xl font-semibold">
          {data.answerFromOriginalModelPrediction}
        </span>
      </p>

      <div className="">
        {data && data.urlOfRecordedVoice ? (
          <AudioPlayer audioLink={data.urlOfRecordedVoice} />
        ) : (
          <span className="text-rose-400 text-sm">audio not available</span>
        )}
      </div>
    </div>
  )
}
