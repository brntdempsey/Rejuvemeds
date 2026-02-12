const steps = [
  {
    number: "1",
    title: "Online Consultation",
    description:
      "Complete a quick online assessment so we can understand your goals and symptoms. A licensed provider reviews your information and determines whether treatment is appropriate, then recommends a plan tailored to you.",
  },
  {
    number: "2",
    title: "Get Prescribed",
    description:
      "If approved, your provider issues a prescription and outlines exactly how to get started. You\u2019ll receive clear guidance and ongoing support, so your care feels straightforward, not overwhelming.",
  },
  {
    number: "3",
    title: "Get Your Rx",
    description:
      "Your prescription ships discreetly to your door, with easy-to-follow instructions. From there, you\u2019ll stay on track with provider-guided check-ins and adjustments as needed, so you can feel your best over time.",
  },
];

export default function GettingStarted() {
  return (
    <section className="w-full" style={{ paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", paddingBottom: 100 }}>
      <p style={{ paddingTop: 100, fontSize: "clamp(40px, 3.75vw, 72px)", color: "black", fontFamily: "'Aeonick Pro', sans-serif" }} className="font-bold">
        Getting Started is Easy.
      </p>
      <p style={{ fontSize: "clamp(18px, 1.56vw, 30px)", color: "#202020", fontFamily: "'Aeonick Pro', sans-serif" }}>
        Our seamless process connects you to real providers<br />from the comfort of home.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 50 }}>
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              backgroundColor: "#F2EEE6",
              borderRadius: 10,
              padding: "40px 50px",
              display: "flex",
              alignItems: "flex-start",
              gap: 30,
            }}
          >
            <span
              style={{
                fontSize: "clamp(80px, 7.8vw, 150px)",
                color: "#20514C",
                fontFamily: "'Aeonick Pro', sans-serif",
                lineHeight: 0.85,
                flexShrink: 0,
              }}
              className="font-bold"
            >
              {step.number}
            </span>
            <div style={{ paddingTop: 10, flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "clamp(22px, 1.67vw, 32px)",
                  color: "black",
                  fontFamily: "'Aeonick Pro', sans-serif",
                }}
                className="font-bold"
              >
                {step.title}
              </p>
              <p
                style={{
                  fontSize: "clamp(14px, 1.05vw, 20px)",
                  color: "#202020",
                  fontFamily: "'Aeonick Pro', sans-serif",
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
