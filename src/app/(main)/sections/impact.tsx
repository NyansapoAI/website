import React from "react"
import { ImpactStat } from "./ImpactStat"

type Props = {}

export default function Impact({}: Props) {
  return (
    <div className="py-16 flex flex-col items-center">
      <div className="flex  flex-col space-y-4 justify-center items-center">
        <h1 className="text-3xl sm:text-5xl tracking-lighter font-bold text-left">
          Our Impact
        </h1>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
          We are committed to making a difference in the world. Here are some of
          the ways we&apos;ve made an impact.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 py-12">
        <ImpactStat title="1000" suffix="+" description="Leaners Assessed" />
        <ImpactStat
          title="30"
          suffix="+"
          description="learning camps conducted"
        />
        <ImpactStat title="10" description="Organizations partnered with" />
        <ImpactStat title="50" suffix="+" description="Teachers worked with" />
      </div>
    </div>
  )
}
