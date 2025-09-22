import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, FileText, Mail, Phone } from "lucide-react";

const ANIMATION = {
  fadeUp: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  stagger: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
};

// const PRIVACY_SECTIONS = [
//   {
//     icon: Shield,
//     title: "Data Protection",
//     content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
//   },
//   {
//     icon: Lock,
//     title: "Secure Transmission",
//     content: "All data transmitted between your device and our servers is encrypted using SSL/TLS protocols to ensure maximum security."
//   },
//   {
//     icon: Eye,
//     title: "Privacy Controls",
//     content: "You have full control over your personal data. You can view, update, or delete your information at any time through your account settings."
//   },
//   {
//     icon: Database,
//     title: "Data Storage",
//     content: "Your data is stored securely on encrypted servers with regular backups and monitoring to ensure data integrity and availability."
//   },
//   {
//     icon: UserCheck,
//     title: "Access Rights",
//     content: "You have the right to access, correct, or delete your personal information. Contact us to exercise these rights at any time."
//   },
//   {
//     icon: FileText,
//     title: "Transparency",
//     content: "We are committed to transparency about how we collect, use, and share your information. This policy is regularly updated and clearly communicated."
//   }
// ];

export default function Privacy() {
  return (
    <div key="privacy-page" className='min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200'>
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
              Privacy & Security
            </span>
            <h1 className='headline mt-4 text-3xl md:text-5xl font-extrabold'>
              Privacy <span className='gradient-text-static'>Policy</span>
            </h1>
            <p className='mt-3 text-muted max-w-3xl mx-auto'>
              This contract governs the supply of services undertaken by Fastway Couriers (NZ) Ltd t/as Aramex (New Zealand), its related entities, franchisees, sub-contractors, and all other nominees in relation to the carriage, storage, loading, unloading, packing, unpacking, freight forwarding, and all other services relating to the transport of goods (“Conditions”).
            </p>
          </motion.div>

          <motion.div
            variants={ANIMATION.fadeUp}
            initial='hidden'
            animate='show'
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className='mt-12 md:mt-16 flex justify-center'
          >
            <div className='relative rounded-2xl p-[1px] bg-gradient-to-br from-primary via-pink-500 to-blue-600 max-w-md w-full'>
              <div className='rounded-2xl p-6 bg-white dark:bg-slate-900/60'>
                <div className='text-center mb-6'>
                  <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-2'>
                    Questions About Privacy?
                  </h2>
                  <p className='text-slate-600 dark:text-slate-300'>
                    Our privacy team is here to help with any questions or concerns you may have.
                  </p>
                </div>
                
                <div className='space-y-4'>
                  <div className='flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
                    <div className='h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center'>
                      <Mail className='w-6 h-6' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-slate-800 dark:text-white'>Email Support</h3>
                      <a 
                        href='mailto:support@sendaparcel.co.nz' 
                        className='text-primary hover:text-primary-dark transition-colors font-medium'
                      >
                        support@sendaparcel.co.nz
                      </a>
                    </div>
                  </div>
                  
                  <div className='flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
                    <div className='h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center'>
                      <Phone className='w-6 h-6' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-slate-800 dark:text-white'>Phone Support</h3>
                      <a 
                        href='tel:0800476789' 
                        className='text-primary hover:text-primary-dark transition-colors font-medium'
                      >
                        0800 476 789
                      </a>
                      <p className='text-xs text-slate-500 dark:text-slate-400 mt-1'>
                        8:30am - 8:00pm on working days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}