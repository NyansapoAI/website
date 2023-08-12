import React from "react"

type Props = {}

export default function Impact({}: Props) {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-left">Impact</h1>
      <div className="flex gap-4 lg:gap-8 flex-wrap items-center py-16">
        <Stat
          title="1000+"
          description="Reached over a thousand students with assessments"
        />
        <Stat
          title="30+"
          description="Over 30 learning camps conducted in marginalized areas"
        />
        <Stat
          title="10+"
          description="Partnered with 10 Organizations to empower intervention programs"
        />
      </div>
    </div>
  )
}

type StatProps = {
  title: string
  description: string
}
function Stat({ title, description }: StatProps) {
  return (
    <div className="flex flex-col items-start gap-4 max-w-[275px]">
      <h1 className="text-4xl 2xl:text-5xl font-bold">{title}</h1>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}
