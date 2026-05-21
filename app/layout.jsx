import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "school website",
  description: "a school web app that i use as a portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" >
      <body className="">{children}</body>
    </html>
  );
}
