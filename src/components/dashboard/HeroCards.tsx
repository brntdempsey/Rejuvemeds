"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  { title: "Lose Weight", url: "/images/dashboard/hero/Condition-Navigation@3x.png" },
  { title: "Look Better", url: "/images/dashboard/hero/Condition-Navigation1@3x.png" },
  { title: "Regrow Hair", url: "/images/dashboard/hero/Condition-Navigation2@3x.png" },
  { title: "Feel Younger", url: "/images/dashboard/hero/Condition-Navigation3@3x.png" },
  { title: "EveryDay Health", url: "/images/dashboard/hero/Condition-Navigation4@3x.png" },
  { title: "Performance & Libido", url: "/images/dashboard/hero/Condition-Navigation5@3x.png" },
  { title: "Treat Menopause", url: "/images/dashboard/hero/Condition-Navigation6@3x.png" },
  { title: "Optimize Hormones", url: "/images/dashboard/hero/Condition-Navigation7@3x.png" },
];

const CARD_WIDTH = 338;
const CARD_GAP = 14;

export default function HeroCards() {
  const slideRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateNav = useCallback(() => {
    const el = slideRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!slideRef.current) return;
    const amount = CARD_WIDTH + CARD_GAP;
    slideRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop grid */}
      <div
        className="hero-cards-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        style={{
          gap: "clamp(8px, 1vw, 16px)",
          marginTop: "clamp(20px, 2.1vw, 40px)",
          width: "100%",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#F2EEE6",
              borderRadius: 10,
              padding: "clamp(4px, 0.3vw, 6px)",
            }}
            className="flex flex-col"
          >
            <div className="relative">
              <Image
                src={card.url}
                alt={card.title}
                width={326}
                height={369}
                style={{ width: "100%", height: "auto", aspectRatio: "326/369", borderRadius: 10, objectFit: "cover" }}
              />
              <span
                className="absolute font-bold text-white"
                style={{ top: "clamp(10px, 1vw, 20px)", left: "clamp(12px, 1.6vw, 30px)", fontSize: "clamp(14px, 1.93vw, 37px)", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1.1 }}
              >
                {(() => {
                  const spaceIndex = card.title.indexOf(" ");
                  if (spaceIndex === -1) return card.title;
                  return (
                    <>
                      {card.title.slice(0, spaceIndex)}
                      <br />
                      {card.title.slice(spaceIndex + 1)}
                    </>
                  );
                })()}
              </span>
            </div>
            <div className="flex gap-1 hero-card-buttons" style={{ paddingTop: "clamp(4px, 0.3vw, 6px)" }}>
              <Link
                href="#"
                style={{
                  height: "clamp(32px, 2.5vw, 48px)",
                  borderRadius: 6,
                  backgroundColor: "#20514C",
                  color: "white",
                  fontSize: "clamp(10px, 0.73vw, 14px)",
                  flex: 1,
                }}
                className="font-bold cursor-pointer flex items-center justify-center"
              >
                Get Started 
              </Link>
              <Link
                href="#"
                style={{
                  height: "clamp(32px, 2.5vw, 48px)",
                  borderRadius: 6,
                  backgroundColor: "white",
                  color: "#20514C",
                  border: "2px solid #20514C",
                  fontSize: "clamp(10px, 0.73vw, 14px)",
                  flex: 1,
                }}
                className="font-bold cursor-pointer flex items-center justify-center"
              >
                Learn More 
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile horizontal slide */}
      <div
        ref={slideRef}
        onScroll={updateNav}
        className="hero-cards-slide hide-scrollbar"
        style={{
          display: "none",
          gap: CARD_GAP,
          marginTop: 40,
          overflowX: "auto",
          scrollbarWidth: "none",
          marginLeft: "calc(var(--section-px) * -1)",
          marginRight: "calc(var(--section-px) * -1)",
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FAFAFA",
              borderRadius: 22,
              padding: 6,
              gap: 6,
              width: CARD_WIDTH,
              height: 438,
              flexShrink: 0,
              boxShadow: "0px 2.67px 33.39px 3.34px rgba(0,0,0,0.1)",
            }}
            className="flex flex-col"
          >
            {/* Image with gradient overlay */}
            <div className="relative" style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                src={card.url}
                alt={card.title}
                width={326}
                height={368}
                style={{ width: "100%", height: "auto", aspectRatio: "326/368", borderRadius: 10, objectFit: "cover" }}
              />
              {/* Subtle gradient overlay at top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 90,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)",
                  borderRadius: "10px 10px 0 0",
                  pointerEvents: "none",
                }}
              />
              {/* Overlay title */}
              <span
                className="absolute font-bold text-white"
                style={{
                  top: 18,
                  left: 18,
                  fontSize: 37,
                  fontWeight: 700,
                  fontFamily: "'Aeonick Pro', sans-serif",
                  lineHeight: 1.1,
                  textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                {(() => {
                  const spaceIndex = card.title.indexOf(" ");
                  if (spaceIndex === -1) return card.title;
                  return (
                    <>
                      {card.title.slice(0, spaceIndex)}
                      <br />
                      {card.title.slice(spaceIndex + 1)}
                    </>
                  );
                })()}
              </span>
            </div>
            {/* Buttons */}
            <div className="flex" style={{ gap: 14, paddingTop: 14 }}>
              <Link
                href="#"
                style={{
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#2F5B4E",
                  color: "white",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "'Aeonick Pro', sans-serif",
                  flex: 1,
                  textDecoration: "none",
                  padding: "0 20px",
                }}
                className="cursor-pointer flex items-center justify-center"
              >
                Get Started
              </Link>
              <Link
                href="#"
                style={{
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "transparent",
                  color: "#2F5B4E",
                  border: "1.5px solid #2F5B4E",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "'Aeonick Pro', sans-serif",
                  flex: 1,
                  textDecoration: "none",
                  padding: "0 20px",
                }}
                className="cursor-pointer flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile slide navigation buttons - bottom left */}
      <div
        className="hero-slide-nav"
        style={{
          display: "none",
          gap: 12,
          marginTop: 20,
          justifyContent: "flex-start",
        }}
      >
        <button
          onClick={() => scroll("left")}
          disabled={atStart}
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            border: "1.5px solid #2F5B4E",
            cursor: atStart ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 600,
            color: "#2F5B4E",
            opacity: atStart ? 0.35 : 1,
            transition: "opacity 0.2s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={atEnd}
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            border: "1.5px solid #2F5B4E",
            cursor: atEnd ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 600,
            color: "#2F5B4E",
            opacity: atEnd ? 0.35 : 1,
            transition: "opacity 0.2s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  );
}
