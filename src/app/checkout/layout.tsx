import type { Metadata } from "next";
import { PaymentContextProvider } from "./context/paymentContext";

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
    <PaymentContextProvider>
      <div className="w-full">
        {children}
      </div>
    </PaymentContextProvider>
  );
}
