import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import { VibeProvider } from "@/context/VibeContext";
import Schema from "@/components/Schema";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameTime Sports Bar & Grill | Chino, CA",
  description: "Experience the ultimate sports bar environment in Chino. Premium food, victory vibes, and the best game day coverage.",
  keywords: ["sports bar Chino", "GameTime Chino", "best burgers Chino", "live sports Chino"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rajdhani.variable} ${orbitron.variable} antialiased selection:bg-victory-red selection:text-white`}
      >
        <VibeProvider>
          <Schema />
          {children}
        </VibeProvider>
      </body>
    </html>
  );
}
