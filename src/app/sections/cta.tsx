import Link from "next/link"
import React from "react"

export default function Cta() {
  return (
    <div className="flex overflow-clip relative flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-dark dark:bg-accent2/80  px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <div className="w-96 h-96 rounded-full z-10 bg-cyan-300 absolute -right-60 -top-60"></div>
      <div className="flex-grow relative z-20 text-center lg:text-left">
        <h2 className="text-2xl font-medium lg:text-3xl">
          Get Started with our literacy and numeracy tools today
        </h2>
        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl"></p>
      </div>
      <div className="flex-shrink-0 relative z-20 w-full text-center lg:w-auto">
        <Link
          href="/contact"
          className="inline-block py-3 mx-auto text-xl  text-center font-semibold text-dark bg-yellow-500 rounded-md px-7 lg:px-10 lg:py-5 "
        >
          Request Demo
        </Link>
      </div>
    </div>
  )
}
