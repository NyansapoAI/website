"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import React, { useEffect, useId, useMemo, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NumeracyAssessmentContent,
  numeracyAssessmentConfig,
  numeracyAssessmentVariants,
} from "./NumeracyAssessments"
import { NumeracyAssessmentContext } from "./NumeracyAssessmentContext"
import { cn } from "@/lib/utils"

type Props = {
  data: NumeracyAssessmentContent["countAndMatchs"]
}
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}
export default function CountAndMatch({ data }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { setAssessmentInput, setCurrentItem } = React.useContext(
    NumeracyAssessmentContext
  )

  const current = data[currentQuestion]
  const answers = useMemo(() => {
    const generateAnswers = (answer: number, seed: number) => {
      let answerSet = new Set<number>()
      for (let i = 0; answerSet.size < 4; i++) {
        let newAnswer = Math.floor(seededRandom(seed + i) * 10)
        answerSet.add(newAnswer)
      }
      // Ensure the correct answer is in the set
      if (!answerSet.has(answer)) {
        // Replace a random element
        const arr = Array.from(answerSet)
        arr[Math.floor(seededRandom(seed) * 4)] = answer
        answerSet = new Set(arr)
      }
      return Array.from(answerSet)
    }
    return generateAnswers(current.number, current.number)
  }, [current.number])

  const handleNext = (answer: number) => {
    if (currentQuestion < numeracyAssessmentConfig.countAndMatch) {
      setAssessmentInput((prev) => {
        return {
          ...prev,
          data: {
            ...prev.data,
            countAndMatchResults: {
              create: [
                ...prev.data.countAndMatchResults.create,
                {
                  studentAnswer: answer,
                  index: currentQuestion,
                  countAndMatch: {
                    connect: {
                      id: current.id,
                    },
                  },
                },
              ],
            },
          },
        }
      })

      setCurrentQuestion((prev) => prev + 1)
    } else {
      //go to next page
      setCurrentItem(numeracyAssessmentVariants.numberRecognition)
    }
  }

  return (
    <Card className="border-none bg-transparent text-center">
      <CardTitle>Count And Match</CardTitle>

      <CardContent>
        <div className="flex mt-6 py-6 xl:mt-8 flex-wrap gap-6 justify-center">
          {Array.from({ length: current.number }).map((item, i) => (
            <div key={Date.now() + i} className=" ">
              <Ball />
            </div>
          ))}
        </div>
        <div className="mt-8 lg:mt-12">
          <p className="text-2xl font-bold ">How many balls are there?</p>
          <div className="flex mt-6 xl:mt-8 flex-wrap gap-6 justify-center">
            {answers.map((item, i) => (
              <div key={Date.now() + i} className=" ">
                <Button
                  onClick={() => handleNext(item)}
                  variant="outline"
                  className="p-8 xl:p-8 hover:scale-105 duration-100 border border-primary  text-xl font-bold"
                >
                  {item}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const Ball = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <Image
      onClick={() => setClicked((c) => !c)}
      width={100}
      height={100}
      className={cn(
        "hover:scale-105 duration-100",
        clicked ? "scale-105 border-2 rounded-full border-primary" : ""
      )}
      src={`/imgs/numeracy/soccer-ball.png`}
      alt="soccer ball"
    />
  )
}
