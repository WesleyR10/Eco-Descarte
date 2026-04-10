import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoDescarte Digital — Guia de Descarte de Lixo Eletrônico",
  description:
    "Plataforma educativa sobre descarte correto de lixo eletrônico para a comunidade de Esmeraldas/MG. Projeto de Atividade Extensionista — Uninter.",
  keywords: [
    "lixo eletrônico",
    "descarte",
    "reciclagem",
    "e-lixo",
    "Esmeraldas",
    "MG",
    "inclusão digital",
    "ODS",
    "sustentabilidade",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
