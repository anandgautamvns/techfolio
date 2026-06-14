"use client";

import { useRef, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setTheme } from "@/lib/features/portfolioSlice";

function ThemeApplier({ children }: { children: React.ReactNode }) {
  const isDark = useAppSelector((s) => s.portfolio.isDark);
  const dispatch = useAppDispatch();
  const initialized = useRef(false);

  // Restore saved preference on first mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const saved = localStorage.getItem("theme");
    if (saved === "light") dispatch(setTheme(false));
    if (saved === "dark") dispatch(setTheme(true));
  }, [dispatch]);

  // Apply class to <html> and persist on every change
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeApplier>{children}</ThemeApplier>
    </Provider>
  );
}
