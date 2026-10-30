"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  HeartHandshake,
  Stethoscope,
  UsersRound,
  UserRound,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.7,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fbfcfa] w-[100%]"
    >
      <motion.div className="absolute inset-0 -z-20">
        <Image
          src="/images/hope-ivf-couple.png"
          alt="Expectant couple sharing a joyful moment during their journey to parenthood"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[60%_center] lg:object-center"
        />
      </motion.div>

      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#fce7f3]/60 blur-3xl" />
        <div className="absolute right-[15%] top-0 h-80 w-80 rounded-full bg-[#f7eee5]/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#fdf2f7]/60 blur-3xl" />
      </div> */}

      <div className="mx-auto grid min-h-[650px] grid-cols-1 items-center gap-8 pb-12 pt-10 lg:min-h-[580px] lg:grid-cols-[1.3fr_1.07fr] lg:gap-0 max-w-[1500px] px-5 lg:px-10 xl:px-14 lg:pb-8 lg:pt-8">
        <div className="relative z-20 flex flex-col items-start lg:py-8">
          

          <motion.h1
            {...reveal(0.2)}
            className="max-w-[760px] font-sans text-[5rem] font-bold leading-[1.04] tracking-[-1.4px] text-[#102e4b] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[4rem]"
          >
            Advanced IVF Care
            <br className="hidden sm:block" /> for a{" "}
            <span className="text-[#dd3777] xl:text-[6rem]">Brighter</span>
            <br />
            <span className="text-[#dd3777] xl:text-[6rem]">Tomorrow</span>
          </motion.h1>
          
          <motion.div
            {...reveal(0.4)}
            className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[#dd3777] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(194,24,91,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dd3777] hover:shadow-[0_14px_30px_rgba(194,24,91,0.24)] sm:px-9"
            >
              Book Free Consultation
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border-2 border-[#dd3777] bg-white/80 px-7 py-4 text-sm font-semibold text-[#dd3777] hover:text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#dd3777] hover:bg-[#dd3777] sm:px-9"
            >
              Our Services
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.97, x: 24 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className="relative mx-auto flex w-full max-w-[740px] items-center justify-center lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:mx-0 lg:w-[54%] lg:max-w-[850px]"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -10, 0], rotate: [0, 5, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[4%] top-[27%] hidden h-20 w-20 items-center justify-center rounded-full border border-[#dd3777]/80 bg-white/30 text-[#dd3777] backdrop-blur-sm lg:flex"
          >
            <Heart size={35} strokeWidth={1.8} />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute right-[3%] top-[12%] hidden -rotate-6 text-center font-serif text-2xl font-semibold italic leading-tight text-[#dd3777] xl:block"
          >
            Small
            <br />
            Steps
            <br />
            Big Dreams
            <Heart size={25} className="ml-auto mt-2 rotate-12" />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: [-2, 2, -2] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[10%] right-[2%] hidden text-[#dd3777] lg:block"
          >
            <Stethoscope size={60} strokeWidth={0.8} />
          </motion.div>

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[27%] top-[18%] hidden text-[#dd3777] lg:block"
          >
            <Sparkles size={25} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
