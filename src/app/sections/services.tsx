import React, { ReactNode } from "react"
import SectionTitle from "../components/SectionHeader"
import designer from "@imgs/about/Designer.png"
import insights from "@imgs/about/Analytics.png"
import track from "@imgs/about/track.png"
import Image from "next/image"
import {
  ChartBarSquareOutline,
  UsersSolid,
  HandRaisedSolid,
  ClockSolid,
  StopSolid,
} from "@graywolfai/react-heroicons"

type Props = {}
const benefits = [
  {
    title: "Digitize your Assessments",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: designer,
    bullets: [
      {
        title: "Digital Literacy and Numeracy Assesments",
        desc: " Our solution is unique in that it uses artificial intelligence and speech recognition technology to assess the literacy levels of children on a mobile phone.",
        icon: <ChartBarSquareOutline />,
      },
      {
        title: "Dynamic Grouping",
        desc: "The students who are assessed are dynamically grouped which allows for students to be reassessed and regrouped as they improve their reading skills.",
        icon: <UsersSolid />,
      },
      {
        title: "Attendance Collection",
        desc: "The teachers can collect attendance in an efficient way.",
        icon: <HandRaisedSolid />,
      },
    ],
  },
  {
    title: "Find key insights from your programs",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: insights,
    bullets: [
      {
        title: " Increase instructors efficiency",
        desc: "Stakeholders can view asssesment data in real time while the students are being assessed.",
        icon: <ClockSolid />,
      },
      {
        title: "Gain data driven Insights",
        desc: "Pinpoint areas of improvement or strength by data visualization ",
        icon: <ChartBarSquareOutline />,
      },
      {
        title: "Intervene when neccesary",
        desc: "You dont have to take our word for it that our technology works,you can intevene at any point of the assessments and make corrections or changes",
        icon: <StopSolid />,
      },
    ],
  },
]

export default function Services({}: Props) {
  return (
    <section id="#about" className="py-16">
      <SectionTitle
        pretitle="Built for Educators"
        title="Key Benefits of our Nyansapo AI platform"
      ></SectionTitle>
      {benefits.map((benefit, i) => (
        <Benefits
          key={i}
          imgPos={i % 2 == 0 ? "right" : "left"}
          data={benefit}
        />
      ))}
      {/* <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"></div> */}
    </section>
  )
}
type BenefitsProps = {
  data: typeof benefits[number]
  imgPos: string
}
function Benefits(props: BenefitsProps) {
  const { data, imgPos } = props

  return (
    <>
      <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="521"
              height="482"
              alt="Benefits"
              // placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              {/* <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
                {data.title}
              </h3> */}

              {/* <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p> */}
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type BenefitProps = {
  title: string
  icon: JSX.Element
  children: string | ReactNode
}
function Benefit(props: BenefitProps) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-cyan-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  )
}
