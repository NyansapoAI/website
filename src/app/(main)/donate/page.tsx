import React from 'react';
import Image from 'next/image';

type Props = {}

const DonatePage = (props: Props) => {
  return (
    <div>
      {/* First Section */}
      <div className='relative w-full h-screen'>
        <Image
          src="/screenshots/app/WEBSITE UPDATE 2024.jpg"
          alt="Your Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className='absolute inset-0 bg-gray-800 opacity-50'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>
            Empower Children Through <br /> Literacy & Numeracy Skills
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-1xl font-bold text-yellow-500 mt-4 text-center'>
            Your donation makes a difference
          </h2>
        </div>
      </div>

      <div className='flex justify-center items-center py-4'>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-yellow-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-blue-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-red-500'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-yellow-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-blue-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-red-500'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-yellow-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-blue-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-red-500'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-yellow-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-blue-500 mr-1 sm:mr-2'></div>
        <div className='w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 bg-red-500'></div>
      </div>

      {/* Second Section */}
      <div className='flex flex-col lg:flex-row items-center justify-between bg-gray-800 p-6 md:p-8 lg:p-10'>
        <div className='bg-gray-800 p-4 md:p-6 rounded shadow-lg lg:w-1/2 mb-6 lg:mb-0'>
          <h3 className='text-white-500 text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>AI FOR CHILDREN</h3>
          <p className='text-white-500 text-base md:text-lg lg:text-xl'>
            Help us improve foundational literacy and numeracy among children using AI.<br />
          </p>
          <a
            href="https://buy.stripe.com/14k03f1RV90O1RS5kk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm md:text-base lg:text-lg bg-sky-500 hover:bg-sky-400 text-slate-100 rounded-full py-2 px-4 md:py-2.5 md:px-6"
          >
            ONLINE DONATION
          </a>
        </div>
        <div className='relative w-full lg:w-1/2 h-72 md:h-80 lg:h-96 mb-6 lg:mb-0'>
          <Image
            src="/screenshots/app/teacherdonate.jpeg"
            alt="Another Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      {/* Third Section */}
      <div className='relative w-full h-screen'>
        <div className='absolute inset-0 bg-gray-800 opacity-50'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
            A Little Bit <span className='text-yellow-500'>goes a Long way</span>
          </h1>
          <div className='flex flex-wrap justify-center mt-6 md:mt-8 px-2 md:px-4 lg:px-0'>
            <div className='bg-white p-4 md:p-6 rounded shadow-lg w-full md:w-1/2 lg:w-1/4 text-center mb-4 lg:mb-0 lg:mr-4'>
              <img src="/icon1.png" alt="Person Reading" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold text-lg md:text-xl'>ADOPT A LEARNER</h2>
              <p className='text-gray-600 text-sm md:text-base'>500$ per year</p>
              <p className='text-gray-800 text-sm md:text-base'>Help teach a learner to read by sponsoring their literacy journey.</p>
            </div>
            <div className='bg-white p-4 md:p-6 rounded shadow-lg w-full md:w-1/2 lg:w-1/4 text-center mb-4 lg:mb-0 lg:mr-4'>
              <img src="/icon2.png" alt="Teacher Teaching" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold text-lg md:text-xl'>TRANSFORM A CLASS</h2>
              <p className='text-gray-600 text-sm md:text-base'>20,000$ per year</p>
              <p className='text-gray-800 text-sm md:text-base'>Empower an entire class of 40 learners by providing them with the building blocks to literacy.</p>
            </div>
            <div className='bg-white p-4 md:p-6 rounded shadow-lg w-full md:w-1/2 lg:w-1/4 text-center mb-4 lg:mb-0 lg:mr-4'>
              <img src="/icon3.png" alt="Sponsor Grade" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold text-lg md:text-xl'>SPONSOR A GRADE</h2>
              <p className='text-gray-600 text-sm md:text-base'>60,000$ per year</p>
              <p className='text-gray-800 text-sm md:text-base'>Impact an entire grade and shift the paradigm by sponsoring 120 learners.</p>
            </div>
            <div className='bg-white p-4 md:p-6 rounded shadow-lg w-11/12 sm:w-1/2 md:w-1/5 text-center mt-4 md:mt-0'>
              <img src="/icon5.png" alt="Adopt School" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold'>ADOPT A SCHOOL</h2>
              <p className='text-gray-600'>300,000$ per year</p>
              <p className='text-gray-800'>Shift the trajectory of learners lives in an entire school by sculpting their futures with the ability to read.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
