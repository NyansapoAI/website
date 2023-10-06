"use client"
import { cn } from "@/lib/utils"
import * as React from "react"

type ContentProps = {
  content: string
  className?: string
}
export const AssessmentContent = ({ content, className }: ContentProps) => {
  return (
    <p
      className={cn(
        "text-4xl text-center dark:bg-cyan-900 bg-cyan-100 rounded-md font-bold w-80 p-16 mx-auto",
        className
      )}
    >
      {content}
    </p>
  )
}
