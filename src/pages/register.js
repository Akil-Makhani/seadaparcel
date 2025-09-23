import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Package,
  User,
  Phone,
  MapPin,
  Building,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  getDomesticRegisterAddressApi,
  searchDomesticRegisterAddressApi,
  createCompanyRegisterApi,
  checkUserExistsApi,
  registerApi,
} from "../services/apiFlow";
import Loader from "../components/loader";

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
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  },
};

const BENEFITS = [
  { icon: CheckCircle, text: "Track your parcels in real-time" },
  { icon: CheckCircle, text: "Get instant delivery notifications" },
  { icon: CheckCircle, text: "Access to premium shipping rates" },
  { icon: CheckCircle, text: "24/7 customer support" },
];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    street: "",
    unit: "",
    suburb: "",
    city: "",
    state: "",
    postcode: "",
  });
  const [errors, setErrors] = useState({});

  // Address lookup state
  const [lookupTerm, setLookupTerm] = useState("");
  const [lookupResults, setLookupResults] = useState([]);
  const [showLookupSuggestions, setShowLookupSuggestions] = useState(false);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  const [isLookupDisabled, setIsLookupDisabled] = useState(false);
  const [selectedLookupAddress, setSelectedLookupAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedHandleAddressLookup = useCallback(
    debounce(async (term) => {
      if (!term || term.trim().length < 2) {
        setLookupResults([]);
        setShowLookupSuggestions(false);
        return;
      }

      setIsAddressLoading(true);
      try {
        const response = await searchDomesticRegisterAddressApi(term.trim());
        const results = response?.data?.result || [];
        setLookupResults(results);
        setShowLookupSuggestions(true);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
        toast.error("Failed to fetch address suggestions");
        setLookupResults([]);
        setShowLookupSuggestions(false);
      } finally {
        setIsAddressLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedHandleAddressLookup.cancel();
    };
  }, [debouncedHandleAddressLookup]);

  const handleAddressLookupChange = (term) => {
    setLookupTerm(term);
    setSelectedLookupAddress("");
    setLookupResults([]);
    debouncedHandleAddressLookup(term);
    if (errors.address) setErrors((prev) => ({ ...prev, address: "" }));
  };

  const handleAddressSelect = async (addressId, fullAddress) => {
    setIsAddressLoading(true);
    try {
      const response = await getDomesticRegisterAddressApi(addressId);
      if (response?.data?.success) {
        const details = response.data.result || {};
        setSelectedLookupAddress(fullAddress);
        setLookupTerm(fullAddress);
        setIsLookupDisabled(false);
        setFormData((prev) => ({
          ...prev,
          address: fullAddress,
          street: `${details.street_number || ""} ${details.street || ""} ${
            details.street_type || ""
          }`.trim(),
          company: details.company || prev.company,
          contactName: details.contactName || prev.contactName,
          building: details.building || "",
          email: details.email || prev.email,
          unit: details.unit_value || "",
          phone: details.phone || prev.phone,
          suburb: details.suburb || "",
          city: details.city || "",
          state: details.state || prev.state,
          postcode: details.post_code || "",
        }));
      }
      setShowLookupSuggestions(false);
    } catch (error) {
      console.error("Error getting address details:", error);
      toast.error("Failed to get address details");
    } finally {
      setIsAddressLoading(false);
    }
  };

  const handleLookupInputClear = () => {
    setLookupTerm("");
    setLookupResults([]);
    setSelectedLookupAddress("");
    setShowLookupSuggestions(false);
    setFormData((prev) => ({ ...prev, address: "" }));
  };

  const handleLookupBlur = () => {
    // Delay hiding to allow click on suggestion
    setTimeout(() => setShowLookupSuggestions(false), 150);
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-1.5 border rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none transition-all ${
      hasError
        ? "border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500"
        : "border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary/20 focus:border-primary"
    }`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formData.firstName) nextErrors.firstName = "First name is required.";
    if (!formData.lastName) nextErrors.lastName = "Last name is required.";
    if (!formData.email) nextErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      nextErrors.email = "Enter a valid email.";
    if (!formData.phone) nextErrors.phone = "Phone number is required.";
    if (!formData.password) nextErrors.password = "Password is required.";
    if (!formData.confirmPassword)
      nextErrors.confirmPassword = "Confirm your password.";
    else if (formData.password !== formData.confirmPassword)
      nextErrors.confirmPassword = "Passwords do not match.";
    if (!formData.street) nextErrors.street = "Street is required.";
    if (!formData.unit) nextErrors.unit = "Unit is required.";
    if (!formData.suburb) nextErrors.suburb = "Suburb is required.";
    if (!formData.city) nextErrors.city = "City is required.";
    if (!formData.state) nextErrors.state = "State is required.";
    if (!formData.postcode) nextErrors.postcode = "Postcode is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const payload = {
      username: formData.email,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      street: formData.street,
      city: formData.city,
      state: formData.state || "",
      postCode: formData.postcode,
      contactNumber: formData.phone,
      suburb: formData.suburb,
      password: formData.password,
      IsUserBan: false,
      country: "NZ",
    };
    setIsLoading(true);
    try {
      const response = await registerApi(payload);
      if (response?.data?.status === "Success") {
        toast.success(
          "Account created successfully! Welcome to SENDAPARCEL 🎉"
        );
      } else {
        const message = response?.data?.message || "Registration failed";
        toast.error(message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Loader open={isLoading} />
      <div
        key='register-page'
        className='min-h-screen flex bg-gradient-to-br from-sky via-white to-blue-50 dark:from-[#0B1220] dark:via-[#0B1220] dark:to-[#1a1a2e]'
      >
        {/* Left Side - Benefits */}
        <motion.div
          className='hidden lg:flex lg:w-1/2 relative overflow-hidden'
          initial='hidden'
          animate='show'
          variants={ANIMATION_VARIANTS.container}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10' />

          {/* Benefits Section */}
          <div className='relative z-10 flex flex-col justify-center items-center w-full px-12'>
            <motion.div
              variants={ANIMATION_VARIANTS.item}
              className='text-center mb-12'
            >
              <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
                Why Choose Us?
              </h2>
              <p className='text-slate-600 dark:text-slate-300'>
                Join thousands of satisfied customers
              </p>
            </motion.div>

            <div className='space-y-6 w-full max-w-sm'>
              {BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.text}
                    variants={ANIMATION_VARIANTS.slideIn}
                    className='flex items-center gap-4 group'
                  >
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors'>
                        <Icon className='w-6 h-6 text-primary' />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <p className='font-medium text-slate-800 dark:text-white'>
                        {benefit.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative Map */}
            <motion.div
              variants={ANIMATION_VARIANTS.item}
              className='mt-12 relative'
            >
              <div className='w-64 h-40 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl flex items-center justify-center'>
                <Building className='w-16 h-16 text-primary/60' />
              </div>
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse' />
              <div className='absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full animate-pulse delay-500' />
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className='absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/5 animate-pulse' />
          <div className='absolute bottom-32 left-16 w-24 h-24 rounded-full bg-blue-500/5 animate-pulse delay-1000' />
        </motion.div>

        {/* Right Side - Registration Form */}
        <div className='flex-1 flex items-center justify-center p-8'>
          <motion.div
            className='w-full max-w-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Header */}
            <div className='text-center mb-8'>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='inline-flex items-center gap-3 mb-2'
              >
                <img
                  src='/images/logo_4.png'
                  alt='SendAParcel'
                  className='h-36 w-auto md:h-40'
                  loading='eager'
                  decoding='async'
                  fetchPriority='high'
                />
              </motion.div>

              <h1 className='text-3xl font-bold text-slate-800 dark:text-white mb-2'>
                Create Your Account
              </h1>
              <p className='text-slate-600 dark:text-slate-300'>
                Join thousands of satisfied customers
              </p>
            </div>

            {/* Registration Form */}
            <motion.form
              onSubmit={handleSubmit}
              className='space-y-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Personal Information */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    First Name *
                  </label>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type='text'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.firstName)} pl-10 pr-4`}
                      placeholder='Enter first name'
                    />
                  </div>
                  {errors.firstName && (
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    Last Name *
                  </label>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type='text'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.lastName)} pl-10 pr-4`}
                      placeholder='Enter last name'
                    />
                  </div>
                  {errors.lastName && (
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    Email Address *
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.email)} pl-10 pr-4`}
                      placeholder='Enter your email'
                    />
                  </div>
                  {errors.email && (
                    <p className='mt-1 text-xs text-red-600'>{errors.email}</p>
                  )}
                </div>

                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    Contact Number *
                  </label>
                  <div className='relative'>
                    <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.phone)} pl-10 pr-4`}
                      placeholder='Enter phone number'
                    />
                  </div>
                  {errors.phone && (
                    <p className='mt-1 text-xs text-red-600'>{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Password Fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    Password *
                  </label>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type={showPassword ? "text" : "password"}
                      name='password'
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.password)} pl-10 pr-12`}
                      placeholder='Create password'
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
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    Confirm Password *
                  </label>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`${inputClass(
                        !!errors.confirmPassword
                      )} pl-10 pr-12`}
                      placeholder='Confirm password'
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'
                    >
                      {showConfirmPassword ? (
                        <EyeOff className='w-5 h-5' />
                      ) : (
                        <Eye className='w-5 h-5' />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Address Information (optional) */}
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-slate-800 dark:text-white'>
                  Address Information
                </h3>

                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    Address Lookup
                  </label>
                  <div className='relative'>
                    <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                    <input
                      type='text'
                      name='addressLookup'
                      value={lookupTerm}
                      onChange={(e) =>
                        handleAddressLookupChange(e.target.value)
                      }
                      onBlur={handleLookupBlur}
                      maxLength={50}
                      className={`${inputClass(!!errors.address)} pl-10 pr-8`}
                      placeholder='Search for your address'
                    />
                    {lookupTerm && !isLookupDisabled && (
                      <button
                        type='button'
                        onClick={handleLookupInputClear}
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700'
                      >
                        ×
                      </button>
                    )}
                    {isAddressLoading && (
                      <div className='absolute right-7 top-1/2 transform -translate-y-1/2'>
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-primary'></div>
                      </div>
                    )}
                    {showLookupSuggestions && lookupResults.length > 0 && (
                      <div className='absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto'>
                        {lookupResults.map((result) => (
                          <div
                            key={result.address_id}
                            className='px-3 py-2 hover:bg-gray-100 cursor-pointer'
                            onMouseDown={() =>
                              handleAddressSelect(
                                result.address_id,
                                result.full_address
                              )
                            }
                          >
                            {result.full_address}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.address && (
                    <p className='mt-1 text-xs text-red-600'>
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                      Street *
                    </label>
                    <input
                      type='text'
                      name='street'
                      value={formData.street}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.street)} pl-4 pr-4`}
                      placeholder='Street address'
                    />
                    {errors.street && (
                      <p className='mt-1 text-xs text-red-600'>
                        {errors.street}
                      </p>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                      Unit *
                    </label>
                    <input
                      type='text'
                      name='unit'
                      value={formData.unit}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.unit)} pl-4 pr-4`}
                      placeholder='Unit number'
                    />
                    {errors.unit && (
                      <p className='mt-1 text-xs text-red-600'>{errors.unit}</p>
                    )}
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                      Suburb *
                    </label>
                    <input
                      type='text'
                      name='suburb'
                      value={formData.suburb}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.suburb)} pl-4 pr-4`}
                      placeholder='Suburb'
                    />
                    {errors.suburb && (
                      <p className='mt-1 text-xs text-red-600'>
                        {errors.suburb}
                      </p>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                      City *
                    </label>
                    <input
                      type='text'
                      name='city'
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.city)} pl-4 pr-4`}
                      placeholder='City'
                    />
                    {errors.city && (
                      <p className='mt-1 text-xs text-red-600'>{errors.city}</p>
                    )}
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                      State *
                    </label>
                    <input
                      type='text'
                      name='state'
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.state)} pl-4 pr-4`}
                      placeholder='State'
                    />
                    {errors.state && (
                      <p className='mt-1 text-xs text-red-600'>
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
                      Postcode *
                    </label>
                    <input
                      type='text'
                      name='postcode'
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className={`${inputClass(!!errors.postcode)} pl-4 pr-4`}
                      placeholder='Postcode'
                    />
                    {errors.postcode && (
                      <p className='mt-1 text-xs text-red-600'>
                        {errors.postcode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type='submit'
                className='w-full btn btn-primary flex items-center justify-center gap-2 group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </motion.button>

              {/* Login Link */}
              <div className='text-center'>
                <span className='text-slate-600 dark:text-slate-300'>
                  Already have an account?{" "}
                </span>
                <Link
                  to='/login'
                  className='text-primary hover:text-primary-dark font-semibold transition-colors'
                >
                  Sign in here
                </Link>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
