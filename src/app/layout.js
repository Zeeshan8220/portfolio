import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Zeeshan Ahmad Afzal | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Zeeshan Ahmad Afzal - AI Engineer, Full-Stack Developer, and Computer Vision specialist. Building production-grade AI applications with Python, FastAPI, React, and TypeScript.",
  keywords: ["AI Engineer", "Full Stack Developer", "Computer Vision", "React", "FastAPI", "Python", "Portfolio"],
  authors: [{ name: "Zeeshan Ahmad Afzal" }],
  openGraph: {
    title: "Zeeshan Ahmad Afzal | AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer & Full-Stack Developer specializing in production-grade AI applications",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
