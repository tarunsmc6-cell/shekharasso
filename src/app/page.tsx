import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { PracticeList } from "@/components/practice-list";
import { FeaturedWork } from "@/components/featured-work";
import { Process } from "@/components/process";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { InsightsPreview } from "@/components/insights-preview";
import { CTA } from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <PracticeList />
      <FeaturedWork />
      <Process />
      <Stats />
      <Testimonials />
      <InsightsPreview />
      <CTA />
    </>
  );
}
