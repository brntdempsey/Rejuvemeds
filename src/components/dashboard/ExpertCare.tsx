import Link from "next/link";
import Image from "next/image";

export default function ExpertCare() {
  return (
    <section
      className="w-full flex justify-between flex-wrap"
      style={{
        minHeight: 661,
        backgroundImage: "url('/images/dashboard/image 91.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: "clamp(100px, 10.6vw, 204px)", paddingLeft: "var(--section-px)" }}>
        <p style={{ fontSize: "clamp(36px, 3.75vw, 72px)", color: "white", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1 }} className="font-bold">
          Expert Care,<br />Transparent Pricing
        </p>
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 213,
            height: 52,
            borderRadius: 6,
            backgroundColor: "#20514C",
            color: "#F8F6F1",
            fontSize: 20,
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: 50,
          }}
        >
          Check Eligibility
        </Link>
      </div>
      <div
        style={{
          width: "clamp(300px, 21.4vw, 410px)",
          height: "clamp(400px, 27.8vw, 533px)",
          backgroundColor: "#F2EEE6",
          marginTop: 64,
          marginRight: "var(--section-px)",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ paddingTop: 55, paddingLeft: 116 }}>
          <Image
            src="/images/dashboard/GlassVialPlaceholder 2.png"
            alt="Glass Vial"
            width={174}
            height={326}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ paddingBottom: 55, paddingLeft: 126 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#7B876F",
              color: "#F8F6F1",
              fontSize: 20,
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
