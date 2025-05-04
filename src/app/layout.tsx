"use client";

import i18n from "@/libs/i18next";
import { Kantumruy_Pro } from "next/font/google";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import "./globals.css";

// * Configure Kantumruy Pro font
const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy-pro",
  subsets: ["latin", "khmer"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="km" className={kantumruyPro.variable}>
      <body>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </body>
    </html>
  );
}
