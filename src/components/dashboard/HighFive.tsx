import Link from "next/link";

export default function HighFive() {
  return (
    <section
      className="w-full"
      style={{
        minHeight: "clamp(600px, 42.4vw, 1014px)",
        backgroundImage: "url('/images/dashboard/2_women_giving_each_other_a_high_five__slow_camera_pan 1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ paddingTop: "clamp(100px, 12.8vw, 245px)", paddingLeft: "var(--section-px)" }}>
        <p style={{ fontSize: "clamp(36px, 3.75vw, 72px)", color: "black", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1 }} className="font-bold">
          Feel Better, Look<br />Better, Live Better.
        </p>
        <p style={{ fontSize: "clamp(14px, 1.05vw, 20px)", color: "#202020", fontFamily: "'Aeonick Pro', sans-serif", marginTop: 20 }}>
          Personalized treatments for weight loss, hair loss, sexual health, and<br />hormone optimization, delivered discreetly to your door.
        </p>
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 213,
            height: 63,
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
    </section>
  );
}
