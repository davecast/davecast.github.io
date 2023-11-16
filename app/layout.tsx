import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import Body from "@/app/ui/Body";
import type { Metadata } from "next";
import { roboto, raleway } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import GlobalProvider from "@/app/context/GlobalContext";

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
}
