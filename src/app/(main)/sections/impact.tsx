import React from "react"
import { Stat } from "./Stat"

type Props = {}

export default function Impact({}: Props) {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-left">Impact</h1>
      <div className="flex gap-4 lg:gap-8 flex-wrap items-center py-16">
        <Stat
          title="1300"
          description="Reached over a thousand students with assessments"
        />
        <Stat
          title="35"
          description="35 learning camps conducted in marginalized areas"
        />
        <Stat
          title="10"
          description="Partnered with 10 Organizations to empower intervention programs"
        />
        <Stat
          title="45"
          description="Worked with 45 teachers in the learning programs"
        />
      </div>
    </div>
  )
}
