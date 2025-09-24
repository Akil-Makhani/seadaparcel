import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemLocalStorage, removeItemLocalStorage } from "../utils/browserSetting.jsx";

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getItemLocalStorage('token'));
  const [role, setRole] = useState(getItemLocalStorage('role'));

  useEffect(() => {
    const onStorage = () => {
      setIsLoggedIn(!!getItemLocalStorage('token'));
      setRole(getItemLocalStorage('role'));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    removeItemLocalStorage('token');
    removeItemLocalStorage('role');
    setIsLoggedIn(false);
    setRole(null);
    navigate('/');
  };

  const accountPath = role === 'admin' ? '/admin/dashboard' : '/dashboard';

  return (
    <header className='sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-100'>
      <div className='container-section flex h-20 items-center justify-between'>
        <div className='-ml-16 flex items-center gap-3'>
          <Link to='/' className='inline-flex items-center'>
            <img
              src='/images/logo_4.png'
              alt='SendAParcel'
              className='h-36 w-auto md:h-52 block'
              loading='eager'
              decoding='async'
              fetchPriority='high'
            />
          </Link>
        </div>
        <div className='flex items-center gap-3'>
          {isLoggedIn ? (
            <>
              <Link to={accountPath} className='btn btn-ghost text-sm'>
                Account
              </Link>
              <button onClick={handleLogout} className='btn btn-primary text-sm'>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login' className='btn btn-ghost text-sm'>
                Login
              </Link>
              <Link to='/register' className='btn btn-primary text-sm'>
                Create account
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
