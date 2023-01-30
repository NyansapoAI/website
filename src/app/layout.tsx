import Navbar from "./navbar";
import "./globals.css";
import { Raleway, Alegreya_Sans } from "@next/font/google";
import RootProviders from "./providers";
import Footer from "./components/footer";
const raleway = Raleway({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
});
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
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.className} `}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className=" bg-cyan-100 dark:bg-dark duration-400 dark:text-cyan-100 text-cyan-900">
        <RootProviders>
          <Navbar />
          <main className="">{children}</main>
        </RootProviders>
        <Footer />
      </body>
    </html>
  );
}
