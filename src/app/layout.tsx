import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Issue Tracker App",
  description: "Issue Tracker App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="green">
          <main>
            <NavBar />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
