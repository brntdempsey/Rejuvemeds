import Image from "next/image";
import Link from "next/link";

const products = [
  { title: "Semaglutide", type: "Oral" as const, price: "$299/mo", url: "/images/weightloss/treatments/GlassVialPlaceholder-2@2x.png" },
  { title: "Trizepatide", type: "Oral" as const, price: "$299/mo", url: "/images/weightloss/treatments/GlassVialPlaceholder-21@2x.png" },
  { title: "Compound GLP-1", type: "Oral" as const, price: "$299/mo", url: "/images/weightloss/treatments/GlassVialPlaceholder-3@2x.png" },
  { title: "Wegovy", type: "Injection" as const, price: "$299/mo", url: "/images/weightloss/treatments/GlassVialPlaceholder-22@2x.png" },
  { title: "Ozempic", type: "Injection" as const, price: "$299/mo", url: "/images/weightloss/treatments/GlassVialPlaceholder-22@2x.png" },
  { title: "Zepbound", type: "Injection" as const, price: "$299/mo", url: "/images/weightloss/treatments/GlassVialPlaceholder-31@2x.png" },
];

const badgeColors: Record<string, string> = {
  Oral: "#6F7E66",
  Injection: "#5D6D75",
};

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <div
      className="wl-product-card"
      style={{
        backgroundColor: "#F7F7F5",
        border: "1px solid #E2E2DE",
        borderRadius: 20,
        padding: 28,
        boxShadow: "0px 6px 18px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "pointer",
      }}
    >
      {/* Badge */}
      <span
        style={{
          backgroundColor: badgeColors[product.type] || "#6F7E66",
          color: "white",
          fontSize: 13,
          fontFamily: "'Aeonick Pro', sans-serif",
          fontWeight: 500,
          padding: "6px 16px",
          borderRadius: 999,
          height: 30,
          display: "inline-flex",
          alignItems: "center",
          width: "fit-content",
          lineHeight: 1,
        }}
      >
        {product.type}
      </span>

      {/* Product title */}
      <h3
        style={{
          fontSize: 26,
          fontWeight: 600,
          color: "#5E6B55",
          fontFamily: "'Aeonick Pro', sans-serif",
          letterSpacing: "-0.3px",
          lineHeight: 1.1,
        }}
      >
        {product.title}
      </h3>

      {/* Pricing */}
      <p
        style={{
          fontSize: 16,
          color: "#444444",
          fontFamily: "'Aeonick Pro', sans-serif",
          fontWeight: 400,
        }}
      >
        Starting at {product.price}
      </p>

      {/* Image container */}
      <div
        style={{
          backgroundColor: "#E9E9E6",
          borderRadius: 18,
          height: 240,
          padding: 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={product.url}
          alt={product.title}
          width={180}
          height={200}
          style={{
            objectFit: "contain",
            height: "75%",
            width: "auto",
          }}
        />
        {/* Soft grounded shadow */}
        <div
          style={{
            width: "60%",
            height: 8,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)",
            marginTop: 12,
          }}
        />
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section
      style={{
        backgroundColor: "#ECECE8",
        paddingTop: 90,
        paddingBottom: 90,
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: "clamp(30px, 2.3vw, 44px)",
            fontWeight: 700,
            color: "#1F1F1F",
            fontFamily: "'Aeonick Pro', sans-serif",
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}
        >
          Medical Weight Loss Treatments
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#6B6B6B",
            fontFamily: "'Aeonick Pro', sans-serif",
            lineHeight: 1.6,
            maxWidth: 680,
            marginTop: 12,
          }}
        >
          Discover the power of GLP-1 and GIP medications to support your weight loss
          journey. Start today and move towards a healthier, more fulfilling life.
        </p>

        {/* Grid: 3 columns, 2 rows */}
        <div
          className="wl-products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            marginTop: 56,
          }}
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#2F4F3E",
              color: "white",
              padding: "14px 24px",
              borderRadius: 8,
              fontSize: 16,
              fontFamily: "'Aeonick Pro', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
            }}
            className="cursor-pointer"
          >
            Browse Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
