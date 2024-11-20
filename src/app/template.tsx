import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/topbar/topbar";

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
    <div className="w-full h-full relative pt-[65px] md:pt-[90px] justify-center items-center flex">
      <Topbar />
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
