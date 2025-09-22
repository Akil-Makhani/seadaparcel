import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin, Send, Building2 } from "lucide-react";

const ANIMATION = {
  fadeUp: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  stagger: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
};

export default function Contact() {
  const INPUT =
    "w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
  return (
    <div key="contact-page" className='min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200'>
      {/* Hero */}
      <section className='relative overflow-hidden surface'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-sky to-white dark:from-[#0B1220] dark:to-[#0B1220]' />
        <div className='container-section py-14 md:py-20'>
          <motion.div
            variants={ANIMATION.fadeUp}
            initial='hidden'
            animate='show'
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center'
          >
            <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary'>
              Get in touch
            </span>
            <h1 className='headline mt-4 text-3xl md:text-5xl font-extrabold'>
              Contact <span className='gradient-text-static'>Us</span>
            </h1>
            <p className='mt-3 text-muted max-w-3xl mx-auto'>
              We’d love to hear from you. Whether you have a question about features, pricing, or anything else—our team is ready to answer all your questions.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={ANIMATION.stagger}
            initial='hidden'
            animate='show'
            transition={{ duration: 0.5, staggerChildren: 0.12, delay: 0.2 }}
            className='mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'
          >
            {/* Left: Info Cards */}
            <motion.div
              variants={ANIMATION.fadeUp}
              className='space-y-6'
            >
              <div className='card rounded-2xl p-6 shadow-soft border border-primary dark:border-primary'>
                <div className='flex items-start gap-4'>
                  <div className='h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center'>
                    <Phone className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg'>Phone</h3>
                    <p className='mt-1 text-muted'>0800 476 789</p>
                  </div>
                </div>
              </div>

              <div className='card rounded-2xl p-6 shadow-soft border border-primary dark:border-primary'>
                <div className='flex items-start gap-4'>
                  <div className='h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center'>
                    <Mail className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg'>Email</h3>
                    <a href='mailto:support@sendaparcel.co.nz' className='mt-1 inline-block text-ink dark:text-white underline hover:text-primary'>
                      support@sendaparcel.co.nz
                    </a>
                  </div>
                </div>
              </div>

              <div className='card rounded-2xl p-6 shadow-soft border border-primary dark:border-primary'>
                <div className='flex items-start gap-4'>
                  <div className='h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center'>
                    <Clock className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg'>Business Hours</h3>
                    <p className='mt-1 text-muted'>Monday – Friday: 8:30 AM – 8 PM</p>
                    <p className='text-muted'>Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <motion.div
                variants={ANIMATION.fadeUp}
                className='relative rounded-2xl p-[1px] bg-gradient-to-br from-primary via-pink-500 to-blue-600'
              >
                <div className='rounded-2xl p-6 bg-white dark:bg-slate-900/60'>
                  <div className='flex items-start gap-4'>
                    <div className='h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center'>
                      <Building2 className='w-6 h-6' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg'>Head Office</h3>
                      <p className='mt-1 text-muted'>New Zealand</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.form
              variants={ANIMATION.fadeUp}
              className='card rounded-2xl p-6 md:p-8 shadow-soft border border-primary dark:border-primary bg-white/80 dark:bg-slate-900/60 backdrop-blur'
              onSubmit={(e) => { e.preventDefault(); }}
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>Company Trading Name</label>
                  <input className={INPUT} placeholder='Company name' />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>Full Name</label>
                  <input className={INPUT} placeholder='Your full name' />
                </div>
              </div>

              <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>Email</label>
                  <input type='email' className={INPUT} placeholder='you@example.com' />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>Phone</label>
                  <input className={INPUT} placeholder='0800 123 456' />
                </div>
              </div>

              <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>Website address</label>
                  <input className={INPUT} placeholder='https://example.com' />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>How many parcels weekly?</label>
                  <select className={INPUT}>
                    <option>0 - 10</option>
                    <option>10 - 50</option>
                    <option>50 - 250</option>
                    <option>250+</option>
                  </select>
                </div>
              </div>

              <div className='mt-4'>
                <label className='text-sm font-medium text-slate-700 dark:text-slate-300'>Who do you currently use?</label>
                <select className={INPUT} defaultValue="">
                  <option value="" disabled>Who do you currently use?</option>
                  <option>New Zealand Couriers</option>
                  <option>Aramex / Fastway</option>
                  <option>Courier Post</option>
                  <option>Post Haste</option>
                  <option>PBT</option>
                  <option>Castle Parcels</option>
                  <option>NZ Post</option>
                  <option>Other</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='mt-6 btn btn-primary inline-flex items-center gap-2'
              >
                <Send className='w-5 h-5' />
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Tailwind aliases used: .card and .input exist in project styles
