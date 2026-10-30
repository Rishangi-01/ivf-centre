import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import SuccessStories from "@/components/home/SuccessStories";
import BlogSection from "@/components/home/BlogSection";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <SuccessStories />
      <BlogSection />
      <AppointmentCTA />
    </div>
  );
}
