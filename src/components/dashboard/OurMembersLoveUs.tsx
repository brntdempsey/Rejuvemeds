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
      <span key={i} style={{ color: "#20514C", fontSize: 28 }}>★</span>
    ))}
  </div>
);

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        backgroundColor: "#F2EEE6",
        borderRadius: 2,
        padding: "30px 24px",
        flexShrink: 0,
        width: 682,
        height: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span
        style={{
          backgroundColor: "#20514C",
          color: "white",
          fontSize: 14,
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
          fontSize: 15,
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
          marginTop: 20,
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        {review.quote}
      </p>
      <p
        style={{
          fontSize: 15,
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
    <div style={{paddingBottom:60}}>
      <section style={{ paddingTop: 100, paddingLeft: 245, paddingBottom: 80 }}>
        <h2
          style={{
            fontSize: 48,
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
            fontSize: 16,
            color: "#202020",
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: 16,
            lineHeight: 1.5,
          }}
        >
          Doctor-prescribed treatment based on the latest medical research,
          <br />
          tailored to your health needs.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 40,
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingRight: 50,
        }}
      >
        {topRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 16,
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingRight: 50,
        }}
      >
        {bottomRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div style={{paddingLeft:245}}>
        <p
          style={{
            fontSize: 14,
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
              fontSize: 14,
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
              fontSize: 14,
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
