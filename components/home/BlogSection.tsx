
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    date: "03 Oct 2025",
    title: "IVF vs IUI – Which One Is Right for You?",
    image: "/images/home/health1.png",
    href: "/blog/ivf-vs-iui",
    category: "Fertility Treatment",
  },
  {
    date: "05 Oct 2025",
    title: "Nutrition Tips for a Healthy Pregnancy",
    image: "/images/home/health2.png",
    href: "/blog/nutrition-healthy-pregnancy",
    category: "Pregnancy & Nutrition",
  },
  {
    date: "28 Sep 2025",
    title: "Preparing for a Fertility Consultation",
    image: "/images/home/health3.png",
    href: "/blog/fertility-consultation",
    category: "Fertility Guide",
  },
  {
    date: "10 Oct 2025",
    title: "Understanding Your Fertility Journey",
    image: "/images/home/health2.png",
    href: "/blog/understanding-fertility",
    category: "Fertility Guide",
  },
  {
    date: "14 Oct 2025",
    title: "Everyday Habits for Reproductive Wellness",
    image: "/images/home/health1.png",
    href: "/blog/reproductive-wellness",
    category: "Wellness",
  },
  {
    date: "18 Oct 2025",
    title: "What to Expect During an Ultrasound",
    image: "/images/home/health3.png",
    href: "/blog/ultrasound-guide",
    category: "Patient Guide",
  },
];

export default function BlogSection() {
  const reduceMotion = useReducedMotion();

  const loopArticles = [...articles, ...articles];

  return (
    <section
      id="latest-articles"
      className="relative overflow-hidden bg-[#f5fbf9] py-12 sm:py-12 lg:py-12 w-[100%]"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/90 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e2f4ee]/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10 xl:px-14">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-9 text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7eee7] bg-[#e0f5ef] px-4 py-1.5 text-xs font-bold tracking-wide text-[#176b68]">
            Latest Articles
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-[#102e4b] sm:text-4xl lg:text-[42px]">
            Health Insights &amp; Fertility Tips
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#74869a] sm:text-base">
            Read our latest blogs to stay informed about fertility,
            pregnancy and women&apos;s health.
          </p>
        </motion.div>

        {/* Infinite continuous carousel */}
        <div
          className="group/slider relative"
          aria-label="Latest health articles"
          aria-roledescription="carousel"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-3 bg-gradient-to-r from-[#f5fbf9] to-transparent sm:w-6" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-3 bg-gradient-to-l from-[#f5fbf9] to-transparent sm:w-6" />

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max items-stretch gap-5 py-2 sm:gap-6"
              animate={
                reduceMotion
                  ? { x: 0 }
                  : { x: ["0%", "-50%"] }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      x: {
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }
              }
              style={{ willChange: "transform" }}
            >
              {loopArticles.map((article, index) => (
                <article
                  key={`${article.title}-${index}`}
                  aria-hidden={index >= articles.length}
                  className="group/card relative flex w-[290px] shrink-0 flex-col overflow-hidden rounded-[16px] border border-[#e1efeb] bg-white shadow-[0_5px_22px_rgba(24,87,78,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c4e4db] hover:shadow-[0_16px_35px_rgba(24,87,78,0.12)] sm:w-[340px] lg:w-[calc((100vw-160px)/3)] lg:max-w-[430px] xl:w-[calc((1280px-48px)/3)]"
                >
                  {/* Article image */}
                  <Link
                    href={article.href}
                    tabIndex={index >= articles.length ? -1 : undefined}
                    aria-label={`Read ${article.title}`}
                    className="relative block h-[112px] shrink-0 overflow-hidden sm:h-[125px]"
                  >
                    <Image
                      src={article.image}
                      alt={article.category}
                      fill
                      sizes="(max-width: 640px) 290px, (max-width: 1024px) 340px, 400px"
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123d42]/20 via-transparent to-transparent" />
                  </Link>

                  {/* Floating book icon */}
                  <div className="absolute left-5 top-[91px] z-[1] flex h-9 w-9 items-center justify-center rounded-full border border-[#e1f0eb] bg-white text-[#126c68] shadow-sm transition-all duration-300 group-hover/card:bg-[#e1f5ef] sm:top-[104px]">
                    <BookOpen size={17} strokeWidth={2} />
                  </div>

                  {/* Article content */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-7 sm:px-6 sm:pt-8">
                    <time className="text-xs font-medium text-[#8291a2]">
                      {article.date}
                    </time>

                    <h3 className="mt-2 min-h-[52px] font-sans text-[17px] font-bold leading-[1.4] text-[#183650] transition-colors duration-300 group-hover/card:text-[#126c68] sm:text-[18px]">
                      {article.title}
                    </h3>

                    <Link
                      href={article.href}
                      tabIndex={index >= articles.length ? -1 : undefined}
                      className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#176c68] transition-colors duration-300 hover:text-[#084d4b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176c68] focus-visible:ring-offset-4"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/card:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative progress indicators */}
        <div
          className="mt-6 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-2 w-2 rounded-full bg-[#b8ded4]" />
          <span className="h-2 w-2 rounded-full bg-[#8cc9bc]" />
          <span className="h-2 w-2 rounded-full bg-[#176c68]" />
        </div>
      </div>
    </section>
  );
}
