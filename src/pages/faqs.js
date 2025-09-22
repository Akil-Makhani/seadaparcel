import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const FAQ_ITEMS = [
  {
    q: "Do I need to be at home for the courier to pick up my parcel?",
    a: "You can leave your parcel in a secure, accessible location such as your front door, mailbox, or back porch. Indicate this when booking and the courier will collect even if you are not home.",
  },
  {
    q: "What kind of packaging should I use?",
    a: "Ensure your item is securely packaged to prevent damage. Use sturdy boxes or durable mailers and avoid flimsy supermarket bags or newspaper.",
  },
  {
    q: "Can the courier pick up my parcel from a different address?",
    a: "Yes. Choose a different pickup location at booking time, such as your workplace or a friend’s house, and include any access details.",
  },
  {
    q: "How do I estimate shipping costs before booking?",
    a: "Use our calculator to estimate costs based on package size, weight and destination.",
  },
  {
    q: "What if I need to change or cancel my booking?",
    a: "You can cancel or amend your booking until the first courier scan occurs. After that, please contact support.",
  },
  {
    q: "What should I do if I miss a pickup or need to reschedule?",
    a: "Reach us via chat using your booking reference to arrange the next available pickup window.",
  },
  {
    q: "Does your price include everything?",
    a: "All prices include GST and any regional surcharges. What you see is what you pay.",
  },
  {
    q: "Is my parcel covered by insurance?",
    a: "Most parcels are covered up to $1500 excluding fragile items like glass. Payouts require proof of purchase and are subject to our carriage conditions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.li
      layout
      className="mb-4 break-inside-avoid list-none"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.3 }}
    >
      <div className="group rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-surfaceElev p-5 md:p-6 shadow-soft hover:shadow-glow/20 transition-shadow">
        <button
          type="button"
          onClick={onToggle}
          className="w-full text-left flex items-start gap-4"
          aria-expanded={isOpen}
        >
          <div className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary/15 text-primary font-semibold">
            {index + 1}
          </div>
          <h3 className="font-semibold text-ink dark:text-white pr-8">{item.q}</h3>
          <span className="ml-auto text-muted transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3">
                <p className="text-sm text-muted">{item.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

export default function FAQs() {
  const items = useMemo(() => FAQ_ITEMS, []);
  const [openIndex, setOpenIndex] = useState(-1); // Start with no item open
  const handleToggle = useCallback((idx) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  }, []);

  // Reset state when component mounts to ensure consistent behavior
  useEffect(() => {
    setOpenIndex(-1);
  }, []);

  return (
    <div key="faqs-page" className="min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200">
      <section className="relative overflow-hidden surface">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky to-white dark:from-[#0B1220] dark:to-[#0B1220]" />
        <div className="container-section py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Help Center
            </span>
            <h1 className="headline mt-4 text-3xl md:text-5xl font-extrabold">
              Frequently Asked <span className="gradient-text-static">Questions</span>
            </h1>
            <p className="mt-3 text-muted max-w-2xl mx-auto">
              Answers to common questions about sending, tracking and managing your parcels.
            </p>
          </motion.div>

          <motion.ol
            className="mt-10 md:mt-14 columns-1 md:columns-2 gap-x-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {items.map((item, idx) => (
              <FaqItem
                key={item.q}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </motion.ol>

          <motion.div
            className="mt-12 md:mt-16 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary shine">Still need help? Contact us</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


