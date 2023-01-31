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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          alias molestiae repellat molestias at eaque reprehenderit vitae
          facilis. Eius optio deserunt assumenda sunt saepe perspiciatis quas
          quam magni placeat ut?
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          deserunt optio doloremque nulla facere quae corrupti quis eos quod
          officiis. Excepturi porro modi dolor soluta cupiditate accusamus
          aperiam vero magni.
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
  { value: 300, text: "Learners Reached", suffix: "+" },
  { value: 3, text: "School partners" },
  { value: 16, text: "Bootcamps conducted" },
]
function Numbers() {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-6">
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
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-4xl">{value}</h1>
        {suffix && <span className="text-2xl font-bold">{suffix}</span>}
      </div>
      <span className="text-gray-500 text-lg">{text}</span>
    </div>
  )
}
