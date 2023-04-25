import React from "react"

type Props = {}

export default function loading({}: Props) {
  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <div className="bg-cyan-200 dark:bg-blue-900 w-64 h-64  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-64 h-64  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-64 h-64  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 w-64 h-64  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900  hidden  w-64 h-64  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 hidden md:block w-64 h-64  rounded-md animate-pulse"></div>
      <div className="bg-cyan-200 dark:bg-blue-900 hidden md:block w-64 h-64  rounded-md animate-pulse"></div>
    </div>
  )
}
