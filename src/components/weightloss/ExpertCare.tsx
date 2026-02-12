import Link from "next/link";
import Image from "next/image";

export default function ExpertCare() {
  return (
    <section
      className="w-full flex justify-between flex-wrap"
      style={{
        minHeight: "clamp(400px, 34.4vw, 661px)",
        backgroundImage: "url('/images/dashboard/image 91.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: "clamp(50px, 10.6vw, 204px)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
        <p style={{ fontSize: "clamp(28px, 3.75vw, 72px)", color: "white", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1 }} className="font-bold">
          Expert Care,<br />Transparent Pricing
        </p>
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(170px, 11.1vw, 213px)",
            height: 52,
            borderRadius: 6,
            backgroundColor: "#20514C",
            color: "#F8F6F1",
            fontSize: "clamp(16px, 1.05vw, 20px)",
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: "clamp(24px, 2.6vw, 50px)",
          }}
        >
          Check Eligibility
        </Link>
      </div>
      <div
        style={{
          width: "clamp(240px, 21.4vw, 410px)",
          height: "clamp(320px, 27.8vw, 533px)",
          backgroundColor: "#F2EEE6",
          marginTop: "clamp(24px, 3.3vw, 64px)",
          marginRight: "var(--section-px)",
          marginLeft: "var(--section-px)",
          marginBottom: "clamp(24px, 1.6vw, 0px)",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ paddingTop: "clamp(30px, 2.9vw, 55px)", paddingLeft: "clamp(60px, 6vw, 116px)" }}>
          <Image
            src="/images/dashboard/GlassVialPlaceholder 2.png"
            alt="Glass Vial"
            width={174}
            height={326}
            style={{ objectFit: "contain", width: "clamp(120px, 9.1vw, 174px)", height: "auto" }}
          />
        </div>
        <div style={{ paddingBottom: "clamp(30px, 2.9vw, 55px)", paddingLeft: "clamp(60px, 6.6vw, 126px)" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#7B876F",
              color: "#F8F6F1",
              fontSize: "clamp(16px, 1.05vw, 20px)",
              fontFamily: "'Aeonick Pro', sans-serif",
              paddingLeft: 20,
              paddingRight: 20,
              height: 52,
              borderRadius: 200,
            }}
          >
            $299/month
          </span>
        </div>
      </div>
    </section>
  );
}
