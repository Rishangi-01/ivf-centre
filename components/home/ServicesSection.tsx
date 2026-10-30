
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  Dna,
  Heart,
  Snowflake,
  HeartHandshake,
  ClipboardList,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "IVF Treatment",
    description:
      "High success rate with advanced IVF techniques and personalised care plans.",
    href: "/services/ivf-treatment",
    icon: Stethoscope,
  },
  {
    title: "ICSI Treatment",
    description:
      "Specialised treatment for male infertility with precise sperm injection technology.",
    href: "/services/icsi-treatment",
    icon: Dna,
  },
  {
    title: "IUI Treatment",
    description:
      "A simple and effective solution for couples with fertility challenges.",
    href: "/services/iui-treatment",
    icon: Heart,
  },
  {
    title: "Egg Freezing",
    description:
      "Preserve your fertility for a brighter future with safe and reliable egg freezing.",
    href: "/services/egg-freezing",
    icon: Snowflake,
  },
  {
    title: "Donor Program",
    description:
      "Trusted donor programs with complete medical screening and support.",
    href: "/services/donor-program",
    icon: HeartHandshake,
  },
  {
    title: "Fertility Evaluation",
    description:
      "Personalised diagnosis and treatment plans for better results.",
    href: "/services/fertility-evaluation",
    icon: ClipboardList,
  },
];

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f5fbf9] py-8 sm:py-8 lg:py-8 w-[100%]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#e5f5f0]/70 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#e4f4ef]/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 xl:px-14">
        
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-[#d8eee8] bg-[#e1f5ef] px-4 py-1.5 text-xs font-bold tracking-wide text-[#176b68] sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-[#102e4b] sm:text-4xl md:text-[42px]">
            Comprehensive Fertility Treatments
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-sm leading-6 text-[#718499] sm:text-base sm:leading-7">
            From diagnosis to delivery, we provide a full range of
            fertility solutions under one roof, tailored to your
            unique needs.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -5 }
                }
                className="group relative isolate min-h-[250px] overflow-hidden rounded-[17px] border border-[#e8f2ef] bg-white shadow-[0_5px_22px_rgba(29,87,78,0.035)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(8,101,104,0.15)] focus-within:ring-2 focus-within:ring-[#5da8a0] focus-within:ring-offset-2"
              >
                
                <div className="relative z-10 flex h-full min-h-[250px] flex-col items-start p-6 sm:p-7">
                  
                  <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-[#e0f2ed] bg-[#e3f5ef] text-[#176b68] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  
                  <h3 className="mt-4 font-serif text-[22px] font-bold leading-tight text-[#123451] transition-colors duration-300 group-hover:text-white sm:text-[23px]">
                    {service.title}
                  </h3>

                  
                  <p className="mt-2 max-w-[330px] text-[15px] leading-[1.6] text-[#74869a] transition-colors duration-300 group-hover:text-white/90">
                    {service.description}
                  </p>

                  
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-[#146c68] transition-colors duration-300 hover:text-[#0b514e] group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                <motion.div
                  aria-hidden="true"
                  initial={false}
                  className="pointer-events-none absolute inset-0 -z-0 origin-bottom bg-gradient-to-br from-[#13817c] via-[#086568] to-[#064d53]"
                  style={{ transformOrigin: "bottom" }}
                  variants={{
                    rest: { scaleY: 0 },
                    hover: { scaleY: 1 },
                  }}
                  animate="rest"
                />

                
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 origin-bottom scale-y-0 bg-gradient-to-br from-[#13817c] via-[#086568] to-[#064d53] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-within:scale-y-100"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
