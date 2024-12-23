import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/Theme-provider";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Surya's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['dark', 'light', 'orange', 'blue', 'green', 'yellow', 'violet']}
        >
        <Header/>
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
