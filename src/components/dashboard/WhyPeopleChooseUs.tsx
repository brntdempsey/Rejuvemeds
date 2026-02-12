import Image from "next/image";

const cards = [
  {
    title: "Safe, Clean, and Simple",
    description:
      "Your health and well-being are our highest priority. Medications are delivered from state-licensed pharmacies in our network, straight to your door when you need them.",
    image: "/images/dashboard/whypeoplechooseus/image 51.png",
  },
  {
    title: "Access to Licensed Providers",
    description:
      "Our network of leading medical providers designs personalized treatment options to optimize your health and wellness journey.",
    image: "/images/dashboard/whypeoplechooseus/image 52.png",
  },
  {
    title: "Ongoing Support",
    description:
      "A dedicated care team and wellness specialists are here to guide you every step of the way, ensuring smooth, continuous support with no added cost.",
    image: "/images/dashboard/whypeoplechooseus/image 54.png",
  },
];

export default function WhyPeopleChooseUs() {
  return (
    <section style={{ paddingTop: 100, paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)", paddingBottom: 50, backgroundColor: "#FAFAFA" }}>
      <h2
        style={{
          fontSize: "clamp(32px, 2.5vw, 48px)",
          fontFamily: "'Aeonick Pro', sans-serif",
          lineHeight: 1,
          color: "#1A1A1A",
        }}
        className="font-bold"
      >
        Why People Choose Us
      </h2>
      <p
        style={{
          fontSize: 16,
          fontFamily: "'Aeonick Pro', sans-serif",
          color: "#1A1A1A",
          marginTop: 16,
          maxWidth: 340,
          lineHeight: 1.4,
        }}
      >
        Doctor-prescribed treatment based on the latest medical
        research, tailored to your health needs.
      </p>
      <div className="flex flex-wrap" style={{ marginTop: 40, gap: 24 }}>
        {cards.map((card, index) => (
          <div key={index} style={{ flex: "1 1 300px", maxWidth: 460 }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "460/539",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: "#F2EEE6",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={460}
                height={698}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <h3
              style={{
                fontSize: 20,
                fontFamily: "'Aeonick Pro', sans-serif",
                color: "#1A1A1A",
                marginTop: 20,
              }}
              className="font-bold"
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                fontFamily: "'Aeonick Pro', sans-serif",
                color: "#1A1A1A",
                marginTop: 8,
                lineHeight: 1.5,
                maxWidth: 320,
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
