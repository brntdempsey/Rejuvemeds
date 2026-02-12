import Link from "next/link";

export default function HighFive() {
  return (
    <section
      className="w-full"
      style={{
        minHeight: "clamp(350px, 42.4vw, 1014px)",
        backgroundImage: "url('/images/dashboard/2_women_giving_each_other_a_high_five__slow_camera_pan 1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: "clamp(60px, 12.8vw, 245px)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
        <p style={{ fontSize: "clamp(28px, 3.75vw, 72px)", color: "black", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1 }} className="font-bold">
          Feel Better, Look Better, Live Better.
        </p>
        <p style={{ fontSize: "clamp(13px, 1.05vw, 20px)", color: "#202020", fontFamily: "'Aeonick Pro', sans-serif", marginTop: 20 }}>
          Personalized treatments for weight loss, hair loss, sexual health, and hormone optimization, delivered discreetly to your door.
        </p>
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(170px, 11.1vw, 213px)",
            height: "clamp(48px, 3.3vw, 63px)",
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
    </section>
  );
}
