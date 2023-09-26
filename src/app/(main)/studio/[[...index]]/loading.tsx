import React from "react"

type Props = {}

function loading({}: Props) {
  return (
    <div className="bg-cyan-200 dark:bg-blue-900 w-full h-screen  rounded-md animate-pulse"></div>
  )
}

export default loading
