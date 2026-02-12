"use client";

import { useRef, useEffect } from "react";
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
const CARD_WIDTH = 462; // 438 + 24 gap
const SET_WIDTH = products.length * CARD_WIDTH;

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = SET_WIDTH;

    const handleScroll = () => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft += SET_WIDTH;
      } else if (el.scrollLeft >= SET_WIDTH * 2) {
        el.scrollLeft -= SET_WIDTH;
      }
    };

    el.addEventListener("scrollend", handleScroll);
    return () => el.removeEventListener("scrollend", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        height: 748,
        backgroundColor: "#FAFAFA",
        paddingTop: 100,
        position: "relative",
      }}
    >
      <h2
        style={{
          paddingLeft: 245,
          fontSize: 48,
          fontFamily: "'Aeonick Pro', sans-serif",
          lineHeight: 1,
          color: "#1A1A1A",
        }}
        className="font-bold"
      >
        Products
      </h2>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            width: 48,
            height: 48,
            borderRadius: 999,
            border: "none",
            backgroundColor: "#20514C",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            zIndex: 10,
          }}
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            width: 48,
            height: 48,
            borderRadius: 999,
            border: "none",
            backgroundColor: "#20514C",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            zIndex: 10,
          }}
        >
          →
        </button>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 24,
          marginTop: 40,
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingRight: 245,
        }}
      >
        {repeatedProducts.map((product, index) => (
          <div
            key={index}
            style={{
              width: 438,
              height: 548,
              backgroundColor: "#F2EEE6",
              borderRadius: 10,
              padding: 6,
              flexShrink: 0,
            }}
            className="flex flex-col"
          >
            <div className="relative" style={{ width: 426, height: 478, borderRadius: 6, background: product.gradient, paddingTop: 150, paddingLeft: 49 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image
                  src={product.url}
                  alt={product.title}
                  width={338}
                  height={238}
                  style={{
                    width: 338,
                    height: 238,
                    objectFit: "contain",
                  }}
                />
                <Image
                  src="/images/dashboard/products/shadow.png"
                  alt=""
                  width={211}
                  height={40}
                  style={{
                    marginTop: 24,
                    objectFit: "contain",
                  }}
                />
              </div>
              <span
                className="absolute font-bold text-white"
                style={{
                  top: 20,
                  left: 30,
                  fontSize: 37,
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
                  width: 210,
                  height: 52,
                  borderRadius: 6,
                  backgroundColor: "#20514C",
                  color: "white",
                  fontSize: 14,
                }}
                className="font-bold cursor-pointer flex items-center justify-center"
              >
                Get Started &nbsp;→
              </Link>
              <Link
                href="#"
                style={{
                  width: 210,
                  height: 52,
                  borderRadius: 6,
                  backgroundColor: "white",
                  color: "#20514C",
                  border: "3px solid #20514C",
                  fontSize: 14,
                }}
                className="font-bold cursor-pointer flex items-center justify-center"
              >
                Learn More &nbsp;→
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
