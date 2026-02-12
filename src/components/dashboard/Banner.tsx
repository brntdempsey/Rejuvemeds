import Image from "next/image";

const items = [
  { text: "Physician-Led Programs", icon: "/images/dashboard/banner/brand7.svg" },
  { text: "FDA-Registered Labs", icon: "/images/dashboard/banner/brand6.svg" },
  { text: "Compounded in the USAs", icon: "/images/dashboard/banner/brand5.svg" },
  { text: "Customized to your needs", icon: "/images/dashboard/banner/brand4.svg" },
  { text: "Free Delivery", icon: "/images/dashboard/banner/brand3.svg" },
  { text: "1000+ Members", icon: "/images/dashboard/banner/brand2.svg" },
  { text: "No Membership Fees", icon: "/images/dashboard/banner/brand1.svg" },
];

export default function Banner() {
  return (
    <section className="w-full overflow-hidden db-banner" style={{ marginTop: "clamp(40px, 5.2vw, 100px)", paddingTop: "clamp(16px, 1.6vw, 30px)", paddingBottom: "clamp(16px, 1.6vw, 30px)", borderTop: "2px solid #20514C" }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center shrink-0"
            style={{ paddingRight: "clamp(40px, 5.2vw, 100px)" }}
          >
            <Image src={item.icon} alt={item.text} width={37} height={38} style={{ width: "clamp(24px, 1.9vw, 37px)", height: "auto" }} />
            <span
              style={{ fontSize: "clamp(11px, 0.73vw, 14px)", color: "#20514C", fontFamily: "'Aeonick Pro', sans-serif", marginLeft: 8 }}
              className="font-medium"
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
