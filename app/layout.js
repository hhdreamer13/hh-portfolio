import "./globals.css";
import { Inter } from "next/font/google";
import { Spline_Sans_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spline = Spline_Sans_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Hooman",
  description: "Hh Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${spline.className} bg-slate-950`}>{children}</body>
    </html>
  );
}
