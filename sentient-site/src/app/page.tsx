import Header from "@/components/Header";
import About from "@/components/About";
import Releases from "@/components/Releases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
