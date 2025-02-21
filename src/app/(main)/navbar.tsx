"use client"
import Link from "next/link"
import { Disclosure } from "@headlessui/react"
import Image from "next/image"
import ThemeSwitch from "./components/ThemeSwitch"
import { navigationLinks } from "@/constants/links"
import { CTA_TEXT } from "@/constants"
import { useWindowScroll } from "@uidotdev/usehooks"
import { useEffect, useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { CTAButton } from "./CTAButton"

export default function Navbar() {
  const [{ x, y }, scrollTo] = useWindowScroll()
  const [addBg, setAddBg] = useState(false)
  useEffect(() => {
    if (y && y > 500) {
      setAddBg(true)
    } else if (y && y < 500) {
      setAddBg(false)
    }
  }, [y])
  return (
    <div
      className={`w-full fixed ${
        addBg ? "bg-background" : "bg-gradient-to-b from-black/90"
      } text-white duration-200 via-50% top-0 left-0 z-50 `}
    >
      <nav className=" relative flex flex-wrap py-2 px-4 gap-1 items-center justify-between  lg:justify-between ">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center backdrop-blur-sm justify-between w-full lg:w-auto">
                <Link href="/" className=" ">
                  <Image
                    src="/imgs/logos/nyansapo-logo.png"
                    alt="N"
                    width="150"
                    height="150"
                    className="rounded-sm"
                  />
                </Link>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto  rounded-md lg:hidden hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 focus:outline-none  dark:focus:bg-cyan-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <div className="flex flex-col">
                    {navigationLinks.map((item, index) =>
                      item.type === "page" ? (
                        <Link
                          className="w-full capitalize px-2 py-1 rounded-md font-semibold hover:text-cyan-500 focus:text-cyan-500  focus:outline-none "
                          key={index}
                          href={`/${item.link ?? item.name}`}
                        >
                          {item.name}
                        </Link>
                      ) : item.type === "menu" ? (
                        item?.subMenu &&
                        item.subMenu.map((sub, i) => (
                          <Link
                            className="hover:text-accent font-semibold capitalize px-2 py-1  "
                            key={i}
                            href={`/${sub.name}`}
                          >
                            {sub.name}
                          </Link>
                        ))
                      ) : (
                        <a
                          className="w-full px-2 capitalize py-1 rounded-md  hover:text-cyan-500 focus:text-cyan-500  focus:outline-none "
                          key={index}
                          href={`/#${item.name}`}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                    <Link
                      href="/contact"
                      className="w-full capitalize px-2 py-1 rounded-md font-semibold  hover:text-cyan-500 focus:text-cyan-500  focus:outline-none "
                    >
                      <span className="">Contact Us</span>
                    </Link>
                    <div className="flex flex-col my-2 gap-4 px-2">
                      <a
                        href="https://platform.nyansapoai.net/auth/signup"
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "text-lg   "
                        )}
                      >
                        Get Started
                      </a>
                      <Link
                        href="/donate"
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "text-lg bg-sky-500 hover:bg-sky-400 text-slate-100"
                        )}
                      >
                        Donate
                      </Link>
                    </div>
                    {/* <ThemeSwitch /> */}
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1  list-none lg:pt-0 lg:flex">
            {navigationLinks.map((item, index) => (
              <li className="mr-2" key={index}>
                {item.type == "page" ? (
                  <Link
                    className="w-full capitalize px-2 py-1 font-semibold rounded-md hover:text-cyan-500 focus:text-cyan-500 focus:outline-none "
                    key={index}
                    href={`/${item.link ?? item.name}`}
                  >
                    {item.name}
                  </Link>
                ) : item.type === "menu" ? (
                  <NavigationMenu className="bg-transparent">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="flex items-center gap-2 bg-transparent capitalize text-md font-semibold">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="flex bg-transparent flex-col p-1 gap-1">
                        {item.subMenu?.map((subItem, index) => (
                          <Link href={`/${subItem.name}`} key={index}>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "bg-transparent capitalize text-md font-semibold w-full"
                              )}
                            >
                              {subItem.name}
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenu>
                ) : (
                  <a
                    className="w-full capitalize px-2 py-1 rounded-md font-semibold  hover:text-cyan-500 focus:text-cyan-500 focus:outline-none "
                    key={index}
                    href={`/#${item.name}`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden  space-x-2 lg:flex">
          <Link
            href="/contact"
            className="capitalize px-2 py-1 rounded-md font-semibold hover:text-cyan-500 focus:text-cyan-500  focus:outline-none "
          >
            <span className="">Contact Us</span>
          </Link>
          <CTAButton />
          <Link
            href="/donate"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-lg bg-sky-500 hover:bg-sky-400 text-slate-100"
            )}
          >
            Donate
          </Link>
          {/* <ThemeSwitch /> */}
        </div>
      </nav>
    </div>
  )
}
