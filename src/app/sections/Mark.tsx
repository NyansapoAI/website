import React from "react"
export type MarkProps = {
  children: string | React.ReactNode
}

export function Mark({ children }: MarkProps) {
  return (
    <>
      <mark className="text-indigo-800 m-2 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {children}
      </mark>
    </>
  )
}
