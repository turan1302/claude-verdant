import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Hero from "@/components/sections/Hero";
import NewArrivals from "@/components/sections/NewArrivals";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProducts />
        <NewArrivals />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
