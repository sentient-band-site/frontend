import Header from "@/components/layout/Header";
import Releases from "@/components/layout/Releases";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

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
