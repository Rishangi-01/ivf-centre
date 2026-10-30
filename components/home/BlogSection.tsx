
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    day: "18",
    month: "OCT",
    year: "2026",
    category: "FERTILITY TREATMENT",
    title: "IVF Treatment: Your Journey to Parenthood",
    description:
      "Discover how modern IVF treatment, can help you take the next step toward building your family.",
    image: "/images/home/health1.png",
    href: "/blog/ivf-treatment-journey",
    imageAlt: "Couple preparing for their journey to parenthood",
  },
  {
    day: "12",
    month: "OCT",
    year: "2026",
    category: "PREGNANCY & WELLNESS",
    title: "Nutrition Tips for a Healthy Pregnancy",
    description:
      "Explore balanced nutrition, essential nutrients and everyday habits that support a healthy pregnancy and overall maternal well-being.",
    image: "/images/home/health2.png",
    href: "/blog/pregnancy-nutrition",
    imageAlt: "Nutritious fresh foods for a healthy pregnancy",
  },
  {
    day: "05",
    month: "OCT",
    year: "2026",
    category: "FERTILITY GUIDANCE",
    title: "Preparing for Your First Fertility Consultation",
    description:
      "Learn what to expect at your first appointment, which questions to ask specialist can guide your treatment options.",
    image: "/images/home/health3.png",
    href: "/blog/first-fertility-consultation",
    imageAlt: "Fertility specialist discussing care with a patient",
  },
];

export default function BlogSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#faf9f6] py-8 sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 xl:px-14">
        
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-center lg:mb-8"
        >

          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-[#152b3d] sm:text-4xl lg:text-5xl">
            Our Blog & Resources
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#697787] sm:text-base">
            Explore expert guidance on fertility treatments, pregnancy
            wellness and the latest advances in reproductive care.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-9">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : index * 0.13,
                ease: "easeOut",
              }}
              className="group relative flex min-w-0 flex-col border-b border-l border-r border-[#e6e1db] bg-transparent transition-colors duration-300 hover:border-[#d9c5c7]"
            >
              {/* Image and date badge */}
              <Link
                href={post.href}
                aria-label={`Read ${post.title}`}
                className="relative block aspect-[1.1/1] overflow-hidden lg:aspect-[1.5/1]"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                {/* Date badge */}
                <div className="absolute bottom-0 left-6 flex h-[100px] w-[100px] flex-col items-center justify-center bg-[#c2185b] text-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 sm:left-7">
                  <span className="font-serif text-[36px] leading-none">
                    {post.day}
                  </span>
                  <span className="mt-2 text-[12px] font-semibold uppercase tracking-wide">
                    {post.month} {post.year}
                  </span>
                </div>
              </Link>

              {/* Blog content */}
              <div className="flex flex-1 flex-col px-6 pb-7 pt-7 sm:px-7 sm:pb-8">
                <div className="mb-3 flex items-center gap-5">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#c2185b]">
                    {post.category}
                  </span>
                  <span className="h-px w-12 shrink-0 bg-[#b96a7d]" />
                </div>

                <h3 className="font-serif text-[25px] font-medium leading-[1.3] tracking-tight text-[#182b3d] transition-colors duration-300 group-hover:text-[#c2185b] sm:text-[27px]">
                  <Link href={post.href}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-8 text-[#697787]">
                  {post.description}
                </p>

                <Link
                  href={post.href}
                  className="mt-4 inline-flex w-fit items-center gap-7 border-b border-[#c2185b] pb-2 text-[16px] font-semibold text-[#c2185b] transition-colors duration-300 hover:text-[#531020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2185b] focus-visible:ring-offset-4"
                >
                  Read More
                  <ArrowRight
                    size={23}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all articles */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center lg:mt-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 rounded-full border border-[#c2185b] px-7 py-3.5 text-sm font-semibold text-[#c2185b] transition-all duration-300 hover:bg-[#c2185b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2185b] focus-visible:ring-offset-4"
          >
            Explore All Articles
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
