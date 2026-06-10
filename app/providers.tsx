"use client";

import { useRef, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";

function ThemeApplier({ children }: { children: React.ReactNode }) {
  const isDark = useAppSelector((s) => s.portfolio.isDark);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
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
