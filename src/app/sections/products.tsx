import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/SectionHeader'
import app from '@imgs/products/app.png'
import dashboard from '@imgs/products/dashboard.png'
type Props = {}

export default function Products({}: Props) {
  return (
    <div>
      <SectionTitle pretitle='what we offer' title='Our Products' />
      <div className='flex gap-6 justify-between py-8'>
        <aside className='flex-1'>
          <h1 className='text-xl  mb-4 font-semibold'>NyansapoAI app</h1>
          <p>
            Nyansapo AI tools offer an Android mobile application that allows
            you to independently assess learners&apos; on an Android device.
            With this tool, you can easily view learners assessments and
            learning levels. This tool also enables you to collect important
            data on your learners&apos; progress, helping you to deliver the
            best possible education to them.
          </p>
        </aside>
        <div className='flex-1'>
          <Image
            width={700}
            height={800}
            className='object-contain'
            src={app}
            alt='nyansapo AI app'
          />
        </div>
      </div>
      <div className='flex gap-6 justify-between py-8'>
        <div className='flex-2'>
          <Image
            width={700}
            height={800}
            className='object-contain'
            src={dashboard}
            alt='nyansapo AI app'
          />
        </div>
        <aside className='flex-1'>
          <h1 className='text-xl font-semibold mb-4'>Analytics Dashboard</h1>
          <p className=''>
            Nyansapo AI tools offer a web based dashboard to manage,visualize
            and gain insights into the assesments being carried out in real
            time. With this tool, you can easily understand how the assemsents
            were carried out and help indetifiy areas of weakness. This tool is
            primarily used by program managers to help them run and manage
            assessmments effectively.
          </p>
        </aside>
      </div>
    </div>
  )
}
