"use client"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import { AlertContext } from "@/app/providers"
import { Input } from "@/components/ui/input"
import { toast } from "react-hot-toast"
import { Loader2 } from "lucide-react"
type Props = {}

export default function NewsLetter({}: Props) {
  let [email, setEmail] = React.useState("")
  let [loading, setLoading] = React.useState(false)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const users = await sanityClient.fetch(
        `*[_type == "subscribers" && email == $email]`,
        {
          email: email,
        }
      )
      if (users.length > 0) {
        toast.error("You are already subscribed")
        setLoading(false)
        return
      }

      await sanityClient.create({
        _type: "subscribers",
        email: email,
      })
      toast.success("Thank you for subscribing")
      setEmail("")
      setLoading(false)
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong")
      setLoading(false)
    }
  }
  return (
    <div className="flex bg-cyan-700 rounded-lg p-8 mx-auto items-center max-w-fit justify-center   gap-4 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Join Our NewsLetter</h1>
        <p className="max-w-lg">
          Stay up to date with the latest projects, announcements and research,
        </p>
      </div>
      {/* <form
        onSubmit={handleSubmit}
        className="flex gap-3 items-center w-full justify-center"
      > */}
      {/* <div className="relative flex-1 ">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border-2 border-cyan-500"
            placeholder="Enter your Email"
          />
        </div> */}
      <div className="flex-2">
        <a
          href="https://nyansapo-ai-newsletter.ck.page/10c8163d77"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-gray-800 text-center text-sm min-w-[150px] uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
          type="submit"
        >
          {loading ? <Loader2 className="animate-spin" /> : " Join Newsletter"}
        </a>
      </div>
      {/* </form> */}
    </div>
  )
}
