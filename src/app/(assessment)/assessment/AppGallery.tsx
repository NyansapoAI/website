import React from "react"
import Image from "next/image"
type Props = {}

export default function AppGallery({}: Props) {
  return (
    <div className=" py-6">
      <div className="grid md:grid-cols-2 items-center justify-center  gap-8 lg:grid-cols-3">
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/home-screen.jpg"
            alt="Picture of the home screen"
          />
          <p className="text-center mt-2">The home page</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/letter-assessment-screen.jpg"
            alt="Picture of the letter assessment screen"
          />
          <p className="text-center mt-2">The letter assessment</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/story-assessment-screen.jpg"
            alt="Picture of the Story assessment screen"
          />
          <p className="text-center mt-2">The story assessment</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/story-questions-screen.jpg"
            alt="Picture of the Story questions screen"
          />
          <p className="text-center mt-2">The Story Questions</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/complete-assessment-screen.jpg"
            alt="Picture of the complete assessment screen"
          />
          <p className="text-center mt-2">after completing the assessment</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/grouping-screen.jpg"
            alt="Picture of the learner grouping screen"
          />
          <p className="text-center mt-2">the learner groups</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/student-screen.jpg"
            alt="Picture of the learner profile screen"
          />
          <p className="text-center mt-2">The learner profile</p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/results-screen.jpg"
            alt="Picture of the learner results "
          />
          <p className="text-center mt-2">
            A learner&apos;s assessment results
          </p>
        </div>
        <div>
          <Image
            width={300}
            height={600}
            src="/screenshots/app/activities-screen.jpg"
            alt="Picture of the learning activities"
          />
          <p className="text-center mt-2">The learning activities</p>
        </div>
      </div>
    </div>
  )
}
