import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceStats } from "@/components/services/service-stats";
import { ServiceTestimonials } from "@/components/services/service-testimonials";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHero } from "@/components/services/services-hero";

export default function ServicesPage() {
  return (
    <main className="relative">
      <ServicesHero />
      <ServicesGrid />
      <ServiceFeatures />
      <ServiceProcess />
      <ServiceStats />
      <ServiceTestimonials />
      <ServiceCTA />
    </main>
  );
}
