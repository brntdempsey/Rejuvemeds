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
    <section className="w-full" style={{ marginBottom: 52 }}>
      <p
        style={{
          paddingTop: 100,
          paddingLeft: "var(--section-px)",
          fontSize: "clamp(40px, 3.75vw, 72px)",
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
          fontSize: "clamp(14px, 1.05vw, 20px)",
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
        }}
      >
        Doctor-prescribed treatment based on the latest medical research,
        <br />
        tailored to your health needs.
      </p>
      <div
        className="flex overflow-x-auto hide-scrollbar"
        style={{
          marginTop: 50,
          paddingLeft: "var(--section-px)",
          paddingRight: 50,
          gap: 16,
        }}
      >
        {members.map((member, index) => (
          <div
            key={index}
            style={{
              width: "clamp(320px, 26.8vw, 514px)",
              minHeight: 600,
              backgroundColor: "#F2EEE6",
              borderRadius: 1,
              padding: 20,
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
                  fontSize: 14,
                  fontFamily: "'Aeonick Pro', sans-serif",
                  width: 164,
                  height: 41,
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
                fontSize: 14,
                color: "#202020",
                fontFamily: "'Aeonick Pro', sans-serif",
                marginTop: 16,
                textAlign: "center",
                lineHeight: 1.5,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              {member.quote}
            </p>
            <p
              style={{
                fontSize: 14,
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
          fontSize: 16,
          color: "#202020",
          fontFamily: "'Aeonick Pro', sans-serif",
        }}
      >
        All Verified Customers Review
      </p>
    </section>
  );
}
