import React from "react"
export type MarkProps = {
  children: string | React.ReactNode
}

export function Mark({ children }: MarkProps) {
  return (
    <>
      <mark className="text-cyan-800 m-2 bg-cyan-100 rounded-md ring-cyan-100 ring-4 dark:ring-cyan-900 dark:bg-cyan-900 dark:text-cyan-200">
        {children}
      </mark>
    </>
  )
}
