import {
  Target,
  Users,
  Globe,
  Accessibility,
  Code,
  Recycle,
  BookOpen,
  Heart,
} from "lucide-react";

export default function SobrePage() {
  return (
    <div className="py-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="section-title text-white">
            Sobre o <span className="gradient-text">Projeto</span>
          </h1>
          <p className="section-subtitle">
            Conheça o EcoDescarte Digital, um projeto de Atividade Extensionista
            voltado à inclusão digital e conscientização ambiental.
          </p>
        </div>

        {/* About */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-400" />
            O que é o EcoDescarte Digital?
          </h2>
          <div className="space-y-4 text-dark-300 text-sm leading-relaxed">
            <p>
              O EcoDescarte Digital é uma plataforma web educativa desenvolvida
              como projeto de Atividade Extensionista do curso de Tecnólogo em
              Análise e Desenvolvimento de Sistemas do Centro Universitário
              Internacional Uninter.
            </p>
            <p>
              O projeto tem como objetivo promover a conscientização sobre o
              descarte correto de lixo eletrônico (e-lixo) na comunidade do
              bairro Novo Retiro, em Esmeraldas/MG, utilizando a tecnologia como
              ferramenta de inclusão digital e transformação social.
            </p>
            <p>
              Através de um guia interativo, quiz educativo e mapeamento de
              pontos de coleta, o EcoDescarte Digital busca empoderar a
              comunidade local com conhecimento prático sobre como lidar com
              resíduos eletrônicos de forma responsável e sustentável.
            </p>
          </div>
        </div>

        {/* ODS */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary-400" />
            Objetivos de Desenvolvimento Sustentável (ODS)
          </h2>
          <p className="text-dark-300 text-sm mb-6">
            Este projeto está alinhado com os seguintes ODS da ONU:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-5">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="font-bold text-white mb-2">
                ODS 11 — Cidades e Comunidades Sustentáveis
              </h3>
              <p className="text-dark-400 text-sm">
                Tornar as cidades e os assentamentos humanos inclusivos,
                seguros, resilientes e sustentáveis, promovendo a gestão
                adequada de resíduos urbanos.
              </p>
            </div>
            <div className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-5">
              <div className="text-3xl mb-3">♻️</div>
              <h3 className="font-bold text-white mb-2">
                ODS 12 — Consumo e Produção Responsáveis
              </h3>
              <p className="text-dark-400 text-sm">
                Assegurar padrões de produção e de consumo sustentáveis,
                reduzindo a geração de resíduos por meio da prevenção, redução,
                reciclagem e reuso.
              </p>
            </div>
          </div>
        </div>

        {/* Universal Design */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-primary-400" />
            Princípios do Desenho Universal
          </h2>
          <p className="text-dark-300 text-sm mb-6">
            O EcoDescarte Digital foi desenvolvido considerando os 7 Princípios
            do Desenho Universal, buscando acessibilidade para todos:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                num: 1,
                title: "Igualitário",
                desc: "Interface acessível para todas as pessoas, independentemente de suas capacidades",
              },
              {
                num: 2,
                title: "Adaptável",
                desc: "Design responsivo que se adapta a diferentes dispositivos e tamanhos de tela",
              },
              {
                num: 3,
                title: "Intuitivo",
                desc: "Navegação simples e linguagem clara, acessível a todos os níveis de instrução",
              },
              {
                num: 4,
                title: "Informação de fácil percepção",
                desc: "Contraste adequado, ícones descritivos e textos legíveis",
              },
              {
                num: 5,
                title: "Tolerância ao erro",
                desc: "Quiz com feedback imediato e explicações para respostas incorretas",
              },
              {
                num: 6,
                title: "Baixo esforço físico",
                desc: "Interações simples com cliques e toques, sem necessidade de ações complexas",
              },
              {
                num: 7,
                title: "Dimensão e espaço para uso",
                desc: "Botões e áreas de toque com tamanho adequado para diferentes dispositivos",
              },
            ].map((principle) => (
              <div
                key={principle.num}
                className="flex items-start gap-3 bg-dark-800/30 rounded-lg p-3"
              >
                <span className="w-7 h-7 rounded-lg bg-primary-500/10 text-primary-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {principle.num}
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    {principle.title}
                  </h3>
                  <p className="text-dark-400 text-xs mt-0.5">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary-400" />
            Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Next.js 14", desc: "Framework React" },
              { name: "TypeScript", desc: "Tipagem estática" },
              { name: "Tailwind CSS", desc: "Estilização" },
              { name: "Vercel", desc: "Hospedagem" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-4 text-center"
              >
                <div className="font-bold text-white text-sm">{tech.name}</div>
                <div className="text-dark-400 text-xs mt-1">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary-400" />
            Setor de Aplicação
          </h2>
          <div className="space-y-3 text-dark-300 text-sm">
            <p>
              <strong className="text-white">Comunidade:</strong> Bairro Novo
              Retiro
            </p>
            <p>
              <strong className="text-white">Cidade:</strong> Esmeraldas — Minas
              Gerais
            </p>
            <p>
              <strong className="text-white">Público-alvo:</strong> Moradores do
              bairro e região, com foco em pessoas que não possuem conhecimento
              sobre o descarte correto de lixo eletrônico
            </p>
          </div>
        </div>

        {/* Author */}
        <div className="card bg-gradient-to-br from-primary-950/30 to-dark-900 border-primary-500/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            Autor
          </h2>
          <div className="space-y-2 text-dark-300 text-sm">
            <p>
              <strong className="text-white">Aluno:</strong> Wesley Ribas
              Gonçalves
            </p>
            <p>
              <strong className="text-white">RU:</strong> 5022777
            </p>
            <p>
              <strong className="text-white">Curso:</strong> Tecnólogo em
              Análise e Desenvolvimento de Sistemas
            </p>
            <p>
              <strong className="text-white">Instituição:</strong> Centro
              Universitário Internacional Uninter
            </p>
            <p>
              <strong className="text-white">Disciplina:</strong> Atividade
              Extensionista: Tecnologia Aplicada à Inclusão Digital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
