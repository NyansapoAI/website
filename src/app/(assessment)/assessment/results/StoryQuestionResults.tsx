import { Check, XIcon } from "lucide-react"
import { LiteracyAssessmentResult } from "../start/types"

type Props = {
  data: LiteracyAssessmentResult["literacyAssessment"]["questionAssessmentResults"]
  title: string
}
export default function StoryQuestionResults({ data, title }: Props) {
  return (
    <section className="flex flex-col gap-2 p-4">
      <h2 className="text-xl">{title}</h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 flex-wrap">
          {data.map((result, i) => (
            <div key={i} className=" flex flex-col gap-1">
              <p className="text-muted-foreground">
                {result.multipleChoiceQuestion.question}
              </p>
              {result?.multipleChoiceQuestionAnswer && (
                <p className="flex gap-2 items-center">
                  <span>{result.multipleChoiceQuestionAnswer.answer}</span>
                  {result.multipleChoiceQuestionAnswer.correct ? (
                    <Check className="text-green-500" />
                  ) : (
                    <XIcon className="text-destructive" />
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
