import { motion } from "framer-motion";

export default function UserDashboard() {
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center'
      >
        <h1 className='text-3xl font-bold text-slate-800 dark:text-white mb-2'>
          User Dashboard
        </h1>
        <p className='text-slate-600 dark:text-slate-300'>Welcome to your dashboard.</p>
      </motion.div>
    </div>
  );
}


