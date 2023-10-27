import React from "react"

type Props = {}

export default function loading({}: Props) {
  return (
    <div className="flex flex-col gap-8 py-12 2xl:py-16 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1000px]">
      <div className="bg-cyan-200 dark:bg-blue-900 w-full mx-auto h-12 rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-full h-96 rounded-md animate-pulse"></div>
    </div>
  )
}
