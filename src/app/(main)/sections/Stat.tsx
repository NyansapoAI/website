import React from "react"

type StatProps = {
  title: string
  description: string
  suffix?: string
}
export function Stat({ title, description, suffix }: StatProps) {
  return (
    <div className="flex flex-col items-start gap-4 max-w-xs">
      <h1 className="text-4xl 2xl:text-5xl font-bold">
        {title}&nbsp;{suffix && suffix}
      </h1>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}
