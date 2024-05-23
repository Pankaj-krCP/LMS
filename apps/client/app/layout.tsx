import "./globals.css";
import { ThemeProvider } from "@repo/ui/theme-provider";
import ClientHeader from "./_component/home/Header";
import ClientFooter from "./_component/home/Footer";
import SignInModal from "./_component/auth/SignInModal";
import SignUpModal from "./_component/auth/SignUpModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="relative bg-white dark:bg-slate-900 dark:text-gray-400 text-gray-600 duration-300 min-h-[100vh]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SignInModal />
          <SignUpModal />
          <header>
            <ClientHeader />
          </header>
          <div>{children}</div>

          <footer className="absolute w-full -bottom-36">
            <ClientFooter />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
