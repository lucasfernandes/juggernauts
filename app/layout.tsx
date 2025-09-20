import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import StateProvider from "./context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juggernauts",
  description:
    "Bringing Sports Fans into the Web3 world through innovative SportFi dApps that are very rewarding, highly intuitive, and extremely fun.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div
          className={`flex flex-col justify-center items-center text-grayer font-extralight leading-[36px] ${inter.className}`}
        >
          <StateProvider>
            <Nav />
            {children}
            <Footer />
          </StateProvider>
        </div>
      </body>
    </html>
  );
}
