import React from 'react'

export default function SectionTitle(props: {
  align?: string
  pretitle?: string
  title: string
  children?:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | null
    | undefined
}) {
  return (
    <div
      className={`flex w-full flex-col mt-4 ${
        props.align && props.align === 'left'
          ? ''
          : 'items-center justify-center text-center'
      }`}
    >
      {props.pretitle && (
        <div className='text-sm font-bold tracking-wider dark:text-yellow-500 text-yellow-600 uppercase'>
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className='max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white'>
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
          {props.children}
        </p>
      )}
    </div>
  )
}
