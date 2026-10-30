
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Advanced Technology & Labs",
  "Highly Experienced Specialists",
  "Personalized Treatment Plans",
  "Emotional & Psychological Support",
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const revealLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const revealRight = {
    hidden: { opacity: 0, x: 35, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.15,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24 w-[100%]"
    >
      
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#fdf2f7]/70 blur-3xl" />
        <div className="absolute -bottom-24 right-[15%] h-72 w-72 rounded-full bg-[#fdf2f7]/60 blur-3xl" />
      </div>

      <div className="mx-auto grid grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 xl:gap-16 max-w-[1500px] px-5 lg:px-10 xl:px-14">
        
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={revealLeft}
          className="relative z-10 max-w-[540px]"
        >
          
          <span className="inline-flex items-center rounded-full border border-[#f9dce9] bg-[#fce7f3] px-4 py-1.5 text-xs font-bold tracking-wide text-[#c2185b] sm:text-sm">
            Why Choose Us
          </span>

          
          <motion.h2
            variants={revealLeft}
            className="mt-4 font-serif text-[36px] font-bold leading-[1.12] tracking-[-0.8px] text-[#102e4b] sm:text-[42px] lg:text-[38px] xl:text-[48px]"
          >
            Because You Deserve
            <br className="hidden sm:block" />
            the <span className="text-[#c2185b]">Best Care</span>
          </motion.h2>

          
          <motion.p
            variants={revealLeft}
            className="mt-4 max-w-[520px] text-[15px] lg:text-[22px] leading-[1.75] text-[#708399] sm:text-base"
          >
            We understand that every journey is unique. That&apos;s
            why we offer world-class technology, experienced
            doctors, and a caring team to support you at every step.
          </motion.p>

          
          <ul className="mt-5 space-y-3.5">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: -15 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : 0.25 + index * 0.1,
                }}
                className="group flex items-center gap-3"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c2185b] text-white transition-transform duration-300 group-hover:scale-110">
                  <Check size={13} strokeWidth={3} />
                </span>

                <span className="text-[14px] font-semibold text-[#31485f] transition-colors duration-300 group-hover:text-[#c2185b] lg:text-[18px]">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>

          
          <motion.div
            variants={revealLeft}
            className="mt-6"
          >
            <Link
              href="/about-us"
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#c2185b] px-8 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(194,24,91,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a51d55] hover:shadow-[0_12px_26px_rgba(194,24,91,0.24)]"
            >
              Learn More
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealRight}
          className="relative mx-auto w-full max-w-[760px] lg:ml-auto lg:mr-0"
        >
          
          <div className="absolute -inset-x-2 -inset-y-2 rounded-[38%_28%_35%_30%/42%_32%_38%_40%] bg-[#fce7f3] sm:-inset-x-3 sm:-inset-y-3 sm:rounded-[38%_28%_35%_30%/42%_32%_38%_40%]" />

          
          <div className="absolute -inset-x-1 -inset-y-1 rounded-[38%_28%_35%_30%/42%_32%_38%_40%] border-2 border-[#fce7f3] sm:-inset-x-2 sm:-inset-y-2" />

          
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="relative z-20 aspect-[1.42/1] w-full overflow-hidden rounded-[38%_28%_35%_30%/42%_32%_38%_40%] bg-[#fdf2f7]"
          >
            <Image
              src="/images/home/why-choose.png"
              alt="Fertility specialist discussing personalized care with a patient"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#a91e53]/5" />
          </motion.div>

          
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -7, 0], rotate: [0, 3, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-[1%] -top-[5%] z-10 w-[15%] max-w-[110px]"
          >
            <Image
              src="/images/home/why-choose-leaves.png"
              alt=""
              width={120}
              height={160}
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
