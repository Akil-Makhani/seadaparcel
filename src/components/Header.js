import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Header() {
  return (
    <header className='sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-100'>
      <div className='container-section flex h-16 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Link to='/' className='inline-flex items-center'>
            <img
              src='/images/logo_2.png'
              alt='SendAParcel'
              className='h-28 w-auto md:h-32 block'
            />
          </Link>
        </div>
        <div className='flex items-center gap-3'>
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
