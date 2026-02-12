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
    <section className="w-full" style={{ paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", paddingBottom: "clamp(50px, 5.2vw, 100px)" }}>
      <p style={{ paddingTop: "clamp(50px, 5.2vw, 100px)", fontSize: "clamp(28px, 3.75vw, 72px)", color: "black", fontFamily: "'Aeonick Pro', sans-serif" }} className="font-bold">
        Getting Started is Easy.
      </p>
      <p style={{ fontSize: "clamp(14px, 1.56vw, 30px)", color: "#202020", fontFamily: "'Aeonick Pro', sans-serif" }}>
        Our seamless process connects you to real providers from the comfort of home.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 1vw, 20px)", marginTop: "clamp(24px, 2.6vw, 50px)" }}>
        {steps.map((step) => (
          <div
            key={step.number}
            className="getting-started-step"
            style={{
              backgroundColor: "#F2EEE6",
              borderRadius: 10,
              padding: "clamp(20px, 2.1vw, 40px) clamp(20px, 2.6vw, 50px)",
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(16px, 1.6vw, 30px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(48px, 7.8vw, 150px)",
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
                  fontSize: "clamp(18px, 1.67vw, 32px)",
                  color: "black",
                  fontFamily: "'Aeonick Pro', sans-serif",
                }}
                className="font-bold"
              >
                {step.title}
              </p>
              <p
                style={{
                  fontSize: "clamp(13px, 1.05vw, 20px)",
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
