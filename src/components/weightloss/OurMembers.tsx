import Image from "next/image";

const members = [
  {
    image: "/images/dashboard/ourmembers/1.png",
    badge: "36 lbs in 4 months",
    quote:
      "\u201CBetween work, kids, and everything else, I had zero energy left for myself. I started at 198 pounds and didn\u2019t think real change was possible without extreme dieting.\u201D",
    name: "Maggi S.",
  },
  {
    image: "/images/dashboard/ourmembers/2.png",
    badge: "36 lbs in 4 months",
    quote:
      "\u201CMy doctor told me it was time to make a change. I started at 235 pounds, focused on improving my health, and didn\u2019t obsess over the scale.\u201D",
    name: "Mark P.",
  },
  {
    image: "/images/dashboard/ourmembers/3.png",
    badge: "36 lbs in 4 months",
    quote:
      "\u201CMy doctor told me it was time to make a change. I started at 235 pounds, focused on improving my health, and didn\u2019t obsess over the scale. Five months later, I\u2019m down 34 pounds, my energy is...\u201D",
    name: "Jackson D.",
  },
  {
    image: "/images/dashboard/ourmembers/1.png",
    badge: "36 lbs in 4 months",
    quote:
      "\u201CI was skeptical at first, but the results speak for themselves. The personalized approach made all the difference.\u201D",
    name: "Sarah L.",
  },
];

export default function OurMembers() {
  return (
    <section className="w-full" style={{ marginBottom: "clamp(24px, 2.7vw, 52px)" }}>
      <p
        style={{
          paddingTop: "clamp(50px, 5.2vw, 100px)",
          paddingLeft: "var(--section-px)",
          fontSize: "clamp(28px, 3.75vw, 72px)",
          color: "black",
          fontFamily: "'Aeonick Pro', sans-serif",
        }}
        className="font-bold"
      >
        Our Members Love Us
      </p>
      <p
        style={{
          paddingTop: 16,
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          fontSize: "clamp(13px, 1.05vw, 20px)",
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
        }}
      >
        Doctor-prescribed treatment based on the latest medical research,
        tailored to your health needs.
      </p>
      <div
        className="flex overflow-x-auto hide-scrollbar"
        style={{
          marginTop: "clamp(24px, 2.6vw, 50px)",
          paddingLeft: "var(--section-px)",
          paddingRight: "clamp(16px, 2.6vw, 50px)",
          gap: "clamp(10px, 0.83vw, 16px)",
        }}
      >
        {members.map((member, index) => (
          <div
            key={index}
            style={{
              width: "clamp(260px, 26.8vw, 514px)",
              minHeight: "clamp(420px, 31.3vw, 600px)",
              backgroundColor: "#F2EEE6",
              borderRadius: 1,
              padding: "clamp(12px, 1vw, 20px)",
            }}
            className="flex flex-col shrink-0"
          >
            <div className="relative">
              <Image
                src={member.image}
                alt={member.name}
                width={450}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1/1",
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
                className="flex items-center justify-center"
              >
                <span style={{ color: "#20514C", fontSize: 16 }}>&#9654;</span>
              </div>
            </div>
            <div
              style={{
                marginTop: 16,
                display: "inline-flex",
                alignSelf: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "#20514C",
                  color: "white",
                  fontSize: "clamp(12px, 0.73vw, 14px)",
                  fontFamily: "'Aeonick Pro', sans-serif",
                  width: "clamp(140px, 8.5vw, 164px)",
                  height: "clamp(34px, 2.1vw, 41px)",
                  borderRadius: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {member.badge}
              </span>
            </div>
            <p
              style={{
                fontSize: "clamp(12px, 0.73vw, 14px)",
                color: "#202020",
                fontFamily: "'Aeonick Pro', sans-serif",
                marginTop: 16,
                textAlign: "center",
                lineHeight: 1.5,
                paddingLeft: "clamp(8px, 0.83vw, 16px)",
                paddingRight: "clamp(8px, 0.83vw, 16px)",
              }}
            >
              {member.quote}
            </p>
            <p
              style={{
                fontSize: "clamp(12px, 0.73vw, 14px)",
                color: "#202020",
                fontFamily: "'Aeonick Pro', sans-serif",
                marginTop: 10,
                textAlign: "center",
              }}
              className="font-bold"
            >
              {member.name}
            </p>
          </div>
        ))}
      </div>
      <p
        style={{
          paddingLeft: "var(--section-px)",
          paddingTop: 30,
          fontSize: "clamp(13px, 0.83vw, 16px)",
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
        }}
      >
        All Verified Customers Review
      </p>
    </section>
  );
}
