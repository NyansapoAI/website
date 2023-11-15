"use client"
import React from "react"
import CountUp from "react-countup"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/A7BLnZXsECj
 */
type ImpactStatProps = {
  title: string
  description: string
  suffix?: string
}
export const ImpactStat = ({ title, description, suffix }: ImpactStatProps) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex text-4xl tracking-wide font-bold">
        <CountUp
          enableScrollSpy={true}
          start={0}
          end={parseInt(title)}
          suffix={suffix}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  )
}
