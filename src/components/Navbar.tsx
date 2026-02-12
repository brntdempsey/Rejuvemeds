import Image from "next/image";
import Link from "next/link";

const navItems = [
  "Weight Loss",
  "Men",
  "Women",
  "Lonevity",
  "Skin",
  "Vitamin Shots",
  "General Health",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50" style={{ backgroundColor: "#20514C", height: 100, fontFamily: "'Aeonick Pro', sans-serif" }}>
      <div className="flex items-center h-full" style={{ paddingRight: "clamp(20px, 3vw, 42px)", paddingTop: 18 }}>
        <div style={{ paddingTop: 5, marginLeft: "clamp(20px, 3vw, 42px)", marginRight: "clamp(20px, 22vw, 420px)", flexShrink: 0 }}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Rejuvemed"
              width={150}
              height={40}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="flex-1 overflow-hidden" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <ul className="flex items-center" style={{ gap: "clamp(12px, 2.5vw, 50px)" }}>
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="font-medium hover:opacity-80 transition-colors whitespace-nowrap"
                  style={{ color: "grey", fontSize: "clamp(14px, 1.25vw, 24px)" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-4 shrink-0">
          <button
            style={{ height: 64, color: "white", paddingLeft: 12, paddingRight: 12 }}
            className="font-bold bg-transparent cursor-pointer whitespace-nowrap"
          >
            Log In
          </button>
          <button
            style={{ height: 64, fontSize: "clamp(14px, 1.05vw, 20px)", backgroundColor: "white", color: "black", borderRadius: 10, paddingLeft: 20, paddingRight: 20 }}
            className="font-bold cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
