"use client"
import React from "react"
import { AlertContext } from "../../providers"

export default function Alert() {
  const { showAlert, setShowAlert, setAlertMessage, alertMessage } =
    React.useContext(AlertContext)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false)
      setAlertMessage({ message: "", type: "" })
    }, 5000)
    return () => clearTimeout(timer)
  }, [setShowAlert, setAlertMessage])

  function handleCloseAlert() {
    setShowAlert(false)
    setAlertMessage({ message: "", type: "" })
  }

  return showAlert ? (
    <div
      className={`mt-12 mx-4 px-4 rounded-md border-l-4 ${
        alertMessage.type == "success" && "border-green-500 bg-green-50"
      }
         ${alertMessage.type == "error" && "border-red-500 bg-red-50"}
       md:max-w-2xl md:mx-auto md:px-8`}
    >
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 rounded-full ${
                alertMessage.type == "success" && "text-green-500"
              }
               ${alertMessage.type == "error" && "text-red-500"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span
              className={`
            ${alertMessage.type == "success" && "text-green-600"}
            ${alertMessage.type == "error" && "text-red-600"}
            font-semibold
            `}
            >
              {alertMessage.type == "success"
                ? "Success"
                : alertMessage.type == "error"
                ? "Error"
                : ""}
            </span>
            <p
              className={`
            ${alertMessage.type == "success" && "text-green-600"}
            ${alertMessage.type == "error" && "text-red-600"}
            `}
            >
              {alertMessage.message}
            </p>
          </div>
        </div>
        <button
          onClick={handleCloseAlert}
          className={`self-start ${
            alertMessage.type == "success" && "text-green-600"
          }
            ${alertMessage.type == "error" && "text-red-600"}
            `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <></>
  )
}
