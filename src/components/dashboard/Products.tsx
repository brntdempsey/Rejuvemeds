"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { title: "Lose Weight", url: "/images/dashboard/products/MoodBoost-Mockup-1-2@2x.png", gradient: "linear-gradient(to bottom, #738064, #BECEAB)" },
  { title: "Look Better", url: "/images/dashboard/products/MoodBoost-Mockup-1-4@2x.png", gradient: "linear-gradient(to bottom, #D3A059, #FFD08F)" },
  { title: "Regrow Hair", url: "/images/dashboard/products/MoodBoost-Mockup-1-3@2x.png", gradient: "linear-gradient(to bottom, #000000, #656D5C)" },
  { title: "Feel Younger", url: "/images/dashboard/products/MoodBoost-Mockup-1-31@2x.png", gradient: "linear-gradient(to bottom, #000000, #656D5C)" },
  { title: "EveryDay Health", url: "/images/dashboard/products/MoodBoost-Mockup-1@2x.png", gradient: "linear-gradient(to bottom, #000000, #656D5C)" },
  { title: "Performance & Libido", url: "/images/dashboard/products/MoodBoost-Mockup-1-3@2x.png", gradient: "linear-gradient(to bottom, #738064, #BECEAB)" },
];

const repeatedProducts = [...products, ...products, ...products];

function getCardWidth() {
  if (typeof window === "undefined") return 462;
  return window.innerWidth <= 480 ? 387 + 16 : 462;
}

function getCardDisplayWidth() {
  if (typeof window === "undefined") return 438;
  return window.innerWidth <= 480 ? 387 : 438;
}

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(462);
  const [cardDisplayWidth, setCardDisplayWidth] = useState(438);

  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(getCardWidth());
      setCardDisplayWidth(getCardDisplayWidth());
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const setWidth = products.length * cardWidth;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = setWidth;

    const handleScroll = () => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft += setWidth;
      } else if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth;
      }
    };

    el.addEventListener("scrollend", handleScroll);
    return () => el.removeEventListener("scrollend", handleScroll);
  }, [setWidth]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const isMobile = cardDisplayWidth < 438;
  const innerWidth = cardDisplayWidth - 12;
  const innerHeight = isMobile ? 486 - 12 - 46 : Math.round(innerWidth * 478 / 426);
  const imgWidth = isMobile ? 333 : 338;
  const imgHeight = isMobile ? 243 : 238;

  return (
    <section
      className="db-products"
      style={{
        minHeight: "clamp(500px, 39vw, 748px)",
        backgroundColor: "#FAFAFA",
        paddingTop: "clamp(50px, 5.2vw, 100px)",
        paddingBottom: 40,
        position: "relative",
      }}
    >
      <h2
        style={{
          paddingLeft: "var(--section-px)",
          fontSize: "clamp(24px, 2.5vw, 48px)",
          fontFamily: "'Aeonick Pro', sans-serif",
          lineHeight: 1,
          color: "#1A1A1A",
        }}
        className="font-bold"
      >
      </h2>
      <div style={{ position: "relative" }}>
        <button
          className="db-products-overlay-btn"
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: "clamp(8px, 1.05vw, 20px)",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(36px, 2.5vw, 48px)",
            height: "clamp(36px, 2.5vw, 48px)",
            borderRadius: 999,
            border: "none",
            backgroundColor: "#20514C",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(16px, 1.05vw, 20px)",
            zIndex: 10,
          }}
        >
          ←
        </button>
        <button
          className="db-products-overlay-btn"
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: "clamp(8px, 1.05vw, 20px)",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(36px, 2.5vw, 48px)",
            height: "clamp(36px, 2.5vw, 48px)",
            borderRadius: 999,
            border: "none",
            backgroundColor: "#20514C",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(16px, 1.05vw, 20px)",
            zIndex: 10,
          }}
        >
          →
        </button>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: isMobile ? 16 : 24,
            marginTop: "clamp(20px, 2.1vw, 40px)",
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingRight: "var(--section-px)",
          }}
        >
          {repeatedProducts.map((product, index) => (
            <div
              key={index}
              style={{
                width: cardDisplayWidth,
                height: isMobile ? 486 : 548,
                backgroundColor: "#F2EEE6",
                borderRadius: 10,
                padding: 6,
                flexShrink: 0,
              }}
              className="flex flex-col"
            >
              <div className="relative" style={{ width: innerWidth, height: isMobile ? "auto" : innerHeight, borderRadius: 6, background: product.gradient, paddingTop: isMobile ? imgHeight * 0.4 : 150, paddingLeft: isMobile ? 20 : 49, paddingBottom: isMobile ? 20 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Image
                    src={product.url}
                    alt={product.title}
                    width={338}
                    height={238}
                    style={{
                      width: isMobile ? imgWidth : 338,
                      height: isMobile ? imgHeight : 238,
                      objectFit: "contain",
                    }}
                  />
                  <Image
                    src="/images/dashboard/products/shadow.png"
                    alt=""
                    width={211}
                    height={40}
                    style={{
                      marginTop: isMobile ? 12 : 24,
                      objectFit: "contain",
                      width: isMobile ? Math.round(imgWidth * 0.6) : 211,
                      height: "auto",
                    }}
                  />
                </div>
                <span
                  className="absolute font-bold text-white db-products-title"
                  style={{
                    top: "clamp(12px, 1.05vw, 20px)",
                    left: "clamp(16px, 1.6vw, 30px)",
                    fontSize: "clamp(20px, 1.93vw, 37px)",
                    fontFamily: "'Aeonick Pro', sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  {(() => {
                    const spaceIndex = product.title.indexOf(" ");
                    if (spaceIndex === -1) return product.title;
                    return (
                      <>
                        {product.title.slice(0, spaceIndex)}
                        <br />
                        {product.title.slice(spaceIndex + 1)}
                      </>
                    );
                  })()}
                </span>
              </div>
              <div className="flex gap-2" style={{ paddingTop: 6 }}>
                <Link
                  href="#"
                  style={{
                    flex: 1,
                    height: isMobile ? 40 : 52,
                    borderRadius: 6,
                    backgroundColor: "#20514C",
                    color: "white",
                    fontSize: isMobile ? 12 : 14,
                  }}
                  className="font-bold cursor-pointer flex items-center justify-center"
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  style={{
                    flex: 1,
                    height: isMobile ? 40 : 52,
                    borderRadius: 6,
                    backgroundColor: "white",
                    color: "#20514C",
                    border: "3px solid #20514C",
                    fontSize: isMobile ? 12 : 14,
                  }}
                  className="font-bold cursor-pointer flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom nav buttons - only visible on mobile via CSS */}
      <div className="db-products-nav" style={{ display: "none", gap: 8, marginTop: 20 }}>
        <button
          onClick={() => scroll("left")}
          style={{
            width: 44,
            height: 36,
            borderRadius: 4,
            border: "2px solid #20514C",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 16,
            color: "#20514C",
            fontFamily: "'Aeonick Pro', sans-serif",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          style={{
            width: 44,
            height: 36,
            borderRadius: 4,
            border: "2px solid #20514C",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 16,
            color: "#20514C",
            fontFamily: "'Aeonick Pro', sans-serif",
          }}
        >

          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
