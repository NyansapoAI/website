import React from "react";
import HeroGallery from "@components/HeroGallery";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section>
      <div className="flex flex-wrap container ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-5xl 2xl:text-6xl xl:leading-tight 2xl:leading-tight">
              Supporting Literacy and Numeracy Catch-Up Interventions
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              NyansapoAI offers digital assessments to optimize literacy and
              numeracy interventions
            </p>

            <div className="flex flex-wrap gap-4  items-center">
              <Link
                href="/"
                className="px-8 py-4 text-lg font-medium text-center text-slate-800 bg-yellow-500 rounded-md inine "
              >
                Request Demo
              </Link>
              <button className="text-cyan-600 dark:text-cyan-400 flex gap-x-3 items-center ">
                <svg
                  role="img"
                  width="60"
                  height="60"
                  className="w-12 h-12"
                  viewBox="0 0 60 60"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
                    />
                    <path
                      d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
                    />
                  </g>
                </svg>
                <span> Watch Video</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          {/* <div className=''>
            <Image
              src={heroImg}
              width='616'
              height='617'
              alt='Hero Illustration'
              layout='intrinsic'
              loading='eager'
              placeholder='blur'
            />
          </div> */}
          <HeroGallery />
        </div>
      </div>
      <div>
        {/* <div className='flex flex-col justify-center'>
          <div className='text-xl text-center text-gray-700 dark:text-white'>
            <span>
              
            </span>
            Trusted by <span className='text-indigo-600'>2000+</span> customers
            worldwide
          </div>

          <div className='flex flex-wrap justify-center gap-5 mt-10 md:justify-around'>
            <div className='pt-2 text-gray-400 dark:text-gray-400'></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
