import Link from "next/link";

export default function BannerSection() {
  return (
    <section
      className="w-full"
      style={{
        height: 680,
        backgroundImage: "url('/images/dashboard/banner/1925@3x.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: 50, paddingLeft: 245 }}>
        <p style={{ fontSize: 20, color: "#202020", fontFamily: "'Aeonick Pro', sans-serif" }}>
          Experience an average of
        </p>
        <p style={{ fontSize: 72, color: "black", fontFamily: "'Aeonick Pro', sans-serif", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
          15% weight loss<br />in 3 months
        </p>
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 173,
            height: 63,
            borderRadius: 3,
            backgroundColor: "#20514C",
            color: "#F8F6F1",
            fontSize: 20,
            fontFamily: "'Aeonick Pro', sans-serif",
            marginTop: 30,
          }}
          className="font-bold"
        >
          Lose Weight
        </Link>
      </div>
    </section>
  );
}
