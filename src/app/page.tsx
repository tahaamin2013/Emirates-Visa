
import ServicesSection from "@/components/Serice-Section/ServicesSection";
import dynamic from "next/dynamic";

const HeroSection = dynamic(()=>import('../components/heroSection/HeroSection'))

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      
      </>
  )
}
