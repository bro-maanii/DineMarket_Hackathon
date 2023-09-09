import { Hero } from '@/view/Hero'
import LastSection from '@/view/LastSection'
import ProductList from '@/view/ProductList'
import Section1 from '@/view/Section1'
import Section2 from '@/view/Section2'

import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <Hero />
      <br />
      <Section1/>
      <br />
      <br />
      <ProductList />
      <br /><br /><br /><br />
      <Section2/>
      <br /><br /><br /><br /><br /><br />
      <LastSection/>
      <br /><br /><br />
    </section>

  )
}
