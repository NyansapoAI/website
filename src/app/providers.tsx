"use client"
import React, { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
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
export default function RootProviders({ children }: Props) {
  const [showAlert, setShowAlert] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState({
    message: "",
    type: "",
  })
  return (
    <ThemeProvider attribute="class">
      <AlertContext.Provider
        value={{ showAlert, setShowAlert, alertMessage, setAlertMessage }}
      >
        {children}
      </AlertContext.Provider>
    </ThemeProvider>
  )
}
