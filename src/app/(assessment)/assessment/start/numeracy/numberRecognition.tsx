import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import React, { useContext, useState } from "react"
import { AssessmentContent } from "../literacy/AssessmentContent"
import { RecordButton } from "../literacy/RecordButton"
import {
  NumeracyAssessmentContent,
  numeracyAssessmentConfig,
  numeracyAssessmentVariants,
} from "./NumeracyAssessments"
import { NumeracyAssessmentContext } from "./NumeracyAssessmentContext"
import { WhisperApiResponse } from "../types"

type Props = {
  data: NumeracyAssessmentContent["numberRecognitions"]
}

export default function NumberRecognition({ data }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { setAssessmentInput, setCurrentItem } = useContext(
    NumeracyAssessmentContext
  )
  const handleSave = (resp: WhisperApiResponse) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        data: {
          ...prev.data,
          numberRecognitionResults: {
            create: [
              ...prev.data.numberRecognitionResults.create,
              {
                answerFromOriginalModelPrediction: resp.response,
                durationTheModelTakesToAnalzeEachNumberInMilliseconds: 0,
                urlOfRecordedVoice: resp.url,
                localAbsolutePathOfRecordedVoiceFile: "",

                numberRecognition: {
                  connect: {
                    id: data[currentQuestion].id,
                  },
                },
              },
            ],
          },
        },
      }
    })
    handleNext()
  }
  const handleNext = () => {
    if (currentQuestion < numeracyAssessmentConfig.numberRecognition) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentItem(numeracyAssessmentVariants.addition)
    }
  }

  return (
    <Card className="max-w-fit shadow-none border-none bg-transparent mx-auto lg:px-12">
      <CardHeader>
        <CardTitle>Number Recognition Assessment</CardTitle>
        <CardDescription className="max-w-2xl">
          Click the start recording button and read the number , once you are
          done reading, click stop recording
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AssessmentContent content={data[currentQuestion].number.toString()} />
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        {/* <Button variant="outline" onClick={handleBack}>
          Back
        </Button> */}
        <RecordButton
          callback={handleSave}
          setCurrentItem={setCurrentQuestion}
        />
        {/* <Button variant="outline" onClick={handleNext}>
          Next
        </Button> */}
      </CardFooter>
    </Card>
  )
}
