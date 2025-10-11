import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Releases from "@/components/sections/Releases";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />
      <section className="w-screen">
        <About />
        <Releases />
        <Contact />
      </section>
      <Footer />
      </main>
    </>
  );
}
