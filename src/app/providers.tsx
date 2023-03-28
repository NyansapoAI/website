"use client"
import React, { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
type Props = {
  children: ReactNode
}

export default function RootProviders({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <div className="px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
        <div className="mx-auto">{children}</div>
      </div>
    </ThemeProvider>
  )
}
