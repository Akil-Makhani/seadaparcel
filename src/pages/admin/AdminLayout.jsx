import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, Users2, NotebookPen, PackageSearch, ClipboardList, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext.jsx";
import { useState } from "react";
import Header from "../../components/Header";

const linkBase =
  "group relative flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-all duration-200 hover:bg-primary/5";

export default function AdminLayout() {
  const { isOpen, toggle } = useSidebar();
  const [managementOpen, setManagementOpen] = useState(true);
  return (
    <div className='min-h-screen w-full flex'>
      <aside
        className={`
          relative hidden md:block shrink-0 border-r ${isOpen ? "bg-white/90 backdrop-blur text-ink" : "bg-primary text-white"}
          ${isOpen ? "w-72" : "w-16"}
          transition-[width] duration-300 ease-in-out
        `}
      >
        {isOpen && (
          <div className='pointer-events-none absolute inset-0 opacity-25 bg-gradient-to-b from-primary/30 via-transparent to-primary/20 blur-xl' />
        )}
        <div className='relative h-screen overflow-y-auto'>
          <div className={`px-3.5 py-4 flex items-center justify-between border-b ${isOpen ? "bg-white/80 border-primary/20" : "bg-primary/90 border-white/20"}`}>
            <button
              type='button'
              onClick={toggle}
              className={`inline-flex items-center justify-center h-9 w-9 rounded-md ${isOpen ? "hover:bg-primary/10 text-primary" : "hover:bg-white/10 text-white"}`}
              aria-label='Toggle sidebar'
            >
              <Menu className='h-5 w-5' />
            </button>
            {isOpen && <div className={`text-xs font-semibold tracking-wider uppercase ${isOpen ? "text-ink/60" : "text-white"}`}>Menu</div>}
          </div>
          <nav className='p-2 space-y-1'>
            <NavLink
              to='.'
              end
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? isOpen
                      ? "bg-primary/10 text-ink ring-1 ring-primary/30"
                      : "bg-white/15 text-white ring-1 ring-white/20"
                    : isOpen
                      ? "text-ink/80"
                      : "text-white/90"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`absolute left-0 h-5 rounded-r ${isActive ? `w-[3px] ${isOpen ? "bg-primary" : "bg-white"}` : "w-0"}`} />
                  <Home className={`h-5 w-5 ${isActive ? (isOpen ? "text-primary" : "text-white") : isOpen ? "text-ink/60 group-hover:text-primary" : "text-white/80 group-hover:text-white"}`} />
                  {isOpen && <span>Dashboard</span>}
                </>
              )}
            </NavLink>

            {isOpen && (
              <button
                type='button'
                onClick={() => setManagementOpen((v) => !v)}
                className={`w-full mt-3 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider ${isOpen ? "text-ink/50" : "text-white/70"} flex items-center justify-between`}
              >
                <span>Management</span>
                {managementOpen ? <ChevronDown className='h-4 w-4' /> : <ChevronRight className='h-4 w-4' />}
              </button>
            )}
            <NavLink
              to='users'
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? isOpen
                      ? "bg-primary/10 text-ink ring-1 ring-primary/30"
                      : "bg-white/15 text-white ring-1 ring-white/20"
                    : isOpen
                      ? "text-ink/80"
                      : "text-white/90"
                } ${managementOpen ? "block" : "hidden"}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`absolute left-0 h-5 rounded-r ${isActive ? `w-[3px] ${isOpen ? "bg-primary" : "bg-white"}` : "w-0"}`} />
                  <Users2 className={`h-5 w-5 ${isActive ? (isOpen ? "text-primary" : "text-white") : isOpen ? "text-ink/60 group-hover:text-primary" : "text-white/80 group-hover:text-white"}`} />
                  {isOpen && <span>Manage Users</span>}
                </>
              )}
            </NavLink>

            <NavLink
              to='consignments'
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? isOpen
                      ? "bg-primary/10 text-ink ring-1 ring-primary/30"
                      : "bg-white/15 text-white ring-1 ring-white/20"
                    : isOpen
                      ? "text-ink/80"
                      : "text-white/90"
                } ${managementOpen ? "block" : "hidden"}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`absolute left-0 h-5 rounded-r ${isActive ? `w-[3px] ${isOpen ? "bg-primary" : "bg-white"}` : "w-0"}`} />
                  <NotebookPen className={`h-5 w-5 ${isActive ? (isOpen ? "text-primary" : "text-white") : isOpen ? "text-ink/60 group-hover:text-primary" : "text-white/80 group-hover:text-white"}`} />
                  {isOpen && <span>Manage Consignments</span>}
                </>
              )}
            </NavLink>

            <NavLink
              to='operations'
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? isOpen
                      ? "bg-primary/10 text-ink ring-1 ring-primary/30"
                      : "bg-white/15 text-white ring-1 ring-white/20"
                    : isOpen
                      ? "text-ink/80"
                      : "text-white/90"
                } ${managementOpen ? "block" : "hidden"}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`absolute left-0 h-5 rounded-r ${isActive ? `w-[3px] ${isOpen ? "bg-primary" : "bg-white"}` : "w-0"}`} />
                  <PackageSearch className={`h-5 w-5 ${isActive ? (isOpen ? "text-primary" : "text-white") : isOpen ? "text-ink/60 group-hover:text-primary" : "text-white/80 group-hover:text-white"}`} />
                  {isOpen && <span>Operations</span>}
                </>
              )}
            </NavLink>

            <NavLink
              to='reports'
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? isOpen
                      ? "bg-primary/10 text-ink ring-1 ring-primary/30"
                      : "bg-white/15 text-white ring-1 ring-white/20"
                    : isOpen
                      ? "text-ink/80"
                      : "text-white/90"
                } ${managementOpen ? "block" : "hidden"}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`absolute left-0 h-5 rounded-r ${isActive ? `w-[3px] ${isOpen ? "bg-primary" : "bg-white"}` : "w-0"}`} />
                  <ClipboardList className={`h-5 w-5 ${isActive ? (isOpen ? "text-primary" : "text-white") : isOpen ? "text-ink/60 group-hover:text-primary" : "text-white/80 group-hover:text-white"}`} />
                  {isOpen && <span>Reports</span>}
                </>
              )}
            </NavLink>
          </nav>
        </div>
      </aside>

      <section className='flex-1 min-w-0'>
        <div className='min-h-screen bg-white p-0 flex flex-col'>
          <Header />
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}


