import React from "react"
import clsx from "clsx"
import { Popover, Transition } from "@headlessui/react"
import { NumeracyAssessmentResponse } from "../../types"

type Props = {
  data: NumeracyAssessmentResponse["numeracyAssessment"]["countAndMatchResults"]
  title: string
}

function CountAndMatchResults({ data, title }: Props) {
  return (
    <div className="p-3 flex flex-col gap-4">
      <h2 className="text-xl">{title}</h2>
      <div className="flex gap-6 p-2">
        {data.map((result, i) => (
          <Popover key={result.id} className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={clsx(
                    "active:border-2 border-teal-400 rounded-md text-2xl",
                    result.correct
                      ? "text-lime-600 dark:text-lime-500"
                      : "text-rose-500"
                  )}
                >
                  {result.countAndMatch.number}
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
                    className="absolute min-w-max  left-0 z-50"
                  >
                    <div className="relative bg-slate-100 z-50  flex flex-col gap-3 dark:bg-slate-800 rounded-xl text-dark dark:text-slate-100 shadow-lg p-4">
                      <h2>Student Answer</h2>
                      <p>{result.studentAnswer}</p>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
      </div>
    </div>
  )
}

export default CountAndMatchResults
