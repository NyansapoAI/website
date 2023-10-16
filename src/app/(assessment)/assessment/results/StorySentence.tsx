import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import AudioPlayer from "./AudioPlayer"

import { Predictions } from "./Predictions"
import { LiteracyAssessmentResult } from "../start/types"
import { ExpandResult } from "./ExpandResult"

export type SentenceProps = {
  result: LiteracyAssessmentResult["literacyAssessment"]["storySentenceResults"][number]
}
//used by paragraph and story results as they have the same schema
export default function StorySentence({ result }: SentenceProps): JSX.Element {
  const [expand, setExpand] = useState(false)

  return (
    <div
      className={`border-b-2 flex flex-col gap-2 py-4 ${
        expand && "py-6 dark:border-cyan-500"
      } dark:border-gray-600 `}
    >
      <div className="flex gap-3 p-2 flex-wrap lg:flex-nowrap items-center justify-between  ">
        <div className="flex gap-2 flex-wrap  items-center">
          {result.wordsRightOrWrongAccordingToModelPrediction
            .wordsRightOrWrongModelPrediction.length > 0 &&
            result.wordsRightOrWrongAccordingToModelPrediction.wordsRightOrWrongModelPrediction.map(
              (word, i) => (
                <span
                  key={i}
                  className={` ${
                    word.correct
                      ? "text-lime-600 dark:text-lime-300"
                      : "text-rose-500 dark:text-rose-400"
                  }`}
                >
                  <div className="relative">
                    <span className="text-lg">{word.word}</span>
                  </div>
                </span>
              )
            )}
        </div>
        <ExpandResult
          callback={() => setExpand((expand) => !expand)}
          open={expand}
        />
      </div>
      <div className="flex p-2 gap-4 flex-wrap items-center justify-between">
        {result.urlOfRecordedVoice ? (
          <AudioPlayer audioLink={result.urlOfRecordedVoice} />
        ) : (
          <span className="text-rose-400 text-sm">Audio not available</span>
        )}
      </div>

      <Transition
        show={expand}
        className="relative z-20"
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="flex flex-col gap-4">
          <Predictions result={result} />
        </div>
      </Transition>
    </div>
  )
}
