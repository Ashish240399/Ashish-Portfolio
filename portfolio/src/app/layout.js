import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-[100vh] w-[100vw] bg-white text-dark_blue bg-[url('../assets/images/programmer_bg.png')] bg-cover">
          <div className="bg-[#00000043] fixed top-0 left-0 w-full h-full"></div>
          <Navbar />
          <div className="z-30">{children}</div>
        </div>
      </body>
    </html>
  );
}
