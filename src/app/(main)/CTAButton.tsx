"use client"
import { CTA_TEXT } from "@/constants"

export function CTAButton() {
  return (
    <a
      href="https://platform.nyansapoai.net/auth/signup"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 text-primary-foreground  bg-primary rounded-md md:ml-5"
    >
      <span className="">{CTA_TEXT}</span>
    </a>
  )
}
