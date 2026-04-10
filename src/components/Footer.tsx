import { Recycle, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-800/50 bg-dark-950" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">
                Eco<span className="text-primary-400">Descarte</span>
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Projeto de inclusão digital voltado à conscientização sobre o
              descarte correto de lixo eletrônico na comunidade de Esmeraldas/MG.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
              <Link href="/guia" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Guia de Descarte
              </Link>
              <Link href="/pontos-de-coleta" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Pontos de Coleta
              </Link>
              <Link href="/quiz" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Quiz Educativo
              </Link>
              <Link href="/contato" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Contato
              </Link>
              <Link href="/sobre" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Sobre o Projeto
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">ODS Relacionados</h3>
            <div className="space-y-2 text-sm text-dark-400">
              <p>🎯 ODS 11 — Cidades e Comunidades Sustentáveis</p>
              <p>♻️ ODS 12 — Consumo e Produção Responsáveis</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © 2026 EcoDescarte Digital — Atividade Extensionista Uninter
          </p>
          <p className="text-dark-500 text-sm flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500" /> por Wesley Ribas Gonçalves
          </p>
        </div>
      </div>
    </footer>
  );
}
