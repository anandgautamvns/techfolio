"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PortfolioState {
  isDark: boolean;
  activeNav: string;
  mobileMenuOpen: boolean;
}

const initialState: PortfolioState = {
  isDark: true,
  activeNav: "home",
  mobileMenuOpen: false,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDark = !state.isDark;
    },
    setActiveNav(state, action: PayloadAction<string>) {
      state.activeNav = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleTheme, setActiveNav, toggleMobileMenu, closeMobileMenu } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
