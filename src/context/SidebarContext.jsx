import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const SidebarContext = createContext({ isOpen: true, toggle: () => {}, setOpen: () => {} });

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const setOpen = useCallback((v) => setIsOpen(Boolean(v)), []);

  const value = useMemo(() => ({ isOpen, toggle, setOpen }), [isOpen, toggle, setOpen]);
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  return useContext(SidebarContext);
}


