import type { Metadata } from "next";
import "@/app/ui/globals.css";
import LayoutClient from "@/app/ui/LayoutClient";

export const metadata: Metadata = {
  title: "David Castillo | Portfolio",
  description:
    "Hola me llamo David Castillo soy desarrollador web y diseñador gráfico, tienes alguna idea contáctame.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutClient>{children}</LayoutClient>;
}
