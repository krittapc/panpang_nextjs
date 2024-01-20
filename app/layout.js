import { Inter } from "next/font/google";
// import Providers from "./(components)/Providers";
import "./globals.css";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PanPang :)",
  description: "Give me your problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
          <Navbar />
          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
