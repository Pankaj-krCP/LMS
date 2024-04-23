import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@repo/ui/theme-provider";
import ClientHeader from "./_component/home/Header";
import ClientFooter from "./_component/home/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: `${poppins.variable}, ${josefin.variable}` }}
        className="dark:bg-gray-950 duration-300"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <ClientHeader />
          </header>
          {children}
          <footer>
            <ClientFooter />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
