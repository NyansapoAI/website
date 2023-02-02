import React from "react"

type Props = {}

function Values({}: Props) {
  return (
    <section className="pb-20bg-blueGray-200 -mt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-center">Our Values</h1>
        <div className="flex  text-cyan-800 dark:text-cyan-800  flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h6 className="text-xl font-semibold">People centered</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur doloremque saepe illo quos maiores quo.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-asterisk"></i>
                </div>
                <h6 className="text-xl font-semibold">Innovative</h6>
                <p className="mt-2 mb-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eius, itaque sapiente officiis dignissimos doloribus sunt?
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                  <i className="fas fa-circle-nodes"></i>
                </div>
                <h6 className="text-xl font-semibold">Collaboration</h6>
                <p className="mt-2 mb-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto quos ut eligendi eveniet suscipit officia eius fuga
                  accusantium.
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
