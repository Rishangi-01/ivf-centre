
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const fadeLeft = {
    hidden: { opacity: 0, x: -35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.15,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-16 lg:py-12 w-[100%]"
    >
      
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-64 w-64 rounded-full bg-[#fdf2f7]/60 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-[#fdf2f7]/70 blur-3xl" />
      </div>

      <div className="mx-auto grid grid-cols-1 items-center gap-12 max-w-[1500px] px-5 lg:px-10 xl:px-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeLeft}
          className="relative mx-auto w-full max-w-[600px] lg:mx-0"
        >
          
          <motion.div
            initial={false}
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -5, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[10%] top-[1%] h-[83%] w-[63%] rounded-[44px] bg-[#fdf2f7] sm:rounded-[55px]"
          />

          
          <div className="relative z-10 ml-[8%] w-[66%] overflow-hidden rounded-[34px] sm:rounded-[42px]">
            <div className="relative aspect-[0.98/1] w-full">
              <Image
                src="/images/home/about-baby-hands.png"
                alt="A loving adult gently holding a newborn baby's hand"
                fill
                priority={false}
                sizes="(max-width: 768px) 66vw, 350px"
                className="object-cover object-center"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/30" />
          </div>

          
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.35,
              type: "spring",
              stiffness: 130,
            }}
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            className="absolute left-[54%] top-[60%] z-20 flex aspect-square w-[32%] max-w-[205px] -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#fce7f3] bg-[#fdf2f7] text-center shadow-[0_12px_40px_rgba(194,24,91,0.07)] sm:w-[34%]"
          >
            <span className="font-serif text-4xl font-bold leading-none text-[#dd3777] sm:text-5xl lg:text-[48px]">
              25+
            </span>

            <span className="mt-3 text-sm font-medium leading-6 text-[#a84c70] sm:text-base">
              Years of
            </span>

            <span className="text-sm font-bold leading-6 text-[#dd3777] sm:text-base">
              Experience
            </span>
          </motion.div>

          
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -5, 0], rotate: [0, 2, 0] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[14%] top-[9.5%] z-20 w-[18%] max-w-[95px]"
          >
            <Image
              src="/images/home/left-bottom-leaves.png"
              alt=""
              width={100}
              height={130}
              className="h-auto w-full object-contain"
            />
          </motion.div>

          
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, 6, 0], rotate: [0, -3, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute -left-[5%] bottom-[3%] z-20 w-[17%] max-w-[105px]"
          >
            <Image
              src="/images/home/left-right-leaves.png"
              alt=""
              width={110}
              height={140}
              className="h-auto w-full -rotate-12 object-contain"
            />
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeRight}
          className="relative z-10 max-w-[600px] lg:ml-0"
        >
          
          <motion.div
            variants={fadeRight}
            className="mb-4 inline-flex items-center rounded-full border border-[#f9dce9] bg-[#fce7f3] px-4 py-2 text-xs font-bold tracking-wide text-[#dd3777] sm:text-sm"
          >
            About Hope IVF
          </motion.div>

          
          <motion.h2
            variants={fadeRight}
            className="font-serif text-[36px] font-bold leading-[1.12] tracking-[-0.8px] text-[#102f4b] sm:text-[42px] md:text-[46px] lg:text-[42px] xl:text-[48px]"
          >
            Compassionate Care,
            <br className="hidden sm:block" /> Expert Guidance
          </motion.h2>

          
          <motion.p
            variants={fadeRight}
            className="mt-5 max-w-[570px] text-[15px] font-medium leading-[1.85] text-[#718398] sm:text-base sm:leading-[1.85]"
          >
            Hope IVF is a leading fertility centre, dedicated to
            helping couples overcome infertility challenges.
            With advanced technology, a team of experienced
            specialists, and a patient-first approach, we are
            committed to turning your dreams of parenthood
            into reality.
          </motion.p>

          
          <motion.div variants={fadeRight} className="mt-6">
            <Link
              href="/about-us"
              className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full bg-[#dd3777] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(194,24,91,0.13)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dd3777] hover:shadow-[0_12px_26px_rgba(194,24,91,0.22)]"
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
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -5, 0] }
          }
          className="pointer-events-none absolute bottom-0 right-[2%] hidden w-[180px] opacity-80 md:block lg:right-[4%] lg:w-[205px] xl:right-[5%] xl:w-[230px]"
        >
          <Image
            src="/images/home/leaves.png"
            alt=""
            width={260}
            height={300}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
