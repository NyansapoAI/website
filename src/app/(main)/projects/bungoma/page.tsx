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
    width: 160,
    height: 130,
  },
  {
    name: "YALI",
    logo: "/imgs/logos/yali-logo.png",
    width: 140,
    height: 150,
  },
  {
    name: "Kenyatta University",
    logo: "/imgs/logos/kenyatta-university-logo.png",
    width: 140,
    height: 140,
  },
  {
    name: "Nyansapo AI",
    logo: "/imgs/logos/nyansapo-logo.png",
    width: 150,
    height: 150,
  },
  {
    name: "Amani CBO",
    logo: "/imgs/logos/amani-cbo-logo.png",
    width: 110,
    height: 150,
  },
  //   {
  //     name: "Nyansapo AI",
  //     logo: "/imgs/logos/nyansapo-logo.png",
  //   },
]
export default function BungomaProject() {
  return (
    <div className="flex flex-col bg-white text-background justify-center  gap-4 py-12 mt-24 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <main className="lg:max-w-4xl mx-auto">
        <div className="my-6">
          <section className="w-full py-12  ">
            <div className="sm:container px-4 md:px-6">
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Partners
              </h2> */}
              <h2 className="text-2xl  font-bold tracking-tighter sm:text-4xl">
                The Read Count and Shine project in patnership with
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-4 sm:gap-6 mt-8 py-8">
                {partners.map((partner, i) => {
                  return (
                    <div
                      className="relative"
                      style={{
                        width: `${partner.width}px`,
                        height: `${partner.height}px`,
                      }}
                      key={i}
                    >
                      <Image
                        alt={partner.name}
                        className="mx-auto  "
                        layout="fill"
                        src={partner.logo}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <h2 className="text-3xl font-bold tracking-tighter">
            Introduction
          </h2>
          <h4 className=" mx-auto text-background mt-2 text-lg">
            In 2015, the Uwezo learning assessments evaluated the foundational literacy and numeracy (FLN) skills of 
            children between ages of 6-16 across Uganda, Kenya and Tanzania (Nakabugo, 2015). 
            According to the Uwezo learning assessments <span className="text-primary font-bold">3/10 children</span> between ages of 
            6-16 in East Africa cannot read Grade 2-level stories with comprehension. 
            The study also revealed some of the major factors that are influencing 
            FLN education in East Africa. Communities where most children could not 
            read were in poor, arid, semi-arid communities with limited resources (Virginia et al., 2022). 
            Other important factors were socio-economic status like mothers education, home source 
            of lighting etc. Children of mothers with secondary education and higher displayed higher 
            literacy and numeracy skills compared to other children. Similarly, children in homes where 
            electricity was the source of energy outperformed the other children (Nakabugo, 2015). 
  
          </h4>
          <br></br>
          <h4 className=" mx-auto text-background mt-2 text-lg" >
            The read, count and shine project is a commmunity-based FLN program that targets, train and 
            empower teachers, parents and children for FLN education in communities. 
            Together with our partners we are implementing a Nyansapo AI FLN program powered by our 
            Nyansapo AI platform in <span className="text-primary font-bold">20 primary schools </span> in Bungoma, Kenya tagerting <span className="text-primary font-bold">5000 children</span>. 
            We are working with and training <span className="text-primary font-bold">40 school teachers</span> and teaching volunteer to implement 
            an FLN intervention as an after school hours program.
          </h4>
        </div>
   
        <section className="w-full py-12  ">
          <h2 className="text-3xl font-bold tracking-tighter">
            Proposed Impact
          </h2>
          <p className="text-lg  mt-2">
            Measuring Our Commitment to Positive Change
          </p>
          <br></br>
          <ul className="list-disc list-inside">
            <li className="mb-2">Improve learning level of 5,000 children at least one learning level</li>
            <li className="mb-2">Train and empower at least 40 teachers to implement FLN programs</li>
            <li className="mb-2">Execute FLN program in 20 primary schools</li>
            <li className="mb-2">Increase parents awareness and support for FLN programs</li>
          </ul>
        </section>
    
        <section>
          <section>
          <h2 className="text-3xl font-bold tracking-tighter">
            Follow Zawadis Journey
          </h2>
          <br></br>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2">
                <Image src="https://github.com/eai6/nyansapo_website/blob/main/zawadi.png?raw=true" alt="Random Image" className="w-full" />
              </div>
              <div className="w-full md:w-1/2" style={{ height: '100%', overflowY: 'scroll' }}>
                <h2 className="text-3xl font-bold">Zawadis Journey: Empowering Dreams through Education</h2>
                <p className="text-lg mt-4">
                In the heart of Kitui County, Kenya, in the present day, there is a bright and spirited young girl named Zawadi. 
                Zawadi is a Grade 4 student at Voo Primary School, a place filled with enthusiasm for learning and adventure. 
                Her journey with education is being significantly transformed by Nyansapo AI, an innovative learning tool that 
                has become an integral part of her daily life. Zawadi’s story is a testament to the power of education and the
                transformative impact of Nyansapo AI in the lives of young learners.

                </p>
              </div>
            </div>
          </section>
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
      <p className=" max-w-2xl">{description}</p>
    </div>
  )
}
