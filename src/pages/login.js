import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  UserPlus,
  MapPin,
  Package,
  Printer,
} from "lucide-react";
import toast from "react-hot-toast";

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
  slideIn: {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  },
};

const STEPS_DATA = [
  {
    title: "Create or log in",
    desc: "Log in/Sign up to the Send-a-Parcel online cloud-based system.",
    icon: UserPlus,
  },
  {
    title: "Choose addresses",
    desc: "Choose a shipping option and enter the address details for delivery.",
    icon: MapPin,
  },
  {
    title: "Add Packages",
    desc: "Add the weight and packaging dimensions of the item you are sending.",
    icon: Package,
  },
  {
    title: "Print & handover",
    desc: "Print out a label and stick it on the parcel. The courier is already notified.",
    icon: Printer,
  },
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formData.email) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.password) {
      nextErrors.password = "Password is required.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    toast.success("Login successful! Welcome back 🚚");
  };

  return (
    <div className='min-h-screen flex bg-gradient-to-br from-sky via-white to-blue-50 dark:from-[#0B1220] dark:via-[#0B1220] dark:to-[#1a1a2e]'>
      {/* Left Side - Process Illustration */}
      <motion.div
        className='hidden lg:flex lg:w-1/2 relative overflow-hidden'
        initial='hidden'
        animate='show'
        variants={ANIMATION_VARIANTS.container}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10' />

        {/* Process Steps */}
        <div className='relative z-10 flex flex-col justify-center items-center w-full px-12'>
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
              How It Works
            </h2>
            <p className='text-slate-600 dark:text-slate-300'>
              Simple steps to send your parcel
            </p>
          </motion.div>

          <div className='space-y-8 w-full max-w-sm'>
            {STEPS_DATA.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={ANIMATION_VARIANTS.slideIn}
                  className='flex items-start gap-4 group'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors'>
                      <Icon className='w-6 h-6 text-primary' />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-slate-800 dark:text-white mb-1'>
                      {step.title}
                    </h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300'>
                      {step.desc}
                    </p>
                    <div className='w-full h-0.5 bg-gradient-to-r from-primary to-transparent mt-2' />
                  </div>
                  {index < STEPS_DATA.length - 1 && (
                    <div className='absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent' />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/5 animate-pulse' />
        <div className='absolute bottom-32 left-16 w-24 h-24 rounded-full bg-blue-500/5 animate-pulse delay-1000' />
      </motion.div>

      {/* Right Side - Login Form */}
      <div className='flex-1 flex items-center justify-center'>
        <motion.div
          className='w-full max-w-md'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
            <div className='text-center mb-4'>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='inline-flex items-center gap-3 '
              >
                <img
                  src='/images/logo_2.png'
                  alt='SendAParcel'
                  className='h-28 w-auto md:h-28'
                />
              </motion.div>

              <h1 className='text-3xl font-bold text-slate-800 dark:text-white mb-2'>
                Welcome Back
              </h1>
            <p className='text-slate-600 dark:text-slate-300'>
              Sign in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <motion.form
            onSubmit={handleSubmit}
            className='space-y-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Email Field */}
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                Email Address *
              </label>
              <div className='relative'>
                <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center'>
                  <Mail className='w-5 h-5 text-slate-400' strokeWidth={1.75} />
                </span>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full h-12 pl-10 pr-4 border rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary/20 focus:border-primary'}`}
                  placeholder='Enter your email'
                />
              </div>
              {errors.email && (
                <p className='mt-1 text-xs text-red-600'>{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                Password *
              </label>
              <div className='relative'>
                <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center'>
                  <Lock className='w-5 h-5 text-slate-400' strokeWidth={1.75} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full h-12 pl-10 pr-12 border rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none transition-all ${errors.password ? 'border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary/20 focus:border-primary'}`}
                  placeholder='Enter your password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'
                >
                  {showPassword ? (
                    <EyeOff className='w-5 h-5' />
                  ) : (
                    <Eye className='w-5 h-5' />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='mt-1 text-xs text-red-600'>{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className='flex items-center justify-between'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='checkbox'
                  name='rememberMe'
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className='w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20'
                />
                <span className='text-sm text-slate-600 dark:text-slate-300'>
                  Remember me
                </span>
              </label>
              <Link
                to='#'
                className='text-sm text-primary hover:text-primary-dark transition-colors'
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type='submit'
              className='w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </motion.button>

            {/* Sign Up Link */}
            <div className='text-center'>
              <span className='text-slate-600 dark:text-slate-300'>
                Don't have an account?{" "}
              </span>
              <Link
                to='/register'
                className='text-primary hover:text-primary-dark font-semibold transition-colors'
              >
                Sign up here
              </Link>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
