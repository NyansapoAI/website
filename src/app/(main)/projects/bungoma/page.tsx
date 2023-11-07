/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Br7LUYoUkgf
 */
import Link from "next/link"
import Image from "next/image"
import { Star, Users2 } from "lucide-react"
const partners = [
  {
    name: "USAID",
    logo: "/imgs/logos/usaid-logo.png",
  },
  {
    name: "YALI",
    logo: "/imgs/logos/yali-logo.png",
  },
  {
    name: "Kenyatta University",
    logo: "/imgs/logos/kenyatta-university-logo.png",
  },
  {
    name: "Amani CBO",
    logo: "/imgs/logos/amani-cbo-logo.png",
  },
  {
    name: "Nyansapo AI",
    logo: "/logo.png",
  },
  //   {
  //     name: "Nyansapo AI",
  //     logo: "/imgs/logos/nyansapo-logo.png",
  //   },
]
export default function BungomaProject() {
  return (
    <div className="flex flex-col  justify-center  gap-4 py-12 mt-24 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <main className="lg:max-w-4xl mx-auto">
        <div className="my-6">
          <section className="w-full py-12  ">
            <div className="container px-4 md:px-6">
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Partners
              </h2> */}
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                The Read Count and Shine project in patnership with
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-center gap-8 mt-8 py-8">
                {partners.map((partner, i) => {
                  return (
                    <div key={i}>
                      <Image
                        alt={partner.name}
                        className="mx-auto object-contain w-56 h-40"
                        height="400"
                        src={partner.logo}
                        width="400"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <h4 className=" mx-auto text-muted-foreground mt-2 text-lg">
            Join us on a remarkable journey as five committed partners unite to
            make a profound impact in Bungoma, Kenya. Our mission is to conduct
            a three-month Foundational Skills Learning Camp empowered by AI and
            Data, focusing on young children aged between 8 and 15. We are
            partnering with the Amani CBO in Bungoma with the support of the
            USAID, YALI RLC EA and Kenyatta university to train teachers and
            implement learning camps for&nbsp;
            <span className="text-primary font-bold">5000</span> children in
            schools across the county. Stay tuned as we share more about our
            collaborative journey and the positive changes we aim to bring to
            the young minds of Bungoma. Together, we&apos;re shaping a brighter
            tomorrow, one child at a time.
          </h4>
        </div>
        {/* <section className="w-full ">
          <div>
            <Image
              alt="Landing Video"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              height="550"
              src="/hero.png"
              width="550"
            />
          </div>
        </section> */}
        <section className="w-full py-12  ">
          <h2 className="text-3xl font-bold tracking-tighter">
            Proposed Impact
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Measuring Our Commitment to Positive Change
          </p>
          <div className="flex gap-4 lg:gap-8 flex-wrap items-center mt-6">
            <ImpactStat
              title="Unlocking Brighter Futures"
              description="Our goal is to reach 5,000 young minds through our Learning Camps, providing them with vital skills and knowledge that will shape their future."
              icon={<Star className="text-primary" />}
            />
            {/* <ImpactStat
                title="35"
                description="35 learning camps conducted in marginalized areas"
              /> */}
            <ImpactStat
              title="Teacher Engagement"
              description="We are committed to working with 20 dedicated teachers, equipping them with effective teaching methodologies to nurture young talents"
              icon={<Users2 className="text-primary" />}
            />
            {/* <ImpactStat
              title="20"
              description="Worked with 20 teachers in the learning programs"
            /> */}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured
            </h2>
            <p className="text-lg py-8">
              Stay tuned for updates on the project
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Link href="#">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    width={350}
                    alt="Blog Image"
                    className="object-cover w-full h-48"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "350/200",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">Blog Title 1</h3>
                    <p className="text-gray-700 text-base">
                      Blog Description 1
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    alt="Blog Image"
                    className="object-cover w-full h-48"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "350/200",
                      objectFit: "cover",
                    }}
                    width="350"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">Blog Title 2</h3>
                    <p className="text-gray-700 text-base">
                      Blog Description 2
                    </p>
                  </div>
                </div>
              </Link>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  )
}

type ImpactProps = {
  title: string
  description: string
  icon?: React.ReactNode
}

function ImpactStat({ title, description, icon }: ImpactProps) {
  return (
    <div className="flex flex-col items-start gap-2 ">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        {icon && icon}
      </div>
      <p className="text-slate-400 max-w-2xl">{description}</p>
    </div>
  )
}
