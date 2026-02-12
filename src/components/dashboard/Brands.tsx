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
      style={{ height: 160, paddingTop: 50, paddingBottom: 50, paddingRight: 200, borderTop: "3px solid #20514C", borderBottom: "3px solid #20514C" }}
    >
      <div className="flex items-center justify-between" style={{ width: "100%", paddingLeft: 245 }}>
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>
    </section>
  );
}
