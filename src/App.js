import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import FAQs from "./pages/faqs";
import Terms from "./pages/terms";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import { useEffect, useLayoutEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./nprogress-overrides.css";
import Login from "./pages/login";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();

  NProgress.configure({
    minimum: 0.6,
    easing: "ease",
    speed: 800,
    showSpinner: false,
  });

  function NavigationProgress() {
    // Handle hash navigation - scroll to top first, then to section
    useLayoutEffect(() => {
      if (location.hash) {
        // If there's a hash, scroll to top first, then to the section
        window.scrollTo(0, 0);
      } else {
        // No hash, just scroll to top
        window.scrollTo(0, 0);
      }
    }, [location.pathname]);

    useEffect(() => {
      NProgress.start();

      // Handle hash navigation with smooth scroll
      if (location.hash) {
        const timer = setTimeout(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
          NProgress.done();
        }, 500); // Increased delay to ensure page is loaded
        return () => clearTimeout(timer);
      } else {
        // Additional scroll to top with smooth behavior
        const timer = setTimeout(() => {
          try {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          } catch (_) {
            window.scrollTo(0, 0);
          }
          NProgress.done();
        }, 100);

        return () => clearTimeout(timer);
      }
    }, [location]);

    return null;
  }

  return (
    <>
      <NavigationProgress />
      <div className='min-h-screen flex flex-col bg-white text-ink'>
        <Header />
        <main className='relative flex-1'>
          <Routes key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}
