
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";

export default function AppointmentCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fdf2f7] py-8 sm:py-10 w-[100%]">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative isolate overflow-hidden rounded-[22px] border border-[#d43a79]/50 bg-gradient-to-r from-[#68193a] via-[#a91e53] to-[#104f53] px-5 py-7 shadow-[0_10px_30px_rgba(100,20,49,0.12)] sm:px-8 sm:py-8 lg:px-12 lg:py-6"
        >
          {/* Subtle gradient decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_25%_50%,rgba(221,55,119,0.16),transparent_55%)]" />

          {/* Decorative glow */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { x: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-10 -top-20 -z-10 h-56 w-56 rounded-full bg-[#ed78a5]/20 blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-6 sm:text-left lg:gap-10">
            {/* Circular heart icon */}
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -5 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[inset_0_0_16px_rgba(255,255,255,0.08)] sm:h-[74px] sm:w-[74px]"
            >
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 sm:h-[54px] sm:w-[54px]">
                <HeartHandshake
                  size={31}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="relative z-10 min-w-0 flex-1">
              <h2 className="font-serif text-[24px] font-bold leading-tight text-white sm:text-[27px] lg:text-[30px]">
                Ready to Start Your Family?
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/75 sm:text-[14px]">
                Book a free consultation with our fertility experts today.
              </p>
            </div>

            {/* Appointment button */}
            <div className="relative z-20 shrink-0">
              <Link
                href="/contact-us"
                className="group/button inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-[#fce7f3] bg-white px-6 py-3 text-sm font-bold text-[#a91e53] shadow-[0_5px_16px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fce7f3] hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#a91e53]"
              >
                Book Appointment
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Existing decorative leaf image */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -4, 0], rotate: [0, 2, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",    
            }}
            className="pointer-events-none absolute -bottom-2 right-3 z-0 hidden w-[90px] opacity-70 sm:block lg:right-5 lg:w-[112px]"
          >
            <Image
              src="/images/home/leaves.png"
              alt=""
              width={140}
              height={160}
              className="h-auto w-full object-contain brightness-0 invert"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
