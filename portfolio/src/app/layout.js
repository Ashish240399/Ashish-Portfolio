import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashish | Fullstack Developer",
  description:
    "Fullstack Developer with having teck stack of MERN, Next.js, TailwindCSS, etc.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/images/my-pic.png",
        href: "/assets/images/my-pic.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/images/my-pic.png",
        href: "/assets/images/my-pic.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-[100vh] overflow-hidden w-[100vw] text-dark_blue bg-[url('/assets/images/programmer_bg.png')] bg-cover">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
