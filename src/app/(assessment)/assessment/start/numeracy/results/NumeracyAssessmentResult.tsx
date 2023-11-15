import React, { useContext } from "react"
import CountAndMatchResults from "./CountAndMatchResults"
import NumberRecognitionResult from "./NumberRecognitionResult"
import NumeracyOperationResults from "./NumeracyOperationResults"
import WordOperationResults from "./WordOperationResults"
import { useQuery } from "@tanstack/react-query"
import Spinner from "@/components/ui/spinner"
import { NumeracyAssessmentContext } from "../NumeracyAssessmentContext"
import { NumeracyAssessmentResponse } from "../../types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Confetti from "react-confetti"
import { useWindowSize } from "@uidotdev/usehooks"
import { Button } from "@/components/ui/button"
import { numeracyAssessmentVariants } from "../NumeracyAssessments"

export const ResultVariant = {
  story: "story",
  word: "word",
  letter: "letter",
  paragraph: "paragraph",
} as const

export default function NumeracyAssessmentResult() {
  const { assessmentId, setCurrentItem } = useContext(NumeracyAssessmentContext)
  const { width, height } = useWindowSize()

  const { data, isLoading, error } = useQuery<{
    data: NumeracyAssessmentResponse
  }>(["numerayAssessment", assessmentId], async () => {
    const response = await fetch("https://graphql.nyansapoai.net/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query NumeracyAssessment(
      $where: NumeracyAssessmentWhereUniqueInput!,
      $numeracyAssessmentConfigInput: NumeracyAssessmentConfigInput!
    ) {
      numeracyAssessment(where: $where) {
        id
        countAndMatchResults {
          correct
          countAndMatch {
            number
          }
          id
          studentAnswer
        }
        dynamicallyGeneratedLearningLevel(numeracyAssessmentConfigInput: $numeracyAssessmentConfigInput) {
          dynamicallyGeneratedLearningLevel
        }
        numberRecognitionResults {
          id
          correctAccordingToModelPrediction {
            correct
          }
          urlOfRecordedVoice
          answerFromOriginalModelPrediction
          numberRecognition {
            number
          }
        }
        numeracyOperationResults {
          id
          answerFromModifiedModelPrediction
          answerFromOriginalModelPrediction
          correctAccordingToModelPrediction {
            correct
            correctAccordingToModifiedModelPrediction
            correctAccordingToOriginalModelPrediction
          }
          urlOfScreenshot
          numeracyOperation {
            correctAnswer
            firstNumber
            mathOperator
            secondNumber
          }
        }
        wordProblemResults {
          answerFromModifiedModelPrediction
          answerFromOriginalModelPrediction
          correctAccordingToModelPrediction {
            correct
            correctAccordingToModifiedModelPrediction
            correctAccordingToOriginalModelPrediction
          }
          urlOfScreenshot
          wordProblem {
            problem
            problemAnswer
          }
          id
        }
      }
    }`,
        variables: {
          where: {
            id: assessmentId,
          },
          numeracyAssessmentConfigInput: {},
        },
      }),
    })
    return response.json()
  })

  if (error)
    return (
      <p className="text-rose  text-center flex flex-col gap-2 items-center justify-center text-lg">
        <span>{(error as Error).message}</span>
      </p>
    )
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    )
  return data ? (
    <div>
      <Confetti
        recycle={false}
        className="absolute"
        width={width ? width - 100 : 600}
        height={height ? height - 100 : 600}
      />
      <Card className="z-50 max-w-fit border-none lg:max-w-5xl bg-transparent mx-auto ">
        <CardHeader className="text-center">
          <CardTitle className="">
            🎉&nbsp;Congratulations on Completing your Assessment
          </CardTitle>
          <CardDescription className="pt-4 text-md">
            <span>you have been placed at&nbsp;</span>
            <span className="capitalize bold text-primary">
              {data?.data?.numeracyAssessment?.dynamicallyGeneratedLearningLevel?.dynamicallyGeneratedLearningLevel.toLowerCase()}
            </span>
            &nbsp;Level
          </CardDescription>
        </CardHeader>
        <CardContent className="flex dark:bg-slate-900 rounded-md flex-col gap-4 lg:mt-6 justify-center">
          <div className="space-y-4 rounded-md p-6 max-h-screen scrollbar-thin scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm scrollbar-thumb-slate-800 scrollbar-track-transparent overflow-y-auto">
            {data &&
              data.data.numeracyAssessment.countAndMatchResults.length > 0 && (
                <CountAndMatchResults
                  title="Count and Match results"
                  data={data.data.numeracyAssessment.countAndMatchResults}
                />
              )}
            {data &&
              data.data.numeracyAssessment.numberRecognitionResults.length >
                0 && (
                <NumberRecognitionResult
                  title="Number Recognition results"
                  data={data.data.numeracyAssessment.numberRecognitionResults}
                />
              )}
            {data &&
              data.data.numeracyAssessment.numeracyOperationResults.length >
                0 && (
                <NumeracyOperationResults
                  data={data.data.numeracyAssessment.numeracyOperationResults}
                  title="Numeracy Operations results"
                />
              )}
            {data &&
              data.data.numeracyAssessment.wordProblemResults.length > 0 && (
                <WordOperationResults
                  data={data.data.numeracyAssessment.wordProblemResults}
                  title={"Word Problem Results"}
                />
              )}
          </div>
        </CardContent>
        <CardFooter className="flex py-3 justify-center items-center gap-6">
          {/* <Button onClick={() => location.reload()}>Start Again</Button> */}
          <Button
            onClick={() => setCurrentItem(numeracyAssessmentVariants.feedback)}
          >
            Give feedback
          </Button>
        </CardFooter>
      </Card>
    </div>
  ) : (
    <p>failed to load data,refresh</p>
  )
}
