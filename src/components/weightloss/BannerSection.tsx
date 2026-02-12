import Link from "next/link";

export default function BannerSection() {
  return (
    <section
      className="w-full"
      style={{
        minHeight: "clamp(400px, 45.8vw, 880px)",
        backgroundImage: "url('/images/dashboard/banner/1925@3x.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: "clamp(100px, 13vw, 250px)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
        <p style={{ fontSize: "clamp(14px, 1.05vw, 20px)", color: "#202020", fontFamily: "'Aeonick Pro', sans-serif" }}>
          Join 100,0000+ Rejuve patients
        </p>
        <p style={{ fontSize: "clamp(28px, 3.75vw, 72px)", color: "black", fontFamily: "'Aeonick Pro', sans-serif", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
          Weight Loss, <br />Tailored To You.
        </p>
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(140px, 9vw, 173px)",
            height: "clamp(48px, 3.3vw, 63px)",
            borderRadius: 3,
            backgroundColor: "#20514C",
            color: "#F8F6F1",
            fontSize: "clamp(16px, 1.05vw, 20px)",
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: 30,
          }}
          className="font-bold"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
