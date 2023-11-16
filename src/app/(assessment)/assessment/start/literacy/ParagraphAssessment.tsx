"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mic } from "lucide-react"
import { Paragraph, WhisperApiResponse } from "../types"
import { AssessmentConfig, assessmentVariants } from "./Assessment"
import { AssessmentContext } from "./AssessmentContext"
import { RecordButton } from "./RecordButton"
import { splitIntoTwoSentencesEach } from "@/lib/utils"
import { AssessmentContent } from "./AssessmentContent"

type ParagraphAssessmentProps = {
  paragraphAssessment: Paragraph[]
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
export const ParagraphAssessments = ({
  paragraphAssessment,
  setCurrentItem,
}: ParagraphAssessmentProps) => {
  const [currentParagraph, setCurrentParagraph] = React.useState<number>(0)
  const { setAssessmentInput } = React.useContext(AssessmentContext)
  const paragraphs = React.useMemo(
    () => splitIntoTwoSentencesEach<Paragraph>(paragraphAssessment),
    [paragraphAssessment]
  )
  const handleSave = (data: WhisperApiResponse) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        paragraphSentenceResults: {
          create: [
            ...prev.paragraphSentenceResults.create,
            {
              answerFromOriginalModelPrediction: data.response,
              durationTheModelTakesToAnalzeEachSentenceInMilliseconds:
                data.duration,
              index: paragraphs[currentParagraph].index ?? currentParagraph,
              expectedAnswer: paragraphs[currentParagraph].paragraph,
              localAbsolutePathOfRecordedVoiceFile: data.url,
              urlOfRecordedVoice: data.url,
            },
          ],
        },
      }
    })
    handleNext()
  }
  const handleNext = () => {
    if (currentParagraph < AssessmentConfig.totalParagraphs) {
      setCurrentParagraph(currentParagraph + 1)
    } else {
      setCurrentItem(assessmentVariants.story)
    }
  }
  const handleBack = () => {
    if (currentParagraph == 0) setCurrentItem(assessmentVariants.word)
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1)
    }
  }

  return (
    <Card className="md:max-w-fit w-full bg-transparent border-none mx-auto  lg:px-12">
      <CardHeader>
        <CardTitle>Paragraph Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the paragraph in the card
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AssessmentContent
          suffix="."
          className="text-xl w-full p-6 sm:p-8 lg:p-12"
          content={paragraphs[currentParagraph].paragraph}
        />
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        {/* <Button variant="outline" onClick={handleBack}>
          Back
        </Button> */}
        <RecordButton setCurrentItem={setCurrentItem} callback={handleSave} />
        {/* <Button variant="outline" onClick={handleNext}>
          Next
        </Button> */}
      </CardFooter>
    </Card>
  )
}
