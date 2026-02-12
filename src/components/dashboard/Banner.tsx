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
    <section className="w-full overflow-hidden" style={{ marginTop: 100, paddingTop:30, paddingBottom: 30, borderTop: "2px solid #20514C" , backgroundColor:'#F2EEE6'}}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center shrink-0"
            style={{ paddingRight: 100 }}
          >
            <Image src={item.icon} alt={item.text} width={37} height={38} />
            <span
              style={{ fontSize: 14, color: "#20514C", fontFamily: "'Aeonick Pro', sans-serif", marginLeft: 8 }}
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
