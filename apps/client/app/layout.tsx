import "./globals.css";
import { ThemeProvider } from "@repo/ui/theme-provider";
import ClientHeader from "./_component/home/Header";
import ClientFooter from "./_component/home/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="relative dark:bg-gray-900 dark:text-gray-400 text-gray-600 duration-300 min-h-[100vh]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <ClientHeader />
          </header>
          <div>{children}</div>

          <footer className="absolute w-full bg-white dark:bg-gray-900 -bottom-40">
            <ClientFooter />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
