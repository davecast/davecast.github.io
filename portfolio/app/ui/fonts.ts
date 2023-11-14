import { Raleway, Roboto } from "next/font/google";

export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-relaway",
});
