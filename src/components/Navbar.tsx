"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  "Weight Loss",
  "Men",
  "Women",
  "Lonevity",
  "Skin",
  "Vitamin Shots",
  "General Health",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-main fixed top-0 left-0 w-full z-50" style={{ backgroundColor: "#20514C", height: "var(--navbar-height)", fontFamily: "'Aeonick Pro', sans-serif" }}>
      <div className="flex items-center h-full" style={{ paddingRight: "clamp(16px, 3vw, 42px)", paddingTop: 0 }}>
        <div className="navbar-logo" style={{ paddingTop: 5, marginLeft: "clamp(16px, 3vw, 42px)", marginRight: "clamp(20px, 22vw, 420px)", flexShrink: 0 }}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Rejuvemed"
              width={150}
              height={40}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="flex-1 overflow-hidden mobile-hidden" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <ul className="flex items-center" style={{ gap: "clamp(12px, 2.5vw, 50px)" }}>
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="font-medium hover:opacity-80 transition-colors whitespace-nowrap"
                  style={{ color: "grey", fontSize: "clamp(14px, 1.25vw, 24px)" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-4 shrink-0 mobile-hidden">
          <button
            style={{ height: 64, color: "white", paddingLeft: 12, paddingRight: 12 }}
            className="font-bold bg-transparent cursor-pointer whitespace-nowrap"
          >
            Log In
          </button>
          <button
            style={{ height: 64, fontSize: "clamp(14px, 1.05vw, 20px)", backgroundColor: "white", color: "black", borderRadius: 10, paddingLeft: 20, paddingRight: 20 }}
            className="font-bold cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
        {/* Mobile: Get Started + hamburger */}
        <div className="mobile-nav-right" style={{ display: "none", marginLeft: "auto", alignItems: "center", gap: 12 }}>
          <button
            style={{
              backgroundColor: "#EDEDED",
              color: "#1F1F1F",
              borderRadius: 10,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "'Aeonick Pro', sans-serif",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Get Started
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="mobile-nav-overlay"
          style={{
            display: "none",
            position: "fixed",
            top: "var(--navbar-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#2F5B4E",
            flexDirection: "column",
            padding: "24px 20px",
            gap: 8,
            zIndex: 50,
            overflowY: "auto",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-medium"
              style={{
                color: "white",
                fontSize: 18,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
              }}
            >
              {item}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
              style={{ height: 48, color: "white", paddingLeft: 12, paddingRight: 12, background: "none", border: "2px solid white", borderRadius: 6, flex: 1 }}
              className="font-bold cursor-pointer"
            >
              Log In
            </button>
            <button
              style={{ height: 48, fontSize: 16, backgroundColor: "white", color: "black", borderRadius: 6, paddingLeft: 20, paddingRight: 20, border: "none", flex: 1 }}
              className="font-bold cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
