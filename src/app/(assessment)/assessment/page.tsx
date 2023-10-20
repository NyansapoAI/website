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
import AppGallery from "./AppGallery"
import DashboardGallery from "./DashboardGallery"
import { cn } from "@/lib/utils"

type Props = {}

export default function page({}: Props) {
  return (
    <div className="  p-4 md:p-8">
      <div className="max-w-fit mx-auto">
        <Card className="border-none container max-w-4xl flex flex-col gap-8 shadow-none bg-transparent">
          <div>
            <CardTitle>What is Nyansapo AI Literacy Assessment? </CardTitle>
            <CardDescription className="text-md py-2">
              It is a digital rapid assessment tool that uses Artificial
              Intelligence (AI) to diagnose the literacy learning gaps of
              children in lower primary. The current Nyansapo AI Assessments
              follow the Teaching at the Right Level (TaRL) assessment protocol
              and classify children in the beginner, letter, word, paragraph,
              story, and above learning levels according to their reading
              performance.
            </CardDescription>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "max-w-fit "
              )}
              href="/assessment/start"
            >
              Try Assessment
            </Link>
          </div>
          <div>
            <CardTitle>Who is this made for?</CardTitle>
            <CardDescription className="text-md py-2">
              The Nyansapo AI mobile assessments help parents, teachers, and
              Education institutions monitor children&apos;s literacy learning
              gaps and progress. For teachers implementing accelerated learning
              programs (ALP) or TaRL literacy intervention, the Nyansapo AI
              mobile application provides a holistic digital platform to manage
              your remedial class. The Nyansapo AI assessments allow you to
              assess your children quickly and reliably from anywhere to
              identify their learning gaps. You can track the details of
              children’s learning gaps—information like the words mispronounced
              by children, etc. The mobile application also provides a library
              of teaching guides and activities to deliver targeted lessons to
              address children&apos;s specific learning gaps.
            </CardDescription>
            <AppGallery />
          </div>
          <div>
            <CardTitle>How to get Nyansapo AI mobile app? </CardTitle>
            <CardDescription className="text-md py-2">
              The Nyansapo AI mobile application is coming soon. Share your
              email with us after testing the demonstration web version of the
              Nyansapo AI literacy assessments, and you will be among the first
              lucky people to know when we launch.
            </CardDescription>
          </div>
          <div>
            <CardTitle>What else do we offer? </CardTitle>
            <CardDescription className="text-md py-2">
              The Nyansapo AI management portal provides educational
              institutions with an intuitive website portal to manage literacy
              and numeracy accelerated learning programs. The management
              platform gives you everything you need to manage ALP, from teacher
              registration, training, and assignment to the real-time monitoring
              of ALP activities on the ground. Children’s daily attendance and
              learning progress are just a few examples of what you can access
              on the management portal.
            </CardDescription>
            <DashboardGallery />
          </div>
          {/* <CardContent className="p-0 ">
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
          </CardContent> */}
        </Card>
      </div>
    </div>
  )
}
