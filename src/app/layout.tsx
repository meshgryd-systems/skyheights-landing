import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchoolSchema from "../components/SchoolSchema";
import ClientProviders from "@/providers/ClientProviders";
import { ErrorBoundaryWrapper } from "../components/ErrorBoundaryWrapper";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Skyheights Academy | Private School in Lugbe Abuja",
  description:
    "Skyheights Academy is a private school in Lugbe, Abuja offering Creche, Nursery, Primary & Secondary education with Nigerian, British & Montessori curricula.",
  keywords:
    "private school Lugbe Abuja, Creche Lugbe, Nursery Lugbe, Primary school Lugbe, Secondary school Abuja, British curriculum Abuja, Montessori school Lugbe",
  openGraph: {
    title: "Skyheights Academy | Private School in Lugbe Abuja",
    description:
      "Quality private education in Lugbe, Abuja. Creche to Secondary. Nigerian, British & Montessori curricula.",
    type: "website",
    locale: "en_NG",
    siteName: "Skyheights Academy"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <ErrorBoundaryWrapper>
          <ClientProviders>
            <SchoolSchema />
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster position="top-center" richColors closeButton />
          </ClientProviders>
        </ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
