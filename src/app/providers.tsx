'use client'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
type Props = {
  children: ReactNode
}

export default function RootProviders({ children }: Props) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
