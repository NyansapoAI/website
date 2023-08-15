import React from "react"

type Props = {}

export default function loading({}: Props) {
  return (
    <div className="flex gap-6 justify-center flex-wrap py-12 2xl:py-16 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <div className="bg-cyan-200 dark:bg-blue-900 w-80 h-96  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-80 h-96  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-80 h-96  rounded-md animate-pulse"></div>
    </div>
  )
}
