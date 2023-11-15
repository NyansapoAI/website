import { Popover, Transition } from "@headlessui/react"
import React from "react"
import NumberRecognitionPanel from "./panels/NumberRecognitionPanel"
import { NumeracyAssessmentResponse } from "../../types"

type Props = {
  data: NumeracyAssessmentResponse["numeracyAssessment"]["numberRecognitionResults"]
  title: string
}

export default function NumberRecognitionResult({ data, title }: Props) {
  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-between">
          <div className="flex gap-4 flex-wrap">
            {data.map((result, i) => (
              <span
                key={result.id}
                className={`text-2xl ${
                  result.correctAccordingToModelPrediction.correct
                    ? "text-lime-600 dark:text-lime-500"
                    : "text-rose-500 dark:text-rose-400"
                }`}
              >
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button className="active:border-2 border-teal-400">
                        {result.numberRecognition.number}
                      </Popover.Button>
                      <Transition
                        show={open}
                        className="relative z-50"
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel
                          static
                          className="absolute min-w-max left-0 z-50"
                        >
                          {<NumberRecognitionPanel data={result} />}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                {/* <button className='relative'>
                      <span className='hidden absolute'>
                      </span>
                      {result.correctAnswer}
                    </button> */}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
