import './globals.css'
import Navbar from './navbar'
import { Raleway, Alegreya_Sans } from '@next/font/google'
import RootProviders from './providers'
const raleway = Raleway({
  subsets: ['latin'],
  // default, can also use "swap" to ensure custom font always shows
  display: 'optional',
})
// const alegreya = Alegreya_Sans({
//   subsets: ['latin'],
//   // default, can also use "swap" to ensure custom font always shows
//   variable: '--font-alegreya',
//   display: 'optional',
//   weight: '400',
// })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${raleway.className} `}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className='dark:bg-dark bg-cyan-100 duration-400 dark:text-cyan-100 text-cyan-900'>
        <RootProviders>
          <Navbar />
          <div className=''>{children}</div>
        </RootProviders>
      </body>
    </html>
  )
}
