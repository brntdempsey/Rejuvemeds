"use client";

const reviews = [
  {
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
  {
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
  {
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
  {
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
  {
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
  {
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
];

const Stars = () => (
  <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 12 }}>
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ color: "#20514C", fontSize: "clamp(20px, 1.5vw, 28px)" }}>★</span>
    ))}
  </div>
);

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        backgroundColor: "#F2EEE6",
        borderRadius: 2,
        padding: "clamp(16px, 1.6vw, 30px) clamp(16px, 1.25vw, 24px)",
        flexShrink: 0,
        width: "clamp(280px, 35.5vw, 882px)",
        minHeight: "clamp(200px, 14.6vw, 280px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span
        style={{
          backgroundColor: "#20514C",
          color: "white",
          fontSize: "clamp(12px, 0.73vw, 14px)",
          fontFamily: "'Aeonick Pro', sans-serif",
          paddingLeft: 20,
          paddingRight: 20,
          height: 36,
          borderRadius: 20,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {review.badge}
      </span>
      <p
        style={{
          fontSize: "clamp(12px, 0.78vw, 15px)",
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
          marginTop: "clamp(12px, 1.05vw, 20px)",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        {review.quote}
      </p>
      <p
        style={{
          fontSize: "clamp(12px, 0.78vw, 15px)",
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
          marginTop: 12,
          textAlign: "center",
        }}
        className="font-bold"
      >
        {review.name}
      </p>
      <Stars />
    </div>
  );
}

export default function OurMembersLoveUs() {
  const topRow = reviews.slice(0, 3);
  const bottomRow = reviews.slice(3, 6);

  return (
    <div style={{ paddingBottom: "clamp(30px, 3.1vw, 60px)" }}>
      <section style={{ paddingTop: "clamp(50px, 5.2vw, 100px)", paddingLeft: "var(--section-px)", paddingBottom: "clamp(40px, 4.2vw, 80px)" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 2.5vw, 48px)",
            fontFamily: "'Aeonick Pro', sans-serif",
            lineHeight: 1,
            color: "#1A1A1A",
          }}
          className="font-bold"
        >
          Our Members Love Us
        </h2>
        <p
          style={{
            fontSize: "clamp(13px, 0.83vw, 16px)",
            color: "#202020",
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: 16,
            lineHeight: 1.5,
          }}
        >
          Doctor-prescribed treatment based on the latest medical research,
          tailored to your health needs.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 0.83vw, 16px)",
          marginTop: "clamp(20px, 2.1vw, 40px)",
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingRight: "clamp(16px, 2.6vw, 50px)",
        }}
      >
        {topRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 0.83vw, 16px)",
          marginTop: "clamp(10px, 0.83vw, 16px)",
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingRight: "clamp(16px, 2.6vw, 50px)",
        }}
      >
        {bottomRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div style={{ paddingLeft: "var(--section-px)" }}>
        <p
          style={{
            fontSize: "clamp(12px, 0.73vw, 14px)",
            color: "#202020",
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: 30,
            fontStyle: "italic",
          }}
        >
          All Verified Customers Review
        </p>
        <div
          style={{
            marginTop: 20,
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#20514C",
            borderRadius: 6,
            padding: "10px 20px",
            gap: 10,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "clamp(12px, 0.73vw, 14px)",
              fontFamily: "'Aeonick Pro', sans-serif",
            }}
            className="font-bold"
          >
            5.0 Rating
          </span>
          <span style={{ color: "#FFD700", fontSize: 16 }}>★</span>
          <span
            style={{
              color: "white",
              fontSize: "clamp(12px, 0.73vw, 14px)",
              fontFamily: "'Aeonick Pro', sans-serif",
            }}
            className="font-bold"
          >
            Trustpilot
          </span>
        </div>
      </div>
    </div>
  );
}
