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
import AdminLogin from "./pages/admin/adminLogin";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UserLayout from "./pages/dashboard/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import { SidebarProvider } from "./context/SidebarContext.jsx";

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
        {!(
          location.pathname.startsWith("/dashboard") ||
          location.pathname.startsWith("/admin")
        ) && <Header />}
        <main className='relative flex-1'>
          <Routes key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin/login' element={<AdminLogin />} />

            {/** USER FLOW guarded */}
            <Route element={<ProtectedRoute allowRoles={["user"]} />}>
              <Route path='/dashboard' element={<UserLayout />}>
                <Route index element={<UserDashboard />} />
                <Route
                  path='consignments'
                  element={<div>Manage Consignments</div>}
                />
                <Route
                  path='new-consignment'
                  element={<div>New Consignment</div>}
                />
                <Route path='senders' element={<div>Manage Senders</div>} />
                <Route path='receivers' element={<div>Manage Receivers</div>} />
                <Route path='wallet'>
                  <Route path='top-up' element={<div>Top Up</div>} />
                  <Route
                    path='transactions'
                    element={<div>Transactions</div>}
                  />
                </Route>
              </Route>
            </Route>

            {/** ADMIN FLOW guarded */}
            <Route element={<ProtectedRoute allowRoles={["Admin"]} />}>
              <Route path='/admin/dashboard' element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path='users' element={<div>Manage Users</div>} />
                <Route
                  path='consignments'
                  element={<div>Manage Consignments</div>}
                />
                <Route path='operations' element={<div>Operations</div>} />
                <Route path='reports' element={<div>Reports</div>} />
              </Route>
            </Route>
          </Routes>
        </main>
        {!(
          location.pathname.startsWith("/dashboard") ||
          location.pathname.startsWith("/admin")
        ) && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Router>
        <SidebarProvider>
          <AppContent />
        </SidebarProvider>
      </Router>
    </>
  );
}
