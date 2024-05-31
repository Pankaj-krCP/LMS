import "./globals.css";
import { ThemeProvider } from "@repo/ui/theme-provider";
import AdminHeader from "./_component/home/Header";
import SignInModal from "./_component/auth/SignInModal";

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
          <header>
            <AdminHeader />
          </header>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
