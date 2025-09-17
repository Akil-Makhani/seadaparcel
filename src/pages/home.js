import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const stepsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const stepItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div className='min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200'>
      {/* Hero */}
      <section ref={heroRef} className='relative overflow-hidden surface'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-sky to-white dark:from-[#0B1220] dark:to-[#0B1220]' />
        <div className='container-section pt-8 md:pt-4 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className='headline text-4xl md:text-6xl font-extrabold leading-tight'>
              <span className='gradient-text'>Courier collection</span> from
              your doorstep
            </h1>
            <p className='text-lg max-w-prose text-slate-700 dark:text-slate-300'>
              Nationwide delivery with transparent pricing. Local delivery
              <span className='ml-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary dark:border-primary/30 dark:bg-primary/20'>
                from only $3*
              </span>
              .
            </p>
            <div className='flex flex-wrap gap-3'>
              <motion.button
                transition={{ duration: 0.12 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='btn btn-primary relative overflow-hidden shine'
              >
                Send a parcel
              </motion.button>
              <motion.button
                transition={{ duration: 0.12 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='btn btn-outline'
              >
                Track & Trace
              </motion.button>
            </div>
            <p className='text-xs text-muted dark:text-slate-400'>
              *excludes bank cost
            </p>
          </motion.div>
          <div className='relative'>
            <div className='absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl' />
            <motion.img
              src='/images/hero3.png'
              alt='Courier route'
              className='mx-auto w-full max-w-xl md:max-w-2xl'
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ y: heroY, rotate: heroRotate, scale: heroScale }}
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id='how' className='container-section py-16 md:py-24'>
        <h2 className='text-center font-display text-2xl md:text-3xl font-bold'>
          HOW IT WORKS
        </h2>
        <div className='relative mt-14'>
          <div className='absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent md:block' />
          <motion.ol
            className='space-y-10'
            variants={stepsContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: "Create or log in",
                desc: "Access your dashboard in seconds.",
              },
              {
                title: "Enter addresses",
                desc: "Pickup and destination with smart suggestions.",
              },
              {
                title: "Choose service",
                desc: "Select speed, insurance, and options.",
              },
              {
                title: "Print & handover",
                desc: "Label generated; courier gets notified.",
              },
            ].map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={s.title}
                  variants={stepItem}
                  className={`md:grid md:grid-cols-2 md:items-center md:gap-10`}
                >
                  <div className={`${isLeft ? "" : "md:order-2"}`}>
                    <div className='relative rounded-2xl p-[1px] bg-gradient-to-br from-primary via-pink-500 to-blue-600'>
                      <div className='card rounded-2xl p-6 shadow-soft'>
                        <div className='flex items-center gap-3'>
                          <div className='inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/15 text-primary font-bold'>
                            {i + 1}
                          </div>
                          <h3 className='font-semibold'>{s.title}</h3>
                        </div>
                        <p className='mt-2 text-sm muted'>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isLeft ? "md:block" : "md:order-1 md:block"
                    } hidden md:justify-center md:items-center`}
                  >
                    <div className='relative mx-auto h-0 w-0'>
                      <div className='absolute -left-[2px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-primary md:block' />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </section>
    </div>
  );
}
