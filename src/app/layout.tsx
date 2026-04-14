import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EcoDescarte Digital — Descarte Correto de Lixo Eletrônico",
    template: "%s | EcoDescarte Digital",
  },
  description:
    "Plataforma educativa sobre descarte correto de lixo eletrônico para a comunidade de Esmeraldas/MG. Guia interativo, pontos de coleta, quiz educativo e mapa com geolocalização.",
  keywords: [
    "lixo eletrônico", "descarte", "reciclagem", "e-lixo", "Esmeraldas",
    "MG", "inclusão digital", "ODS", "sustentabilidade", "TI Verde",
    "pontos de coleta", "meio ambiente",
  ],
  openGraph: {
    title: "EcoDescarte Digital — Para onde vai o lixo eletrônico da sua comunidade?",
    description: "Descubra como descartar corretamente seus equipamentos eletrônicos. Guia interativo, pontos de coleta com mapa e quiz educativo.",
    url: "https://eco-descarte.vercel.app",
    siteName: "EcoDescarte Digital",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoDescarte Digital",
    description: "Ferramenta web para descarte correto de lixo eletrônico — Esmeraldas/MG",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Pular para o conteúdo principal
          </a>
          <Header />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
