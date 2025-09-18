import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import FAQs from "./pages/faqs";
import Terms from "./pages/terms";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./nprogress-overrides.css";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {

  function NavigationProgress() {
    const location = useLocation();

    useEffect(() => {
      NProgress.start();
      // Always jump to top when route changes
      try { window.scrollTo(0, 0); } catch (_) {}
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
        <div className="min-h-screen flex flex-col bg-white text-ink">
          <Header />
          <main className="relative flex-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/faqs' element={<FAQs />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}
