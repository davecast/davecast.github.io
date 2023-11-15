import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import type { Metadata } from "next";
import { roboto, raleway } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "David Castillo | Portfolio",
  description:
    "Hola me llamo David Castillo soy desarrollador web y diseñador gráfico, tienes aguna idea contactame",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${raleway.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
