import React, { useState, Fragment, Dispatch } from "react"
import { Dialog, Transition } from "@headlessui/react"

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function Video({ isOpen, setIsOpen }: Props) {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        className="absolute z-50 top-0 left-0 flex items-center justify-center w-full min-h-screen bg-black/90"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel>
          <iframe
            className="w-[400px] rounded-lg h-[300px] md:w-[600px] md:h-[400px]"
            src="https://www.youtube.com/embed/l-SkMCA2kyI"
            title="Nyansapo AI introduction video"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}
