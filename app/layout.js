import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Faith-Blog | Engineering the Future",
  description: "Thoughts on Code, Faith, and Life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${montserrat.variable}`}>
      <body className="antialiased flex flex-col min-h-screen font-sans bg-background text-foreground selection:bg-accent/20 selection:text-accent">
        <Navbar />
        <main className="flex-grow pt-20 animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
