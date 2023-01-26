import About from './sections/about'
import Hero from './sections/hero'
import Products from './sections/products'

export default function Home() {
  return (
    <main className='container'>
      <Hero />
      <About />
      <Products />
    </main>
  )
}
