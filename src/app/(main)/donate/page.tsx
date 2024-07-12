import React from 'react';
import Image from 'next/image';

type Props = {}

const DonatePage = (props: Props) => {
  return (
    <div>
      {/* First Section */}
      <div className='relative w-full h-screen'>
        <Image
          src="/screenshots/app/holding.jpeg"
          alt="Your Image"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
        <div className='absolute inset-0 bg-gray-800 opacity-50'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-6xl font-bold'>
            Empower Children Through <br /> Literacy & Numeracy Skills
          </h1>
          <h2 className='text-4xl text-yellow-500'>Your donation makes a difference</h2>
        </div>
      </div>

      {/* Line with Colored Boxes */}
      <div className='flex justify-center items-center py-4'>
        <div className='w-16 h-10 bg-yellow-500 mr-2'></div>
        <div className='w-16 h-10 bg-blue-500 mr-2'></div>
        <div className='w-16 h-10 bg-red-500'></div>
        <div className='w-16 h-10 bg-yellow-500 mr-2'></div>
        <div className='w-16 h-10 bg-blue-500 mr-2'></div>
        <div className='w-16 h-10 bg-red-500'></div>
        <div className='w-16 h-10 bg-yellow-500 mr-2'></div>
        <div className='w-16 h-10 bg-blue-500 mr-2'></div>
        <div className='w-16 h-10 bg-red-500'></div>
        <div className='w-16 h-10 bg-yellow-500 mr-2'></div>
        <div className='w-16 h-10 bg-blue-500 mr-2'></div>
        <div className='w-16 h-10 bg-red-500'></div>
        <div className='w-16 h-10 bg-yellow-500 mr-2'></div>
        <div className='w-16 h-10 bg-blue-500 mr-2'></div>
        <div className='w-16 h-10 bg-red-500'></div>
      </div>

      {/* Second Section */}
      <div className='flex items-center justify-between bg-gray-800 p-8'>
        <div className='bg-white p-6 rounded shadow-lg w-1/2'>
          <h3 className='text-gray-800 text-4xl font-bold mb-4'>AI FOR CHILDREN</h3>
          <p className='text-blue-500 text-xl'>
            Help us improve foundational literacy and numeracy among children using AI.<br />
          </p>
          {/* Donation Button */}
          <a
            href="https://buy.stripe.com/14k03f1RV90O1RS5kk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-lg bg-sky-500 hover:bg-sky-400 text-slate-100 rounded-full py-2 px-6"
          >
            ONLINE DONATION

          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
        <div className='relative w-1/2 h-96'> {/* Adjust height as needed */}
          <Image
            src="/screenshots/app/teacherdonate.jpeg" // Update with your second image path
            alt="Another Image"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      </div>

      {/* Third Section */}
      <div className='relative w-full h-screen'>
        <div className='absolute inset-0 bg-gray-800 opacity-50'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-4xl font-bold'>
            A Little Bit <span className='text-yellow-500'>goes a Long way</span>
          </h1>
          <br />
          <br />


          {/* White Boxes */}
          <div className='flex justify-between mt-8 w-full px-16'>
            <div className='bg-white p-6 rounded shadow-lg w-1/5 text-center'>
              <img src="/icon1.png" alt="Person Reading" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold'>ADOPT A LEARNER</h2>
              <p className='text-gray-600'>500$ per year</p>
              <p className='text-gray-800'>Help teach a learner to read by sponsoring their literacy journey.</p>
            </div>
            <div className='bg-white p-6 rounded shadow-lg w-1/5 text-center'>
              <img src="/icon2.png" alt="Teacher Teaching" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold'>TRANSFORM A CLASS</h2>
              <p className='text-gray-600'>20,000$ per year</p>
              <p className='text-gray-800'>Empower an entire class of 40 learners by providing them with the building blocks to literacy.</p>
            </div>
            <div className='bg-white p-6 rounded shadow-lg w-1/5 text-center'>
              <img src="/icon3.png" alt="Sponsor Grade" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold'>SPONSOR A GRADE</h2>
              <p className='text-gray-600'>60,000$ per year</p>
              <p className='text-gray-800'>Impact an entire grade and shift the paradigm by sponsoring 120 learners.</p>
            </div>
            <div className='bg-white p-6 rounded shadow-lg w-1/5 text-center'>
              <img src="/icon5.png" alt="Adopt School" className='mx-auto mb-4' />
              <h2 className='text-gray-800 font-bold'>ADOPT A SCHOOL</h2>
              <p className='text-gray-600'>300,000$ per year</p>
              <p className='text-gray-800'>Shift the trajectory learners lives in an entire school by sculpting their futures with the ability to read.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
