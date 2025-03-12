"use client"
import React from "react"
import { Anton } from "next/font/google"
import Image from "next/image"
import { motion } from "framer-motion"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

type Props = {}

export default function Story({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex pt-14 flex-col gap-6 items-start ">
        <div className="md:max-w-2xl mt-1">
          {/* <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 my-6 shadow-lg rounded-full "></div>
          <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg rounded-full "></div> */}

          <h1
            className={`text-5xl lg:text-7xl py-4 font-bold w-full text-left ${anton.className}`}
          >
            About us
          </h1>
        </div>
      </div>
      <Image
        src="/imgs/hero/background/bg3.webp"
        width={500}
        height={700}
        alt=""
        className="rounded-3xl w-[80vw] h-[65vh] object-cover my-8"
      />
    </motion.div>
  )
}
