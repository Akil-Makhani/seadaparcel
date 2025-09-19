import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// Icons: will gracefully fallback if lucide-react isn't installed
let Icons = {};
try { Icons = require('lucide-react'); } catch (e) { Icons = {}; }

const STEPS_DATA = [
  {
    title: "Create or log in",
    desc: "Log in/Sign up to the Send-a-Parcel online cloud-based system.",
    icon: Icons.UserPlus || null,
  },
  {
    title: "Choose addresses",
    desc: "Choose a shipping option and enter the address details for delivery.",
    icon: Icons.MapPin || null,
  },
  {
    title: "Add Packages",
    desc: "Add the weight and packaging dimensions of the item you are sending.",
    icon: Icons.Package || null,
  },
  {
    title: "Print & handover",
    desc: "Print out a label and stick it on the parcel. The courier is already notified.",
    icon: Icons.Printer || null,
  },
];

const ANIMATION_VARIANTS = {
  stepsContainer: {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  },
  stepItem: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

function HeroSection({ heroRef, heroY, heroRotate, heroScale }) {
  return (
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
            <span className='gradient-text-static'>Courier collection</span> from your doorstep
          </h1>
          <p className='text-lg max-w-prose text-slate-700 dark:text-slate-300'>
            New Zealand Wide Delivery. Local delivery
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
            src='/images/hero4.png'
            alt='Courier route'
            className='mx-auto w-full max-w-xl md:max-w-2xl'
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: heroY, scale: heroScale }}
          />
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }) {
  const Icon = step.icon;
  return (
    <motion.li
      variants={ANIMATION_VARIANTS.stepItem}
      className='flex flex-col items-stretch text-center flex-1 min-w-[220px]'
    >
      <div className='card relative rounded-2xl p-6 shadow-soft hover:shadow-glow border border-primary hover:border-primary bg-white dark:border-primary dark:hover:border-primary/80 dark:bg-surfaceElev h-full transition-all duration-200 hover:-translate-y-1'>
        <span className='absolute top-3 left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white font-semibold text-xs shadow-soft'>
          {index + 1}
        </span>
        <div className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-soft mx-auto'>
          {Icon ? <Icon size={22} /> : <span className='font-bold'>{index + 1}</span>}
        </div>
        <h3 className='mt-3 font-semibold'>{step.title}</h3>
        <p className='mt-1 text-sm muted max-w-[28ch] mx-auto'>{step.desc}</p>
      </div>
    </motion.li>
  );
}

function StepsSection() {
  return (
    <section id='how' className='container-section py-16 md:py-0 md:mb-10'>
      <h2 className='text-center font-display text-2xl md:text-3xl font-bold'>
        HOW IT WORKS
      </h2>
      <div className='relative mt-10'>
        <motion.ol
          className='flex flex-wrap md:flex-nowrap items-stretch justify-center gap-6 md:gap-10'
          variants={ANIMATION_VARIANTS.stepsContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          {STEPS_DATA.map((step, index) => (
            <StepItem key={step.title} step={step} index={index} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className='min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200'>
      <HeroSection
        heroRef={heroRef}
        heroY={heroY}
        heroRotate={heroRotate}
        heroScale={heroScale}
      />
      <StepsSection />
    </div>
  );
}
