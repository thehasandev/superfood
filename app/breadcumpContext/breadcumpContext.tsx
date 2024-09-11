"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

export const BreadcrumbContext = createContext<{
  active: string;
  setActive: (value: string) => void;
} | null>(null);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [active, setActiveState] = useState("");

  const setActive = (value: string) => {
    setActiveState(value);
    localStorage.setItem("activeBreadcrumb", value);
  };

  useEffect(() => {
    const storedActive = localStorage.getItem("activeBreadcrumb");
    if (storedActive) {
      setActiveState(storedActive);
    }
  }, []);

  return (
    <BreadcrumbContext.Provider value={{ active, setActive }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBradCrumb() {
  return useContext(BreadcrumbContext);
}
