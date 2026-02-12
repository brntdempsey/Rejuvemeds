import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejuvemed Studio",
  description: "Sanity Studio for Rejuvemed",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sanity-studio">
      <style>{`
        .sanity-studio { height: 100vh; width: 100vw; overflow: hidden; }
        body { margin: 0; }
      `}</style>
      {children}
    </div>
  );
}
