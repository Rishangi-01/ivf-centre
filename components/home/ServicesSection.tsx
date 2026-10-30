
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
      className="relative isolate overflow-hidden bg-[#fdf2f7] py-8 sm:py-8 lg:py-8 w-[100%]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#fce7f3]/70 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#fce7f3]/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 xl:px-14">
        
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-[#f9dce9] bg-[#fce7f3] px-4 py-1.5 text-xs font-bold tracking-wide text-[#c2185b] sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-[#102e4b] sm:text-4xl md:text-[48px]">
            Comprehensive Fertility Treatments
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-sm leading-6 text-[#718499] lg:text-xl sm:leading-7">
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
                className="group relative isolate min-h-[250px] overflow-hidden rounded-[17px] border border-[#fdf2f7] bg-white shadow-[0_5px_22px_rgba(120,25,60,0.035)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(194,24,91,0.15)] focus-within:ring-2 focus-within:ring-[#d43a79] focus-within:ring-offset-2"
              >
                
                <div className="relative z-10 flex h-full min-h-[250px] flex-col items-start p-6 sm:p-7">
                  
                  <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-[#fce7f3] bg-[#fce7f3] text-[#c2185b] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  
                  <h3 className="mt-4 font-serif text-[22px] font-bold leading-tight text-[#123451] transition-colors duration-300 group-hover:text-white lg:text-[30px]">
                    {service.title}
                  </h3>

                  
                  <p className="mt-2 max-w-[330px] text-[15px] lg:text-[18px] leading-[1.6] text-[#74869a] transition-colors duration-300 group-hover:text-white/90">
                    {service.description}
                  </p>

                  
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-2 pt-4 text-sm lg:text-[18px] font-bold text-[#c2185b] transition-colors duration-300 hover:text-[#a51d55] group-hover:text-white"
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
                  className="pointer-events-none absolute inset-0 -z-0 origin-bottom bg-gradient-to-br from-[#b11b55] via-[#c2185b] to-[#68193a]"
                  style={{ transformOrigin: "bottom" }}
                  variants={{
                    rest: { scaleY: 0 },
                    hover: { scaleY: 1 },
                  }}
                  animate="rest"
                />

                
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 origin-bottom scale-y-0 bg-gradient-to-br from-[#b11b55] via-[#c2185b] to-[#68193a] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-within:scale-y-100"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
