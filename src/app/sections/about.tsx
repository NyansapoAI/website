import React from 'react'
import SectionTitle from '../components/SectionHeader'

type Props = {}

export default function About({}: Props) {
  return (
    <section id='#about' className='py-16'>
      <SectionTitle title='Why Us' pretitle='Our Benefits'>
        Nyansapo AI improves literacy and numeracy in marginalized communities
        through AI-based assessments, grouping, and activities.
      </SectionTitle>
    </section>
  )
}
