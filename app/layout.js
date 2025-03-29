import { Geist, Geist_Mono, Audiowide, Geo, Iceland, ZCOOL_QingKe_HuangYou, Silkscreen, Odibee_Sans, Handjet } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const geo = Geo({
  weight: "400",
  variable: "--font-geo",
  subsets: ["latin"],
});

const iceland = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
});

const zcoolQingKeHuangYu = ZCOOL_QingKe_HuangYou({
  weight: "400",
  variable: "--font-zcool",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  weight: "400",
  variable: "--font-silkscreen",
  subsets: ["latin"],
});

const odibeeSans = Odibee_Sans({
  weight: "400",
  variable: "--font-odibee",
  subsets: ["latin"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calculator",
  description: "Calculator project in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
