"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CareersInterface } from "./page"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  data: CareersInterface
}

export default function CareersPreview({ data }: Props) {
  return (
    <div className="bg-slate-900 w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center w-full">
          <Link className="group flex-1" href={`/careers/${data.slug.current}`}>
            <h1 className="text-2xl font-bold  text-center lg:text-left group-hover:text-slate-500 duration-300">
              {data.title}
            </h1>
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href={data.formUrl}
            className={buttonVariants({ variant: "link" })}
          >
            Apply
          </a>
        </CardTitle>
        <CardDescription>{data.duration}</CardDescription>
      </CardHeader>
    </div>
  )
}
