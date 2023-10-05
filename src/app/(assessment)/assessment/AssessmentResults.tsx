import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useWindowSize } from "@uidotdev/usehooks"
import Confetti from "react-confetti"

type Props = {
  learningLevel: string
}

const AssessmentResults = (props: Props) => {
  const { width, height } = useWindowSize()

  return (
    <>
      <Confetti className="" width={width ?? 600} height={height ?? 600} />
      <Card className="z-50 max-w-fit border-none mx-auto ">
        <CardHeader className="text-center">
          <CardTitle className="">
            🎉&nbsp;Congratulations on Completing your Assessment
          </CardTitle>
          <CardDescription className="pt-4 text-md">
            <span>you have been placed at&nbsp;</span>
            <span className="capitalize bold text-primary">
              {props.learningLevel.toLowerCase()}&nbsp;
            </span>
            Level
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "max-w-fit mx-auto block"
            )}
            onClick={() => {}}
            href="/assessment/start"
          >
            Start Again
          </Link>
        </CardContent>
      </Card>
    </>
  )
}

export default AssessmentResults
