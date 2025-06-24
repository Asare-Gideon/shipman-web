import GlobeVisualizer from "@/components/globe/globe";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { LogisticsShowcase } from "@/components/home/logistics-showcase";
import { MobileAppSection } from "@/components/home/mobile-app-section";
import { ServicesCarousel } from "@/components/home/services-carousel";
import { SliderSection } from "@/components/home/slider-section";
import { SupportedCompaniesSection } from "@/components/home/supported-companies-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-100 ">
      <div>
        <HeroSection />
        <FeaturesSection />
      </div>
      <SupportedCompaniesSection />
      <div className="">
        <SliderSection />
      </div>
      <div className="">
        <ServicesCarousel />
      </div>
      <div>
        <LogisticsShowcase />
      </div>
      <div>
        <WhyChooseUsSection />
      </div>
      <div className="">
        <MobileAppSection />
      </div>
    </div>
  );
}
