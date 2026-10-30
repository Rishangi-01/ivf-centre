
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Story = {
  name: string;
  location: string;
  quote: string;
  coupleImage: string;
  avatar: string;
};

const stories: Story[] = [
  {
    name: "Priya & Rohit",
    location: "Noida, UP",
    quote:
      "Hope IVF gave us the greatest gift of all — our baby. The entire team was supportive and caring throughout the journey.",
    coupleImage: "/images/home/success-story1.png",
    avatar: "/images/home/avatar1.png",
  },
  {
    name: "Neha & Aman",
    location: "Delhi, India",
    quote:
      "Professional, compassionate and highly skilled. We couldn't have asked for a better experience than this.",
    coupleImage: "/images/home/success-story2.png",
    avatar: "/images/home/avatar2.png",
  },
  {
    name: "Simran & Karan",
    location: "Ghaziabad, UP",
    quote:
      "We are forever grateful to Hope IVF for making our dream come true. Their care and guidance gave us new hope.",
    coupleImage: "/images/home/success-story3.png",
    avatar: "/images/home/avatar3.png",
  },
  {
    name: "Ananya & Vikram",
    location: "Gurugram, India",
    quote:
      "The team made us feel heard, supported and cared for at every step. We are thankful for their guidance.",
    coupleImage: "/images/home/success-story2.png",
    avatar: "/images/home/avatar2.png",
  },
  {
    name: "Meera & Arjun",
    location: "Faridabad, India",
    quote:
      "From our first consultation to every follow-up, the team treated us with kindness and genuine care.",
    coupleImage: "/images/home/success-story1.png",
    avatar: "/images/home/avatar1.png",
  },
];

// Three extra cards ensure the slider can reset seamlessly.
const loopStories = [...stories, ...stories.slice(0, 3)];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const viewportRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Responsive number of visible cards and actual card width.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const width = viewport.clientWidth;
      const count = width < 640 ? 1 : width < 1024 ? 2 : 3;

      setVisibleCount(count);
      setCardWidth(width / count);
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setIndex((current) => current + 1);
  }, []);

  const previous = useCallback(() => {
    // Keep the previous button working without going into negative positions.
    setIndex((current) => Math.max(0, current - 1));
  }, []);

  // Continuous forward autoplay.
  useEffect(() => {
    if (paused || reduceMotion || !cardWidth) return;

    const timer = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, cardWidth]);

  // After reaching the duplicate cards, reset without animating backwards.
  useEffect(() => {
    if (index < stories.length) return;

    const reset = window.setTimeout(() => {
      setTransitionEnabled(false);
      setIndex((current) => current - stories.length);
    }, 700);

    return () => window.clearTimeout(reset);
  }, [index]);

  // Re-enable the transition after the invisible position reset.
  useEffect(() => {
    if (transitionEnabled) return;

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [transitionEnabled]);

  const goTo = (position: number) => {
    setTransitionEnabled(true);
    setIndex(position);
  };

  return (
    <section
      id="success-stories"
      className="w-full overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-12 lg:px-12"
    >
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-9 text-center sm:mb-12"
        >
          <span className="inline-flex rounded-full border border-[#d8eee8] bg-[#e2f5ef] px-3.5 py-1 text-[11px] font-bold text-[#176b68] sm:text-xs">
            Success Stories
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#102e4b] sm:text-4xl">
            Real People. Real Happiness.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#718399] sm:text-base">
            Read inspiring stories from couples who found hope and became
            parents with our help.
          </p>
        </motion.div>

        <div
          className="relative px-0 md:px-7"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget as Node | null
              )
            ) {
              setPaused(false);
            }
          }}
        >
          {/* Always-visible desktop navigation */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous success stories"
            className="absolute left-0 top-1/2 z-30 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#dcefeb] bg-white text-[#176b68] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#e8f7f2] md:flex"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next success stories"
            className="absolute right-0 top-1/2 z-30 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#dcefeb] bg-white text-[#176b68] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#e8f7f2] md:flex"
          >
            <ArrowRight size={20} />
          </button>

          <div
            ref={viewportRef}
            className="overflow-hidden rounded-2xl"
          >
            <motion.div
              className="flex items-stretch"
              style={{ width: cardWidth ? cardWidth * loopStories.length : "100%" }}
              animate={{
                x: -(index * cardWidth),
              }}
              transition={
                !transitionEnabled || reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.65, ease: "easeInOut" }
              }
            >
              {loopStories.map((story, cardIndex) => (
                <div
                  key={`${story.name}-${cardIndex}`}
                  style={{ width: cardWidth || `${100 / visibleCount}%` }}
                  className="shrink-0 px-1.5 pb-2"
                >
                  <motion.article
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className="group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-[15px] border border-[#e1efec] bg-white shadow-[0_4px_18px_rgba(19,87,78,0.045)] transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(19,87,78,0.11)]"
                  >
                    <div className="relative h-[88px] shrink-0 overflow-hidden sm:h-[95px]">
                      <Image
                        src={story.coupleImage}
                        alt={`Family success story shared by ${story.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#123d42]/15 to-transparent" />
                    </div>

                    <div className="absolute left-5 top-[66px] z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#e3f2ee] bg-white text-[#126c68] shadow-sm">
                      <Quote size={19} fill="currentColor" />
                    </div>

                    <div className="flex flex-1 flex-col px-5 pb-4 pt-7 sm:px-6">
                      <p className="text-[13px] leading-[1.65] text-[#63768b] sm:text-sm">
                        &ldquo;{story.quote}&rdquo;
                      </p>

                      <div className="mt-auto flex items-center gap-2.5 pt-4">
                        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#dceee9] bg-[#e8f6f1]">
                          <Image
                            src={story.avatar}
                            alt=""
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-[#203d53]">
                            {story.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[#8492a2]">
                            {story.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile navigation */}
          <div className="mt-5 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous success stories"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dcefeb] bg-white text-[#176b68] shadow-sm transition-colors hover:bg-[#e7f6f1]"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next success stories"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dcefeb] bg-white text-[#176b68] shadow-sm transition-colors hover:bg-[#e7f6f1]"
            >
              <ArrowRight size={19} />
            </button>
          </div>

          {/* Pagination */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({
              length: stories.length - visibleCount + 1,
            }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to story position ${dotIndex + 1}`}
                aria-current={index % stories.length === dotIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index % stories.length === dotIndex
                    ? "w-5 bg-[#176f6b]"
                    : "w-2 bg-[#c9e7df] hover:bg-[#79bdb0]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
