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
    <section className="w-full" style={{ paddingLeft: 245, paddingRight: 245, paddingBottom:100 }}>
      <p style={{ paddingTop: 100, fontSize: 72, color: "black", fontFamily: "'Aeonick Pro', sans-serif" }} className="font-bold">
        Getting Started is Easy.
      </p>
      <p style={{ fontSize: 30, color: "#202020", fontFamily: "'Aeonick Pro', sans-serif" }}>
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
                fontSize: 150,
                color: "#20514C",
                fontFamily: "'Aeonick Pro', sans-serif",
                lineHeight: 0.85
              }}
              className="font-bold"
            >
              {step.number}
            </span>
            <div style={{ paddingTop: 10 }}>
              <p
                style={{
                  fontSize: 32,
                  color: "black",
                  fontFamily: "'Aeonick Pro', sans-serif",
                }}
                className="font-bold"
              >
                {step.title}
              </p>
              <p
                style={{
                  fontSize: 20,
                  color: "#202020",
                  fontFamily: "'Aeonick Pro', sans-serif",
                  marginTop: 8,
                  paddingRight:150,
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
