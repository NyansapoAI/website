import React from "react"

type Props = {}

export default function CompanyLanding({}: Props) {
  return (
    <div className="  w-full h-full pt-16 pb-32 flex flex-col content-center items-center justify-center min-h-screen-75">
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="font-semibold text-4xl lg:text-5xl">
                Helping children build proper foundation skills
              </h1>
              <p className="mt-4 text-lg text-blueGray-200">
                UNESCO estimates that 250 million children cannot read, write or
                count well. Without these basic  foundational skills, students
                are unable to progress with their education. We partner with
                NGOs and other actors who provide education programs to equip as
                many children as possible to  have the foundational skills to
                learn well by offering co -creating custom digital educational
                tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
