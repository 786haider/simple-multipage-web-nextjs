import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";



export const metadata: Metadata = {
  title: "Simple-multipage-web",
  description: "CReated by Haider Hussain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar/>
        
        {children}
      </body>
    </html>
  );
}
