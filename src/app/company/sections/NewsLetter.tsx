import React from "react"

type Props = {}

export default function NewsLetter({}: Props) {
  return (
    <div className="grid py-8 lg:py-16 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Join Our NewsLetter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          nobis, corporis verpo neque impedit libero in cupiditate cumque sed
          saepe consectetur et explicabo sit delectus,
        </p>
      </div>
      <form className="flex gap-3 items-center w-full justify-center">
        <div className="relative flex-1 ">
          <input
            type="email"
            className="border-0 px-3 py-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex-2">
          <button
            className="bg-yellow-500 text-dark text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
