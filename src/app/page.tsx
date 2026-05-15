import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import OwnerResident from "@/components/OwnerResident";
import WhyArbella from "@/components/WhyArbella";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <OwnerResident />
        <WhyArbella />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
