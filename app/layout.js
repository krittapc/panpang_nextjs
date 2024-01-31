import { Inter } from "next/font/google";
// import Providers from "./(components)/Providers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LiffProvider } from "../components/LiffProvider";
const inter = Inter({ subsets: ["latin"] });
// const liffId = process.env.NEXT_PUBLIC_LIFF_ID

export const metadata = {
  title: "PanPang :)",
  description: "Give me your problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID || ""}>
          {children}
        </LiffProvider>
      </body>
    </html>
  );
}
