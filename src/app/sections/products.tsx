import Image from "next/image";
import React from "react";
import SectionTitle from "../components/SectionHeader";
import app from "@imgs/products/app.png";
import dashboard from "@imgs/products/dashboard.png";
type Props = {};

export default function Products({}: Props) {
  return (
    <div>
      <SectionTitle pretitle="what we offer" title="Our Products" />
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <aside className=" w-full sm:flex-1 ">
          <h1 className="text-xl  mb-4 font-semibold">NyansapoAI app</h1>
          <p className="tracking-wide">
            Offers an excellent way to independently assess learners from the
            available formative assessments. Its built-in classroom features
            optimizes instructors efficiency closing the gap to see which
            learners need help, when and how through formative insights which
            track learners progress, students participation and tasks conducted
            during the interventions. Nyansapo AI tools offer an Android mobile
            application that allows you to independently assess learners&apos;
            on an Android device. With this tool, you can easily view learners
            assessments and learning levels. This tool also enables you to
            collect important data on your learners&apos; progress, helping you
            to deliver the best possible education to them.
          </p>
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
        </aside>
      </div>
    </div>
  );
}
