import React, { ReactNode } from "react";
import SectionTitle from "../components/SectionHeader";
import time from "@imgs/about/time.png";
import digital from "@imgs/about/digital.png";
import track from "@imgs/about/track.png";
import Image from "next/image";
type Props = {};

export default function Services({}: Props) {
  return (
    <section id="#about" className="py-16">
      <SectionTitle title="Why Us" pretitle="Our Benefits">
        Nyansapo AI improves literacy and numeracy in marginalized communities
        through AI-based assessments, grouping, and activities.
      </SectionTitle>
      <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        <Card imageUrl={time.src}>Reduce Assessment time and hustle</Card>
        <Card imageUrl={digital.src}>
          No more manual data collection on paper
        </Card>
        <Card imageUrl={track.src}>
          Track individual learning levels over time
        </Card>
      </div>
    </section>
  );
}

type CardProps = {
  imageUrl: string;
  children: ReactNode | string;
};

function Card({ imageUrl, children }: CardProps) {
  return (
    <div className="flex flex-col gap-6">
      <Image
        width={300}
        className="object-contain aspect-square"
        height={300}
        src={imageUrl}
        alt="illustration"
      />
      <p className="text-xl font-semibold leading-tight">{children}</p>
    </div>
  );
}
``;
