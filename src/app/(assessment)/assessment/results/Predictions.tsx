import React from "react"
import { LiteracyAssessmentResult } from "../start/types"
import { Card } from "@/components/ui/card"

export type PredictionProps = {
  result:
    | LiteracyAssessmentResult["literacyAssessment"]["paragraphSentenceResults"][number]
    | LiteracyAssessmentResult["literacyAssessment"]["storySentenceResults"][number]
}
export function Predictions({ result }: PredictionProps) {
  return (
    <div className="flex p-6  flex-wrap lg:flex-nowrap relative max-w-5xl  gap-4">
      {result.wordsRightOrWrongAccordingToModelPrediction
        .wordsRightOrWrongAccordingToOriginalModelPrediction && (
        <Card className="bg-transparent p-4 bg-gray-800 w-full flex flex-col gap-2 ">
          <h4 className="text-muted-foreground">Original Model Prediction</h4>

          <p className="break-words  text-md">
            {result.answerFromOriginalModelPrediction}
          </p>
        </Card>
      )}
    </div>
  )
}
