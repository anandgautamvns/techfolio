"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, User, Code2, Briefcase, FolderOpen,
  Layers, BookOpen, Mail, Download, Sun, Moon, Menu, X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme, toggleMobileMenu, closeMobileMenu } from "@/lib/features/portfolioSlice";

const navItems = [
  { href: "/",           label: "Home",       icon: Home },
  { href: "/about",      label: "About",      icon: User },
  { href: "/skills",     label: "Skills",     icon: Code2 },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects",   label: "Projects",   icon: FolderOpen },
  { href: "/services",   label: "Services",   icon: Layers },
  { href: "/blog",       label: "Blog",       icon: BookOpen },
  { href: "/contact",    label: "Contact",    icon: Mail },
];

const socials = [
  { href: "#", Icon: GithubIcon,    label: "GitHub" },
  { href: "#", Icon: LinkedinIcon,  label: "LinkedIn" },
  { href: "#", Icon: TwitterIcon,   label: "Twitter" },
  { href: "#", Icon: InstagramIcon, label: "Instagram" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((s) => s.portfolio.isDark);
  const mobileMenuOpen = useAppSelector((s) => s.portfolio.mobileMenuOpen);

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{ background: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold text-sm">&lt;/&gt;</span>
          <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>TechPortfolio</span>
        </div>
        <button
          onClick={() => dispatch(toggleMobileMenu())}
          className="p-1 transition-colors"
          style={{ color: "var(--text-muted)" }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/70"
          onClick={() => dispatch(closeMobileMenu())}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed top-0 left-0 h-full z-50 flex flex-col w-[220px]",
          "transition-transform duration-300",
          "lg:translate-x-0",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
        style={{ background: "var(--bg-sidebar)", borderRight: "1px solid var(--border-color)" }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 px-5 py-5"
          style={{ borderBottom: "1px solid var(--border-color)" }}
        >
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg text-blue-400 font-bold text-[13px]"
            style={{ background: "var(--logo-bg)", border: "1px solid var(--logo-border)" }}
          >
            &lt;/&gt;
          </div>
          <span className="font-bold text-[15px] tracking-wide" style={{ color: "var(--text-primary)" }}>
            TechPortfolio
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => dispatch(closeMobileMenu())}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                    style={
                      active
                        ? {
                            background: "var(--nav-active-bg)",
                            color: "#60a5fa",
                            border: "1px solid var(--nav-active-border)",
                          }
                        : {
                            color: "var(--text-muted)",
                            border: "1px solid transparent",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "var(--nav-hover-bg)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      }
                    }}
                  >
                    <Icon size={15} />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 space-y-4" style={{ borderTop: "1px solid var(--border-color)" }}>
          {/* Social icons */}
          <div className="flex items-center gap-3.5">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors"
                style={{ color: "var(--text-faint)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#60a5fa")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-faint)")}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Download CV */}
          <button
            className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg text-xs font-medium transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--border-color)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-card)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
            }}
          >
            <Download size={13} />
            Download CV
          </button>

          {/* Theme toggle */}
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Theme
            </span>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="relative flex items-center w-12 h-6 rounded-full transition-colors"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              aria-label="Toggle theme"
            >
              <Sun size={9} className="absolute left-1.5 text-yellow-500/70" />
              <Moon size={9} className="absolute right-1.5 text-blue-400/70" />
              <span
                className="absolute w-4 h-4 rounded-full shadow transition-transform duration-200"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                  transform: isDark ? "translateX(26px)" : "translateX(4px)",
                }}
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
