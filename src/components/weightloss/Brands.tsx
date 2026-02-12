import Image from "next/image";

const brands = [
  { name: "Layer1", src: "/images/dashboard/brand/layer1.png" },
  { name: "Bloomberg", src: "/images/dashboard/brand/Bloomberg Logo.png" },
  { name: "Fast Company", src: "/images/dashboard/brand/Fast Company Logo.png" },
  { name: "Fortune", src: "/images/dashboard/brand/Fortune Magazine Logo 2016.png" },
  { name: "Forbes", src: "/images/dashboard/brand/Forbes Logo.png" },
];

export default function Brands() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ minHeight: "clamp(80px, 8.3vw, 160px)", paddingTop: "clamp(24px, 2.6vw, 50px)", paddingBottom: "clamp(24px, 2.6vw, 50px)", paddingRight: "var(--section-px)", borderTop: "3px solid #20514C", borderBottom: "3px solid #20514C" }}
    >
      <div className="flex items-center justify-between flex-wrap" style={{ width: "100%", paddingLeft: "var(--section-px)", gap: "clamp(12px, 1.6vw, 24px)" }}>
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            width={150}
            height={40}
            style={{ objectFit: "contain", width: "clamp(80px, 7.8vw, 150px)", height: "auto" }}
          />
        ))}
      </div>
    </section>
  );
}
