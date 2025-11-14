import { Geist, Geist_Mono } from "next/font/google"; // fonts imported directly in from google?
import "./globals.css";
import MyNavBar from "@/components/ui/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Jonathan Youngs Web Developement portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <MyNavBar></MyNavBar>
        {children}
      </body>
    </html>
  );
}
