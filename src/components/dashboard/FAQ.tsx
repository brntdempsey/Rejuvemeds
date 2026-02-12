"use client";

import { useState } from "react";

const faqs = [
  { question: "What if my insurance doesn't cover it?" },
  { question: "What if my insurance doesn't cover it?" },
  { question: "What if my insurance doesn't cover it?" },
  { question: "What if my insurance doesn't cover it?" },
  { question: "What if my insurance doesn't cover it?" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ paddingTop: 100, paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", paddingBottom: 100 }}>
      <h2
        style={{
          fontSize: "clamp(32px, 2.5vw, 48px)",
          fontFamily: "'Aeonick Pro', sans-serif",
          lineHeight: 1,
          color: "#1A1A1A",
        }}
        className="font-bold"
      >
        Frequently Asked Questions
      </h2>
      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              backgroundColor: "#F2EEE6",
              borderRadius: 10,
              padding: "28px 40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontFamily: "'Aeonick Pro', sans-serif",
                color: "#1A1A1A",
              }}
            >
              {faq.question}
            </span>
            <span
              style={{
                fontSize: 24,
                color: "#1A1A1A",
                fontWeight: 300,
                flexShrink: 0,
                marginLeft: 20,
              }}
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
