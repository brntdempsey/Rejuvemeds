import Link from "next/link";
import Image from "next/image";

export default function ExpertCare() {
  return (
    <section
      className="w-full flex justify-between"
      style={{
        height: 661,
        backgroundImage: "url('/images/dashboard/image 91.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: 204, paddingLeft: 245 }}>
        <p style={{ fontSize: 72, color: "white", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1 }} className="font-bold">
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
          width: 410,
          height: 533,
          backgroundColor: "#F2EEE6",
          marginTop: 64,
          marginRight: 250,
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
