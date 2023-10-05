import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react"
import Link from "next/link"
import Spinner from "@/components/ui/spinner"
import { buttonVariants } from "@/components/ui/button"

type Props = {}

export default function page({}: Props) {
  return (
    <div className=" p-4 md:p-8">
      <div className="max-w-fit mx-auto">
        <Card className="border-none bg-transparent">
          <CardHeader>
            <CardTitle>Assess Yourself</CardTitle>
            <CardDescription>
              This tool is designed to help you evaluate your literacy skills,
              <br />
              you&apos;ll be guided through five levels of increasing difficulty
              <br />
              and at the end you&apos;ll see your results
            </CardDescription>
            <CardContent className="p-0 ">
              <div className="my-4">
                <h2 className="font-semibold mt-4 my-2">Assessment Levels</h2>
                <ul className="list-decimal px-6 flex flex-col gap-2">
                  <li>Letter Level:Read individual letters aloud</li>
                  <li>Word Level: Pronounce words clearly</li>
                  <li>
                    Paragraph Level: Read a short paragraph with comprehension.
                  </li>
                  <li>Story Level: Engage with a complete story.</li>
                  <li>
                    Story Questions: Answer questions based on the story
                    you&apos;ve just read
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className={buttonVariants({ variant: "default" })}
                href="/assessment/start"
              >
                Start Assessment
              </Link>
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
