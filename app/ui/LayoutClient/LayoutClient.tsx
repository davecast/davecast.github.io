"use client";

import React from "react";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import Body from "@/app/ui/Body";
import { roboto, raleway } from "@/app/ui/fonts";
import GlobalProvider from "@/app/context/GlobalContext";

interface LayoutClientProps {
  children: React.ReactNode;
}
const LayoutClient = ({ children }: LayoutClientProps) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${raleway.variable} antialiased`}>
        <GlobalProvider>
          <>
            <Header />
            <Body>{children}</Body>
            <Footer />
          </>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default LayoutClient;
