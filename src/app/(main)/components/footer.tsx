import Link from "next/link"
import Image from "next/image"
import React from "react"
import { navigationLinks } from "@/constants/links"
import { Twitter, Facebook, Instagram, Linkedin } from "./SocialIcons"
export default function Footer() {
  const legal = [
    {
      name: "Terms of Service",
      link: "https://lydian-metatarsal-304.notion.site/NYANSAPO-AI-TERM-OF-SERVICE-1218c217191345babad183918c5d3da0",
    },
    {
      name: "Privacy Policy",
      link: "https://nyansapoai.notion.site/Privacy-Policy-dc8bf36b989140b88bc0c34329a27be6",
    },
  ]
  return (
    <div className="relative bg-secondary text-secondary-foreground px-8 py-12">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8  pt-10 mx-auto mt-5 lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col items-center">
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

          <div className="max-w-md mt-2 text-muted-foreground">
            AI For Childen:Read,Count & Shine
          </div>
        </div>

        <div className="flex md:grid grid-cols-2 items-start justify-start  gap-y-4 gap-x-12 flex-wrap w-full ">
          {navigationLinks.map((item, index) =>
            item.type == "page" ? (
              <Link
                className="hover:text-accent capitalize "
                key={index}
                href={`/${item.name}`}
              >
                {item.name}
              </Link>
            ) : item.type == "menu" ? (
              item?.subMenu &&
              item.subMenu.map((sub) => (
                <Link
                  className="hover:text-accent capitalize "
                  key={index}
                  href={`/${sub.name}`}
                >
                  {sub.name}
                </Link>
              ))
            ) : (
              <a
                className="hover:text-accent capitalize "
                key={index}
                href={`/#${item.name}`}
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <div>
          <div className="flex md:flex-col gap-4 flex-wrap w-full ">
            {legal.map((item, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={`${item.link}`}
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
