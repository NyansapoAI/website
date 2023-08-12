"use client"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import { AlertContext } from "@/app/providers"
type Props = {}

export default function NewsLetter({}: Props) {
  let [email, setEmail] = React.useState("")
  let { setAlertMessage, setShowAlert } = React.useContext(AlertContext)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      await sanityClient.create({
        _type: "subscribers",
        email: email,
      })
      setAlertMessage({ type: "success", message: "Thank you for subscribing" })
      setShowAlert(true)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="grid py-8 lg:py-16 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Join Our NewsLetter</h1>
        <p>
          Stay up to date with the latest projects, announcements and research,
          feel free to sign up with your email.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 items-center w-full justify-center"
      >
        <div className="relative flex-1 ">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border-0 px-3 py-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex-2">
          <button
            className="bg-yellow-500 text-gray-800 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
