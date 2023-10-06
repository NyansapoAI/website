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
import { useRouter } from "next/navigation"

type Props = {
  learningLevel: string
}

const AssessmentResults = (props: Props) => {
  const { width, height } = useWindowSize()
  const router = useRouter()

  return (
    <>
      <Confetti
        className="absolute"
        width={width ?? 600}
        height={height ?? 600}
      />
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
          <Button
            className="mx-auto block"
            variant="outline"
            onClick={() => location.reload()}
          >
            Start Again
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default AssessmentResults
