import React from "react"
import { Transition } from "@headlessui/react"

import LetterInfoPanel from "./panels/LetterInfoPanel"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LiteracyAssessmentResult } from "../start/types"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

type LetterResultProps = {
  title: string
  data: LiteracyAssessmentResult["literacyAssessment"]["letterAssessmentResults"]
}
export default function LetterResult({ title, data }: LetterResultProps) {
  return (
    <Card className="bg-transparent border-none flex flex-col gap-2 p-4">
      <CardTitle>
        <h2 className="text-xl">{title}</h2>
      </CardTitle>
      <CardDescription>
        to listen to the audio, click on a letter
      </CardDescription>

      <div className="flex justify-between">
        <div className="flex gap-4 flex-wrap">
          {data.map((result, i) => (
            <Popover key={result.id}>
              <PopoverTrigger className="active:border-2 border-teal-400">
                <span
                  className={`text-2xl ${
                    result.correctAccordingToModelPrediction.correct
                      ? "text-lime-600 dark:text-lime-500"
                      : "text-rose-500 dark:text-rose-400"
                  }`}
                >
                  {result.expectedAnswer}
                </span>
              </PopoverTrigger>
              <PopoverContent>
                {<LetterInfoPanel result={result} />}
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </Card>
  )
}
