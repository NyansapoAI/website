import Image from "next/image"
import React from "react"
import SectionTitle from "../components/SectionHeader"
import app from "@imgs/products/app.png"
import dashboard from "@imgs/products/dashboard.png"
type Props = {}

export default function Products({}: Props) {
  return (
    <div id="products">
      <SectionTitle pretitle="what we offer" title="Our Products" />
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <aside className=" w-full sm:flex-1 ">
          <h1 className="text-xl  mb-4 font-semibold">NyansapoAI app</h1>
          <p className="tracking-wide">
            The Nyansapo App is a mobile app developed to improve the efficiency
            of teaching and learning. The app can accurately detect words
            mispronounced by learners as they read passages on the mobile
            screen. Detailed insights into learners&apos; reading are recorded
            and shared with instructors to develop effective learning
            activities.
          </p>
          <a
            href="https://youtu.be/hsQdHlByfzc"
            target="_blank"
            rel="help noreferrer"
            className="bg-yellow-500 mt-4 inline-block text-dark py-2 px-4 rounded-md "
          >
            See it in action
          </a>
        </aside>
        <div className="flex-1">
          <Image
            width={400}
            height={500}
            className="object-contain"
            src={app}
            alt="nyansapo AI app"
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row gap-6 justify-between py-8">
        <div className="flex-2">
          <Image
            width={700}
            height={800}
            className="object-contain aspect-auto"
            src={dashboard}
            alt="nyansapo AI Dashboard"
          />
        </div>
        <aside className="w-full sm:w-auto sm:flex-1">
          <h1 className="text-xl font-semibold mb-4">Analytics Dashboard</h1>
          <p className=" tracking-wide">
            The actionable dashboard provides understanding on actual learner
            engagement, disparities across various interventions, providing
            critical information for program managers and other actors to make
            high value decisions and impact actions to improve literacy and
            numeracy competencies of children.
          </p>
          <button className="bg-yellow-500 mt-4 text-dark py-2 px-4 rounded-md ">
            See it in action
          </button>
        </aside>
      </div>
    </div>
  )
}
