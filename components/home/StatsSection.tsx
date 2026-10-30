
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  UsersRound,
  Star,
  Sparkles,
  Building2,
} from "lucide-react";

const stats = [
  {
    value: 15000,
    suffix: "+",
    label: "Happy Families",
    icon: UsersRound,
  },
  {
    value: 25,
    suffix: "+",
    label: "Years of Experience",
    icon: Star,
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
    icon: Sparkles,
  },
  {
    value: 5,
    suffix: "",
    label: "Modern IVF Centres",
    icon: Building2,
  },
];

function AnimatedCounter({
  value,
  suffix,
  active,
  reduceMotion,
}: {
  value: number;
  suffix: string;
  active: boolean;
  reduceMotion: boolean;
}) {
  const [count, setCount] = useState(
    reduceMotion ? value : 0
  );

  useEffect(() => {
    if (!active) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const totalFrames = 70;

    const timer = setInterval(() => {
      frame += 1;

      // Ease-out animation
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.min(value, Math.round(value * eased)));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(value);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [active, value, reduceMotion]);

  return (
    <span>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stats-heading"
      className="relative isolate overflow-hidden bg-[#f4fbf9] max-w-[1500px] px-5 lg:px-10 xl:px-14 py-10 sm:py-12 w-[100%]"
    >
      
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-52 w-52 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-52 w-52 rounded-full bg-[#e2f4ee]/80 blur-3xl" />
      </div>

      
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -5, 0] }
        }
        transition={{
          duration: 4.5,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-4 -left-2 w-[90px] sm:w-[120px] lg:w-[145px]"
      >
        <Image
          src="/images/home/sats-left-leaves.png"
          alt=""
          width={180}
          height={220}
          className="h-auto w-full -scale-x-100 object-contain"
        />
      </motion.div>

      
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.85, x: 0 }}
        viewport={{ once: true }}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -6, 0] }
        }
        transition={{
          duration: 5,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="pointer-events-none absolute -bottom-3 -right-2 w-[90px] sm:w-[120px] lg:w-[145px]"
      >
        <Image
          src="/images/home/sats-right-leaves.png"
          alt=""
          width={180}
          height={220}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="relative mx-auto">
        
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center sm:mb-8"
        >
          <span className="inline-flex rounded-full border border-[#d8eee8] bg-[#e0f5ef] px-3.5 py-1 text-[11px] font-bold tracking-wide text-[#176c68] sm:text-xs">
            Our Numbers
          </span>

          <h2
            id="stats-heading"
            className="mt-2 font-serif text-[24px] font-bold leading-tight text-[#164653] sm:text-[29px] lg:text-[32px]"
          >
            Years of Trust, Countless Happy Families
          </h2>
        </motion.div>

        
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5, scale: 1.025 }
                }
                className={`group relative flex cursor-default flex-col items-center rounded-2xl px-3 py-2 text-center transition-colors duration-300 hover:bg-white/75 hover:shadow-[0_8px_24px_rgba(8,101,104,0.07)] ${
                  index % 2 === 0 ? "border-r border-[#deeeea] md:border-r-0" : ""
                } ${
                  index < 3
                    ? "md:border-r md:border-[#deeeea]"
                    : ""
                }`}
              >
                
                <div className="mb-2 flex h-10 w-10 items-center justify-center text-[#116c68] transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                  <Icon
                    size={31}
                    strokeWidth={2}
                    className="transition-colors duration-300 group-hover:text-[#15958c]"
                  />
                </div>

                
                <p className="font-serif text-[25px] font-bold leading-tight text-[#12625f] lg:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    active={isInView}
                    reduceMotion={reduceMotion}
                  />
                </p>

                
                <p className="mt-1.5 text-xs font-medium leading-5 text-[#718398] transition-colors duration-300 group-hover:text-[#286b68] lg:text-lg">
                  {stat.label}
                </p>

                
                <motion.span
                  className="absolute bottom-0 h-[2px] rounded-full bg-[#12827c]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "45%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
