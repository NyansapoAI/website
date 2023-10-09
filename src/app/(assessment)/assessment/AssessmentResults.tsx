import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import React, { useContext } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useWindowSize } from "@uidotdev/usehooks"
import Confetti from "react-confetti"
import { AssessmentContext } from "./AssessmentContext"
import { useQuery } from "@tanstack/react-query"

type Props = {
  assessment_id: string
}
type LiteracyAssessmentResult = {
  literacyAssessment: {
    id: string
    dynamicallyGeneratedLearningLevel: {
      dynamicallyGeneratedLearningLevel: string
    }
    letterAssessmentResults: {
      correctAccordingToModelPrediction: {
        correct: boolean
      }
      answerFromOriginalModelPrediction: string
      id: string
      index: number
      urlOfRecordedVoice: string
      answerFromModifiedModelPrediction: string
    }[]
    wordAssessmentResults: {
      answerFromOriginalModelPrediction: string
      answerFromModifiedModelPrediction: string
      expectedAnswer: string
      id: string
      index: number
    }[]
    paragraphSentenceResults: {
      answerFromModifiedModelPrediction: string
      answerFromOriginalModelPrediction: string
      id: string
      index: number
      urlOfRecordedVoice: string
      wordsRightOrWrongAccordingToModelPrediction: {
        wordsRightOrWrongAccordingToOriginalModelPrediction: {
          correct: boolean
          word: string
        }[]
      }[]
    }[]
    storySentenceResults: {
      answerFromModifiedModelPrediction: string
      answerFromOriginalModelPrediction: string
      expectedAnswer: string
      id: string
      index: number
      wordsRightOrWrongAccordingToModelPrediction: {
        wordsRightOrWrongAccordingToOriginalModelPrediction: {
          correct: boolean
          word: string
        }[]
        wordsRightOrWrongAccordingToModifiedModelPrediction: {
          correct: boolean
          word: string
        }[]
      }[]
      urlOfRecordedVoice: string
    }[]
    questionAssessmentResults: {
      answerFromUser: string
      correct: boolean
      multipleChoiceQuestion: {
        question: string
        id: string
      }
    }[]
  }
}
const AssessmentResults = (props: Props) => {
  const { width, height } = useWindowSize()
  const { assessmentId } = useContext(AssessmentContext)
  console.log("assessment id:", assessmentId)
  const { isLoading, data, error } = useQuery<{
    data: LiteracyAssessmentResult
  }>(["literacyAssessment"], async () => {
    const response = await fetch("https://graphql.nyansapoai.net/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query LiteracyAssessment($where: LiteracyAssessmentWhereUniqueInput!, $literacyAssessmentConfigInput: LiteracyAssessmentConfigInput!) {
          literacyAssessment(where: $where) {
            id
            dynamicallyGeneratedLearningLevel(literacyAssessmentConfigInput: $literacyAssessmentConfigInput) {
              dynamicallyGeneratedLearningLevel
            }
            letterAssessmentResults {
              correctAccordingToModelPrediction {
                correct
              }
              answerFromOriginalModelPrediction
              id
              index
              urlOfRecordedVoice
              answerFromModifiedModelPrediction
            }
            wordAssessmentResults {
              answerFromOriginalModelPrediction
              answerFromModifiedModelPrediction
              expectedAnswer
              id
              index
            }
            paragraphSentenceResults {
              answerFromModifiedModelPrediction
              answerFromOriginalModelPrediction
              id
              index
              urlOfRecordedVoice
              wordsRightOrWrongAccordingToModelPrediction {
                wordsRightOrWrongAccordingToOriginalModelPrediction {
                  correct
                  word
                }
              }
            }
            storySentenceResults {
              answerFromModifiedModelPrediction
              answerFromOriginalModelPrediction
              expectedAnswer
              id
              index
              wordsRightOrWrongAccordingToModelPrediction {
                wordsRightOrWrongAccordingToOriginalModelPrediction {
                  correct
                  word
                }
                wordsRightOrWrongAccordingToModifiedModelPrediction {
                  correct
                  word
                }
              }
              urlOfRecordedVoice
            }
            questionAssessmentResults {
              answerFromUser
              correct
              multipleChoiceQuestion {
                question
                id
              }
            }
          }
        }`,
        variables: {
          where: { id: assessmentId },
          literacyAssessmentConfigInput: {},
        },
      }),
    })

    return response.json()
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }
  console.log(data)

  return (
    <>
      <Confetti
        className="absolute"
        width={width ?? 600}
        height={height ?? 600}
      />
      <Card className="z-50 max-w-fit bg-transapent border-none mx-auto ">
        <CardHeader className="text-center">
          <CardTitle className="">
            🎉&nbsp;Congratulations on Completing your Assessment
          </CardTitle>
          <CardDescription className="pt-4 text-md">
            <span>you have been placed at&nbsp;</span>
            <span className="capitalize bold text-primary">
              {data?.data.literacyAssessment?.dynamicallyGeneratedLearningLevel?.dynamicallyGeneratedLearningLevel.toLowerCase()}
            </span>
            &nbsp;Level
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Button className="mx-auto block" onClick={() => location.reload()}>
            Start Again
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default AssessmentResults
