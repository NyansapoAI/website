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
import { LiteracyAssessmentResult } from "./start/types"
import LetterResult from "./results/LetterResult"
import ParagraphResult from "./results/ParagraphResult"
import StoryResult from "./results/StoryResult"
import WordResult from "./results/WordResult"
import StoryQuestionResults from "./results/StoryQuestionResults"
import { assessmentVariants } from "./Assessment"

type Props = {
  assessment_id: string
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
const AssessmentResults = (props: Props) => {
  const { width, height } = useWindowSize()
  const { assessmentId } = useContext(AssessmentContext)
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
              expectedAnswer
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
              urlOfRecordedVoice
              id
              index
              correctAccordingToModelPrediction {
              correct
              }
            }
            paragraphSentenceResults {
              answerFromModifiedModelPrediction
              answerFromOriginalModelPrediction
              id
              index
              urlOfRecordedVoice
              wordsRightOrWrongAccordingToModelPrediction {
                   wordsRightOrWrongModelPrediction {
          correct
          word
        }
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
                 wordsRightOrWrongModelPrediction {
                    correct
                    word
                  }
                wordsRightOrWrongAccordingToOriginalModelPrediction {
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
              multipleChoiceQuestionAnswer {
              answer
              correct
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
    return <h1>Preparing results...</h1>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }

  return (
    data && (
      <>
        <Confetti
          recycle={false}
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
                {data?.data?.literacyAssessment?.dynamicallyGeneratedLearningLevel?.dynamicallyGeneratedLearningLevel.toLowerCase()}
              </span>
              &nbsp;Level
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 justify-center">
            <div className="space-y-4 rounded-md p-6 max-h-screen scrollbar-thin scrollbar-track-rounded-sm scrollbar-thumb-blue-900 scrollbar-track-transparent overflow-y-auto">
              {data.data?.literacyAssessment &&
                data.data?.literacyAssessment.letterAssessmentResults.length >
                  0 && (
                  <LetterResult
                    title="Letter results"
                    data={data.data?.literacyAssessment.letterAssessmentResults}
                  />
                )}

              {data.data?.literacyAssessment &&
                data.data?.literacyAssessment?.wordAssessmentResults.length >
                  0 && (
                  <WordResult
                    title="Word results"
                    data={data.data?.literacyAssessment.wordAssessmentResults}
                  />
                )}
              {data.data?.literacyAssessment &&
                data.data?.literacyAssessment?.paragraphSentenceResults.length >
                  0 && (
                  <ParagraphResult
                    title="Paragraph results"
                    data={
                      data.data?.literacyAssessment.paragraphSentenceResults
                    }
                  />
                )}
              {data.data?.literacyAssessment &&
                data.data?.literacyAssessment?.storySentenceResults.length >
                  0 && (
                  <StoryResult
                    title="Story results"
                    data={data.data?.literacyAssessment.storySentenceResults}
                  />
                )}
              {data.data?.literacyAssessment &&
                data.data?.literacyAssessment?.questionAssessmentResults
                  .length > 0 && (
                  <StoryQuestionResults
                    title="Question results"
                    data={
                      data.data?.literacyAssessment.questionAssessmentResults
                    }
                  />
                )}
            </div>

            <Button className="mx-auto block" onClick={() => location.reload()}>
              Start Again
            </Button>
            <Button
              className="mx-auto block"
              onClick={() => props.setCurrentItem(assessmentVariants.feedback)}
            >
              Give feedback
            </Button>
          </CardContent>
        </Card>
      </>
    )
  )
}

export default AssessmentResults
