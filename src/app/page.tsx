import Services from "./sections/services";
import Hero from "./sections/hero";
import Products from "./sections/products";
import About from "./sections/about";
import Testimonials from "./sections/testimonials";
import Cta from "./sections/cta";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Services />
      <Products />
      <About />
      {/* <Testimonials /> */}
      <Cta />
    </main>
  );
}
