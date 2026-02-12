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
      <div style={{ paddingRight: 42, paddingTop: 18 }} className="flex items-center h-full">
        <div style={{ paddingTop: 5, marginRight: 420, marginLeft:42  }}>
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
        <div style={{ paddingTop: 20, paddingBottom: 20 }}>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="font-medium hover:opacity-80 transition-colors whitespace-nowrap"
                  style={{ color: "grey", fontSize: 24, marginRight: 50}}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-4" style={{marginRight:42}}>
          
          <button
            style={{ width: 117, height: 64, color: "white" }}
            className="font-bold bg-transparent cursor-pointer"
          >
            Log In
          </button>
          <button
            style={{ width: 150, height: 64, fontSize: 20, backgroundColor: "white", color: "black", marginRight:25, borderRadius: 10 }}
            className="font-bold cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
