import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Header() {
  return (
    <header className='sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-surface/70 border-b border-slate-100 dark:border-slate-800'>
      <div className='container-section flex h-16 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <a href='/' className='inline-flex items-center'>
            <img
              src='/images/logo.png'
              alt='SendAParcel'
              className='h-24 w-auto md:h-28 block dark:hidden'
            />
            <img
              src='/images/logo_white_2.png'
              alt='SendAParcel'
              className='h-24 w-auto md:h-28 hidden dark:block'
            />
          </a>
        </div>
        <div className='flex items-center gap-3'>
          <button
            aria-label='Toggle dark mode'
            className='inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-sm hover:border-ink dark:border-slate-700'
            onClick={() => {
              const root = document.documentElement;
              const isDark = root.classList.toggle("dark");
              localStorage.setItem("theme", isDark ? "dark" : "light");
            }}
          >
            <span className='hidden md:inline'>Theme</span>
            <span className='md:hidden'>☾</span>
          </button>
          <Link to='/login' className='btn btn-ghost text-sm'>
            Login
          </Link>
          <button
            className='btn btn-primary text-sm'
            onClick={() => toast.success("Welcome to SendAParcel 🚚")}
          >
            Create account
          </button>
        </div>
      </div>
    </header>
  );
}
