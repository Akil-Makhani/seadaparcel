import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  // Persisted dark mode class on <html>
  if (typeof document !== 'undefined') {
    const stored = localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  }

  function NavigationProgress() {
    const location = useLocation();

    useEffect(() => {
      NProgress.start();
      const timer = setTimeout(() => {
        NProgress.done();
      }, 100);

      return () => {
        clearTimeout(timer);
        NProgress.done();
      };
    }, [location]);

    return null;
  }

  return (
    <>
      <Toaster position='top-center' />
      <Router>
        <NavigationProgress />
        <div className="min-h-screen flex flex-col bg-white text-ink dark:bg-surface dark:text-slate-200">
          <Header />
          <main className="relative flex-1">
            <div aria-hidden="true" className="rain-7">
              <div className="raindrop" style={{ left: '4%',  top: '-90px', height: 180, '--tailW': '2px', '--headW': '10px', '--headH': '14px' }} />
              <div className="raindrop" style={{ left: '16%', top: '-40px', height: 120, '--tailW': '1px', '--headW': '9px',  '--headH': '12px' }} />
              <div className="raindrop" style={{ left: '29%', top: '-70px', height: 210, '--tailW': '3px', '--headW': '13px', '--headH': '16px' }} />
              <div className="raindrop" style={{ left: '46%', top: '-30px', height: 160, '--tailW': '2px', '--headW': '11px', '--headH': '15px' }} />
              <div className="raindrop" style={{ left: '63%', top: '-100px',height: 240, '--tailW': '3px', '--headW': '14px', '--headH': '18px' }} />
              <div className="raindrop" style={{ left: '79%', top: '-55px', height: 140, '--tailW': '1px', '--headW': '9px',  '--headH': '12px' }} />
              <div className="raindrop" style={{ left: '93%', top: '-65px', height: 190, '--tailW': '2px', '--headW': '12px', '--headH': '15px' }} />
            </div>
            <Routes>
              <Route>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}
