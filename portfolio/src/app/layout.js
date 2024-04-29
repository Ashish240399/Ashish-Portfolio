import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

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
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="relative h-[100vh] overflow-hidden w-[100vw] text-dark_blue bg-[url('/assets/images/portfolio-bg-mob.png')] md:bg-[url('/assets/images/portfolio-bg-laptop.png')] bg-cover bg-no-repeat">
              <div>{children}</div>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
