import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id='contact'
      className='mt-auto border-t border-slate-100 bg-white dark:bg-surface dark:border-slate-800'
    >
      <div className='container-section py-10 flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='text-sm text-muted dark:text-slate-300'>
          Need help? Email{" "}
          <a
            href='mailto:support@sendaparcel.co.nz'
            className='text-ink dark:text-white underline transition-colors hover:text-primary dark:hover:text-primary'
          >
            support@sendaparcel.co.nz
          </a>{" "}
          or call{" "}
          <span className='font-semibold text-ink dark:text-white'>
            0800 476 789
          </span>
        </div>
        <nav className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted'>
          <Link
            to='/#how'
            className='transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary'
          >
            How it Works
          </Link>
          <Link
            to='/faqs'
            className='transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary'
          >
            FAQs
          </Link>
          <Link
            to='/terms'
            className='transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary'
          >
            Terms
          </Link>
          <Link
            to='/privacy'
            className='transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary'
          >
            Privacy
          </Link>
          <Link
            to='/contact'
            className='transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary'
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
