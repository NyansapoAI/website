import Link from "next/link"
import React from "react"

type Props = {}

export default function Story({}: Props) {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-between ">
      <div className="w-full px-4 md:w-1/2">
        <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg rounded-full "></div>
        <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg rounded-full "></div>

        <h1 className=" text-4xl xl:text-5xl mb-6">Our story</h1>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
          Nyansapo was founded by Mumbe Mwangangi and Edward Amoah in 2019 in
          Kenya. It was based on the premise of bringing “technology into
          education” to improve learning  outcomes while being a tool for
          students and instructors. Based on her lived experienced inequality in
          access to education, the organization served as product of years of
          ideating about how to confront the issues of  educational inequality
          at a larger scale for Mumbe Mwangangi .
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 ">
          Likewise, Edward Amoah, a computer engineer, was concerned about issue
          as well and brought a technological perspective to  the conversation,
          building Nyansapo which has been operation since then.
        </p>
      </div>
      <div className="">
        <Numbers />
      </div>
    </div>
  )
}
type NumberType = {
  value: number
  text: string
  suffix?: string
}
const numbers: NumberType[] = [
  { value: 2019, text: "Founded" },
  { value: 1000, text: "Learners Reached", suffix: "+" },
  { value: 13, text: "School partners" },
  { value: 36, text: "Bootcamps conducted" },
]
function Numbers() {
  return (
    <div className="grid grid-cols-2 items-center  justify-center gap-6">
      {numbers.map((number, i) => (
        <Stat
          key={i}
          value={number.value}
          text={number.text}
          suffix={number.suffix}
        />
      ))}
    </div>
  )
}

function Stat({ value, text, suffix }: NumberType) {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-4xl">{value}</h1>
        {suffix && <span className="text-2xl font-bold">{suffix}</span>}
      </div>
      <span className="text-gray-500 text-lg">{text}</span>
    </div>
  )
}
