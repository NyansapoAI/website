import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import React from "react"
import { LiteracyAssessment } from "./[id]/types"

type Props = {
  literacy_assessment_id: number
}

const AssessmentResults = (props: Props) => {
  return (
    <Card className="max-w-fit border-none mx-auto ">
      <CardHeader className="text-center">
        <CardTitle className="text-lg text-muted-foreground">
          Your Results
        </CardTitle>
        <CardDescription className="text-4xl py-2 text-secondary-foreground">
          You have been placed at Letter Level
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4 grid grid-cols-2 gap-8">
        <div className="flex max-w-[350px] flex-col gap-4 mb-4 h-full justify-center">
          <p className="text-lg text-left flex-1  rounded-md  mx-auto">
            You&apos;ve just experienced a glimpse of what our platform can do
            for you. There&apos;s so much more to discover!
          </p>
          <Button variant="outline" onClick={() => {}}>
            Discover more
          </Button>
        </div>
        <div className="flex flex-col max-w-[350px] gap-4 justify-center">
          <p className="text-lg text-left  rounded-md  mx-auto">
            We value your feedback. Let us know about your experience with the
            assessment and any suggestions you have for improvement.
          </p>
          <Button variant="outline" onClick={() => {}}>
            get in touch
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center"></CardFooter>
    </Card>
  )
}

export default AssessmentResults
