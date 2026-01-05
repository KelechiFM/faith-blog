import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBubbles from "@/components/BackgroundBubbles";
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
  title: "Faith-Blog | Life, Faith & Inspiration",
  description: "A minimal, elegant space for faith, life, and inspiration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${montserrat.variable}`}>
      <body className="antialiased flex flex-col min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30">
        <BackgroundBubbles />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
