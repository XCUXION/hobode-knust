import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hobode",
  description: "Hobode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full fixed top-0 bg-[#fffffff1] backdrop-filter backdrop-blur-2xl"></div>
        <div className="w-full h-full pb-10 relative">
          {children}
        </div>
      </body>
    </html>
  );
}
