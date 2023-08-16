import Image from "next/image"
import React from "react"
import SectionTitle from "../components/SectionHeader"
import app from "@imgs/products/app.png"
import dashboard from "@imgs/products/dashboard-dark.png"
type Props = {}

export default function Products({}: Props) {
  return (
    <div
      id="products"
      className="py-12 px-8 md:px-16 xl:px-32 2xl:px-64 bg-yellow-200 text-gray-800"
    >
      <h1 className="text-4xl font-bold w-full text-center">Our Tools </h1>
      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap gap-12 items-center justify-center py-12">
          <aside className="">
            <h1 className="text-xl  mb-4 font-semibold ">
              Nyansapo AI android app
            </h1>
            <p className="tracking-wide lg:max-w-lg">
              The Nyansapo App is a mobile app developed to improve the
              efficiency of teaching and learning. The app can accurately detect
              words mispronounced by learners as they read passages on the
              mobile screen. Detailed insights into learners&apos; reading are
              recorded and shared with instructors to develop effective learning
              activities.
            </p>
            <a
              href="https://youtu.be/hsQdHlByfzc"
              target="_blank"
              rel="help noreferrer"
              className="bg-accent text-accent-foreground mt-4 inline-block  py-2 px-4 rounded-md "
            >
              Find out more
            </a>
          </aside>
          <div className="relative">
            <Image
              width={300}
              height={400}
              className="object-contain relative z-10"
              src={app}
              alt="nyansapo AI app"
            />
            <div className="w-96 h-96 rounded-full z-0 bg-yellow-300 absolute -right-12 top-24"></div>
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row-reverse  gap-12 items-center justify-center py-12">
          <aside>
            <h1 className="text-xl font-semibold mb-4 ">Analytics Dashboard</h1>
            <p className=" tracking-wide md:max-w-md">
              The actionable dashboard provides understanding on actual learner
              engagement, disparities across various interventions, providing
              critical information for program managers and other actors to make
              high value decisions and impact actions to improve literacy and
              numeracy competencies of children.
            </p>
            <a
              href="https://youtu.be/hsQdHlByfzc"
              target="_blank"
              rel="help noreferrer"
              className="bg-accent text-accent-foreground mt-4 inline-block  py-2 px-4 rounded-md "
            >
              Find out more
            </a>
          </aside>
          <Image
            width={700}
            height={500}
            className="object-contain aspect-auto"
            src={dashboard}
            alt="nyansapo AI Dashboard"
          />
        </div>
      </div>
    </div>
  )
}
