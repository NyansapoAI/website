import { Popover, Transition } from "@headlessui/react"
import Image from "next/image"
import { NumeracyAssessmentResponse } from "../../types"

type WordOperationResultsProps = {
  data: NumeracyAssessmentResponse["numeracyAssessment"]["wordProblemResults"]
  title: string
}
export default function WordOperationResults({
  data,
  title,
}: WordOperationResultsProps) {
  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-between">
          <div className="flex gap-4 flex-wrap p-4">
            {data.map((item) => (
              <div key={item.id}>
                <h2 className="text-xl">{item.wordProblem.problem}</h2>
                <p
                  key={item.id}
                  className={`text-2xl ${
                    item.correctAccordingToModelPrediction.correct
                      ? "text-lime-600 dark:text-lime-500"
                      : "text-rose-500 dark:text-rose-400"
                  }`}
                >
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="active:border-2 border-teal-400">
                          {item.wordProblem.problemAnswer}
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
                            <div className="relative bg-slate-100 z-50  flex flex-col gap-3 dark:bg-slate-800 rounded-xl text-dark dark:text-slate-100 shadow-lg p-4">
                              <h2>Student Answer</h2>
                              {item.urlOfScreenshot && (
                                <Image
                                  src={item.urlOfScreenshot}
                                  width={100}
                                  height={100}
                                  alt="written answer"
                                ></Image>
                              )}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </p>
                <h2>
                  {
                    item.correctAccordingToModelPrediction
                      .correctAccordingToOriginalModelPrediction
                  }
                </h2>
                <h2>
                  {
                    item.correctAccordingToModelPrediction
                      .correctAccordingToModifiedModelPrediction
                  }
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
