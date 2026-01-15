import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LostHex Base",
  description: "Production-ready starter with spec framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
