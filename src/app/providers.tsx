"use client"
import React, { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from "@vercel/analytics/react"
type Props = {
  children: ReactNode
}
type AlertContextTypes = {
  showAlert: boolean
  alertMessage: { message: string; type: string }
  setAlertMessage: React.Dispatch<
    React.SetStateAction<{ message: string; type: string }>
  >
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>
}
export const AlertContext = React.createContext<AlertContextTypes>({
  showAlert: false,
  setAlertMessage: () => {},
  alertMessage: { message: "", type: "" },
  setShowAlert: () => {},
})
const queryClient = new QueryClient()
export default function RootProviders({ children }: Props) {
  const [showAlert, setShowAlert] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState({
    message: "",
    type: "",
  })
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <AlertContext.Provider
          value={{ showAlert, setShowAlert, alertMessage, setAlertMessage }}
        >
          {children}
          <Analytics />
        </AlertContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
