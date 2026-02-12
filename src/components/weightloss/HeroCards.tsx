import Image from "next/image";
import Link from "next/link";

const cards = [
  { title: "Lose Weight", url: "/images/dashboard/hero/Condition-Navigation@3x.png" },
  { title: "Look Better", url: "/images/dashboard/hero/Condition-Navigation1@3x.png" },
  { title: "Regrow Hair", url: "/images/dashboard/hero/Condition-Navigation2@3x.png" },
  { title: "Feel Younger", url: "/images/dashboard/hero/Condition-Navigation3@3x.png" },
  { title: "EveryDay Health", url: "/images/dashboard/hero/Condition-Navigation4@3x.png" },
  { title: "Performance & Libido", url: "/images/dashboard/hero/Condition-Navigation5@3x.png" },
  { title: "Treat Menopause", url: "/images/dashboard/hero/Condition-Navigation6@3x.png" },
  { title: "Optimize Hormones", url: "/images/dashboard/hero/Condition-Navigation7@3x.png" },
];

export default function HeroCards() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      style={{
        gap: "clamp(8px, 1vw, 16px)",
        marginTop: "clamp(20px, 2.1vw, 40px)",
        width: "100%",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#F2EEE6",
            borderRadius: 10,
            padding: "clamp(4px, 0.3vw, 6px)",
          }}
          className="flex flex-col"
        >
          <div className="relative">
            <Image
              src={card.url}
              alt={card.title}
              width={326}
              height={369}
              style={{ width: "100%", height: "auto", aspectRatio: "326/369", borderRadius: 10, objectFit: "cover" }}
            />
            <span
              className="absolute font-bold text-white"
              style={{ top: "clamp(10px, 1vw, 20px)", left: "clamp(12px, 1.6vw, 30px)", fontSize: "clamp(14px, 1.93vw, 37px)", fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1.1 }}
            >
              {(() => {
                const spaceIndex = card.title.indexOf(" ");
                if (spaceIndex === -1) return card.title;
                return (
                  <>
                    {card.title.slice(0, spaceIndex)}
                    <br />
                    {card.title.slice(spaceIndex + 1)}
                  </>
                );
              })()}
            </span>
          </div>
          <div className="flex gap-1" style={{ paddingTop: "clamp(4px, 0.3vw, 6px)" }}>
            <Link
              href="#"
              style={{
                height: "clamp(32px, 2.5vw, 48px)",
                borderRadius: 6,
                backgroundColor: "#20514C",
                color: "white",
                fontSize: "clamp(10px, 0.73vw, 14px)",
                flex: 1,
              }}
              className="font-bold cursor-pointer flex items-center justify-center"
            >
              Get Started →
            </Link>
            <Link
              href="#"
              style={{
                height: "clamp(32px, 2.5vw, 48px)",
                borderRadius: 6,
                backgroundColor: "white",
                color: "#20514C",
                border: "2px solid #20514C",
                fontSize: "clamp(10px, 0.73vw, 14px)",
                flex: 1,
              }}
              className="font-bold cursor-pointer flex items-center justify-center"
            >
              Learn More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
