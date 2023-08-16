import Image from "next/image"
import React, { ReactNode } from "react"
import SectionHeader from "../components/SectionHeader"

import userOneImg from "@imgs/testimonial/avatar.png"
import { Mark } from "./Mark"

export default function Testimonials() {
  return (
    <section className="py-8 lg:py-16">
      <SectionHeader
        pretitle="Testimonials"
        title="Here's what our customers said"
      ></SectionHeader>
      <div className="flex gap-6">
        <Testimonial
          imageUrl={userOneImg.src}
          name={"Alice"}
          title={"Manager at Zeraki"}
        >
          <p className="text-2xl leading-normal ">
            Make sure you only pick the <Mark>right sentence</Mark>
            to keep it short and simple.
          </p>
        </Testimonial>
        <Testimonial
          imageUrl={userOneImg.src}
          name={"Alice"}
          title={"Manager at Zeraki"}
        >
          <p className="text-2xl leading-normal ">
            Make sure you only pick the <Mark>right sentence</Mark>
            to keep it short and simple.
          </p>
        </Testimonial>
        <Testimonial
          imageUrl={userOneImg.src}
          name={"Alice"}
          title={"Manager at Zeraki"}
        >
          <p className="text-2xl leading-normal ">
            Make sure you only pick the <Mark>right sentence</Mark>
            to keep it short and simple.
          </p>
        </Testimonial>
      </div>
    </section>
  )
}
type AvatarProps = {
  imageUrl: string
  name: string
  title: string
}
type TestimonialProps = {
  imageUrl: string
  children: string | ReactNode
  name: string
  title: string
}
function Testimonial({ children, name, title }: TestimonialProps) {
  return (
    <div className="">
      <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 dark:bg-trueGray-800">
        {children}
        <Avatar imageUrl={userOneImg.src} name={name} title={title} />
      </div>
    </div>
  )
}

function Avatar({ imageUrl, name, title }: AvatarProps) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={imageUrl} width="40" height="40" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  )
}
