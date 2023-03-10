"use client"
import Link from "next/link"
import { Disclosure } from "@headlessui/react"
import Image from "next/image"
import ThemeSwitch from "./components/ThemeSwitch"
import { navigationLinks } from "@/constants/links"
export default function Navbar() {
  return (
    <div className="w-full relative z-50 mb-12">
      <nav className=" relative flex flex-wrap items-center justify-between py-8 lg:justify-between dark:text-gray-100 ">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/" className=" ">
                  <Image
                    src="/logo.png"
                    alt="N"
                    width="150"
                    height="150"
                    className="rounded-sm"
                  />
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 focus:outline-none dark:text-gray-300 dark:focus:bg-cyan-700"
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
                  <>
                    {navigationLinks.map((item, index) =>
                      item.type == "page" ? (
                        <Link
                          className="w-full capitalize px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 focus:outline-none dark:focus:bg-trueGray-700"
                          key={index}
                          href={`/${item.name}`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          className="w-full px-4 capitalize py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 focus:outline-none dark:focus:bg-trueGray-700"
                          key={index}
                          href={`/#${item.name}`}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                    <Link
                      href="/contact"
                      className="w-full px-6 py-2 mt-4 mb-4 text-center text-dark bg-yellow-500 rounded-md lg:ml-5"
                    >
                      <span className="">Request Demo</span>
                    </Link>
                    <ThemeSwitch />
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1  list-none lg:pt-0 lg:flex">
            {navigationLinks.map((item, index) => (
              <li className="mr-3" key={index}>
                {item.type == "page" ? (
                  <Link
                    className="w-full capitalize px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500 focus:dark:bg-cyan-500 focus:outline-none dark:focus:bg-trueGray-700"
                    key={index}
                    href={`/${item.name}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    className="w-full capitalize px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500 focus:dark:bg-cyan-500 focus:outline-none dark:focus:bg-trueGray-700"
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

        <div className="hidden mr-3 space-x-4 lg:flex">
          <Link
            href="/contact"
            className="px-6 py-2 text-dark font-semibold bg-yellow-500 rounded-md md:ml-5"
          >
            <span className="">Request Demo</span>
          </Link>
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}
