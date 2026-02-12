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
      className="grid"
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        marginTop: 40,
        width: "100%",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            height: 435,
            backgroundColor: "#F2EEE6",
            borderRadius: 10,
            padding: 6,
          }}
          className="flex flex-col"
        >
          <div className="relative">
            <Image
              src={card.url}
              alt={card.title}
              width={326}
              height={369}
              style={{ width: "100%", height: 369, borderRadius: 10, objectFit: "cover" }}
            />
            <span
              className="absolute font-bold text-white"
              style={{ top: 20, left: 30, fontSize: 37, fontFamily: "'Aeonick Pro', sans-serif", lineHeight: 1.1 }}
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
          <div className="flex gap-2" style={{ paddingTop: 6 }}>
            <Link
              href="#"
              style={{
                height: 48,
                borderRadius: 6,
                backgroundColor: "#20514C",
                color: "white",
                fontSize: 14,
                flex: 1,
              }}
              className="font-bold cursor-pointer flex items-center justify-center"
            >
              Get Started →
            </Link>
            <Link
              href="#"
              style={{
                height: 48,
                borderRadius: 6,
                backgroundColor: "white",
                color: "#20514C",
                border: "3px solid #20514C",
                fontSize: 14,
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
