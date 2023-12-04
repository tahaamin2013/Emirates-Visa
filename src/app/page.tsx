import ServicesSection from "@/components/Service-Section/ServicesSection";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../components/heroSection/HeroSection")
);

export default function Home() {
  return (
    <>
      <div className="m-0">
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
}
