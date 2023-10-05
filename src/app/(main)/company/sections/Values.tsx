import React from "react"

type Props = {}

function Values({}: Props) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6">
          Our Values
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-12 text-cyan-800 dark:text-cyan-800  flex-wrap">
          <div className="w-full  px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-yellow-200 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h6 className="text-xl font-semibold">Innovative</h6>
                <p className="mt-2 mb-4 ">
                  As a team, we always try to figure out the best way to solve a
                  challenge by adopting new ideas and creative thinking.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-yellow-200 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-asterisk"></i>
                </div>
                <h6 className="text-xl font-semibold">People centered</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Treating individuals with dignity and respect, helping
                  individuals become empowered to set and reach their personal
                  goals and recognizing the right of individuals to make
                  informed choices.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-yellow-200 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                  <i className="fas fa-circle-nodes"></i>
                </div>
                <h6 className="text-xl font-semibold">Collaboration</h6>
                <p className="mt-2 mb-4 ">
                  By the standards of the rest of the world, we overtrust. We’re
                  okay with that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
