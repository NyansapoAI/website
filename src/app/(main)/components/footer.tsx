import Link from "next/link"
import Image from "next/image"
import React from "react"
import { navigationLinks } from "@/constants/links"
import { Twitter, Facebook, Instagram, Linkedin } from "./SocialIcons"
export default function Footer() {
  const legal = [
    {
      name: "Terms",
      link: "https://nyansapoai.notion.site/General-Terms-and-Conditions-for-Nyansapo-AI-0d96f12e14394c4d81e4ff8d4844c5fc",
    },
    {
      name: "Privacy",
      link: "https://nyansapoai.notion.site/Privacy-Policy-dc8bf36b989140b88bc0c34329a27be6",
    },
  ]
  return (
    <div className="relative px-8 py-12">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div>
            <Link href="/" className="flex gap-4 items-center">
              <span className="flex items-center space-x-2 text-2xl font-medium text-cyan-500 dark:text-gray-100">
                <Image
                  src="/logo.png"
                  alt="NyansapoAI"
                  width="150"
                  height="150"
                />
              </span>
            </Link>
          </div>

          <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            AI For Childen:Read,Count & Shine
          </div>
        </div>

        <div>
          <div className="flex  md:flex-col  gap-4 flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {navigationLinks.map((item, index) =>
              item.type == "page" ? (
                <Link
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500  focus:outline-none dark:focus:bg-trueGray-700"
                  key={index}
                  href={`/${item.name}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500  focus:outline-none dark:focus:bg-trueGray-700"
                  key={index}
                  href={`/#${item.name}`}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
        <div>
          <div className="flex md:flex-col gap-4 flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {legal.map((item, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={`/${item.link}`}
              >
                <span className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 focus:outline-none dark:focus:bg-trueGray-700">
                  {item.name}
                </span>
              </a>
            ))}
            <Link
              className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500  focus:outline-none dark:focus:bg-trueGray-700"
              href="/studio"
            >
              Studio
            </Link>
          </div>
        </div>
        <div className="">
          <div>Follow us</div>
          <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
            <a
              href="https://twitter.com/nyansapo_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/twivamwe?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>
            <a
              href="https://instagram.com/nyansapo_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/showcase/nyansapo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Linkedin</span>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
