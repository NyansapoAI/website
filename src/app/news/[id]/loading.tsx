import React from "react"

type Props = {}

export default function loading({}: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-cyan-200 dark:bg-blue-900 w-96 mx-auto h-64 rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-full h-96 rounded-md animate-pulse"></div>
    </div>
  )
}
