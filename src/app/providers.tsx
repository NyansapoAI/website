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
        <div className="px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
          <div className="mx-auto">{children}</div>
        </div>
      </AlertContext.Provider>
    </ThemeProvider>
  )
}
