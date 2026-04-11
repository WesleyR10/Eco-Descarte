"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Recycle,
  MapPin,
  Brain,
  BookOpen,
  AlertTriangle,
  Leaf,
  TrendingDown,
  Zap,
  Shield,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import FadeIn from "@/components/FadeIn";
import { stats } from "@/data/stats";
import { wasteCategories } from "@/data/categories";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Hero Section with 3D Globe */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950/20" />

        {/* 3D Globe Background */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-60 md:opacity-80">
          <Globe />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Recycle className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-medium">
                Inclusão Digital — Bairro Novo Retiro, Esmeraldas/MG
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Para onde vai o{" "}
              <span className="gradient-text">lixo eletrônico</span> da sua
              comunidade?
            </h1>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mb-8 leading-relaxed">
              O Brasil gera mais de 2 milhões de toneladas de e-lixo por ano e
              apenas 3% é reciclado. Descubra como descartar corretamente seus
              equipamentos eletrônicos e proteger o meio ambiente do bairro Novo
              Retiro e de toda Esmeraldas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/guia" className="btn-primary">
                <BookOpen className="w-5 h-5" />
                Guia de Descarte
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pontos-de-coleta" className="btn-secondary">
                <MapPin className="w-5 h-5" />
                Pontos de Coleta
              </Link>
              <Link href="/quiz" className="btn-secondary">
                <Brain className="w-5 h-5" />
                Testar Conhecimentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 border-t border-dark-800/50"
        aria-label="Estatísticas sobre lixo eletrônico no Brasil"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">
              O e-lixo em <span className="gradient-text">números</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Dados alarmantes sobre o descarte de lixo eletrônico no Brasil que
              mostram a urgência de agir agora.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <div className="card text-center py-8">
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-white font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-dark-400 text-sm">{stat.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20" aria-label="O problema do lixo eletrônico">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-white">
                Por que o <span className="gradient-text">descarte correto</span>{" "}
                é tão importante?
              </h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                Equipamentos eletrônicos contêm substâncias altamente tóxicas
                como chumbo, mercúrio, cádmio e arsênio. Quando descartados no
                lixo comum, essas substâncias infiltram no solo e contaminam os
                lençóis freáticos, afetando diretamente a saúde da população.
              </p>
              <p className="text-dark-300 leading-relaxed mb-6">
                No bairro Novo Retiro, em Esmeraldas/MG, muitos moradores ainda
                não sabem que celulares, pilhas, computadores e outros
                eletrônicos não podem ser jogados no lixo doméstico. Este
                projeto existe para mudar essa realidade através da tecnologia e
                da educação digital.
              </p>
              <p className="text-dark-300 leading-relaxed mb-8">
                Alinhado aos conceitos de <strong className="text-primary-400">TI Verde</strong>,
                o EcoDescarte Digital promove o uso sustentável dos recursos
                tecnológicos, incentivando a reciclagem, o reuso e o descarte
                consciente de equipamentos eletrônicos.
              </p>
              <Link href="/guia" className="btn-primary">
                Aprender a descartar corretamente
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: AlertTriangle,
                  title: "Contaminação Ambiental",
                  desc: "Metais pesados como chumbo e mercúrio infiltram no solo e chegam aos lençóis freáticos, contaminando a água que sua comunidade consome",
                  color: "text-red-400",
                },
                {
                  icon: TrendingDown,
                  title: "Desperdício de Recursos Valiosos",
                  desc: "Uma tonelada de celulares contém mais ouro que uma tonelada de minério. Reciclar recupera materiais preciosos e reduz a mineração",
                  color: "text-amber-400",
                },
                {
                  icon: Leaf,
                  title: "Impacto Climático",
                  desc: "Fabricar novos eletrônicos emite toneladas de CO₂. Reciclar e reutilizar reduz drasticamente a pegada de carbono",
                  color: "text-primary-400",
                },
                {
                  icon: Shield,
                  title: "Saúde Pública",
                  desc: "Exposição a substâncias tóxicas de eletrônicos causa problemas neurológicos, renais e respiratórios, especialmente em crianças",
                  color: "text-blue-400",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 150} direction="right">
                  <div className="card flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0 ${item.color}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-dark-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-dark-900/50 border-y border-dark-800/50" aria-label="Como funciona">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">
              Como o <span className="gradient-text">EcoDescarte</span> funciona
            </h2>
            <p className="section-subtitle mx-auto">
              Em 3 passos simples, descubra como descartar seu lixo eletrônico
              de forma correta e responsável.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: BookOpen,
                title: "Identifique",
                desc: "Selecione o tipo de equipamento eletrônico que deseja descartar no nosso Guia de Descarte interativo",
              },
              {
                step: "02",
                icon: Zap,
                title: "Aprenda",
                desc: "Receba orientações detalhadas sobre como preparar e descartar corretamente cada tipo de eletrônico",
              },
              {
                step: "03",
                icon: MapPin,
                title: "Descarte",
                desc: "Encontre o ponto de coleta mais próximo em Esmeraldas/MG e região para levar seu equipamento",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center py-8 relative">
                <div className="text-6xl font-black text-dark-800/50 absolute top-4 right-6">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-400">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20" aria-label="Categorias de lixo eletrônico">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">
              Categorias de <span className="gradient-text">e-lixo</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Conheça os principais tipos de lixo eletrônico e aprenda a forma
              correta de descarte para cada um.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wasteCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/guia#${cat.id}`}
                className="card group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                    <Recycle className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-dark-400 text-sm line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.examples.slice(0, 3).map((ex, i) => (
                    <span
                      key={i}
                      className="text-xs bg-dark-800 text-dark-300 px-2 py-1 rounded"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver como descartar <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900/50 border-t border-dark-800/50" aria-label="Chamada para ação">
        <div className="container-custom">
          <div className="card bg-gradient-to-br from-primary-950/50 to-dark-900 border-primary-500/20 text-center py-12 px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Faça parte da mudança no Novo Retiro
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto mb-8">
              Cada equipamento eletrônico descartado corretamente é uma vitória
              para o meio ambiente da nossa comunidade. Teste seus conhecimentos
              e descubra os pontos de coleta mais próximos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pontos-de-coleta" className="btn-primary">
                <MapPin className="w-5 h-5" />
                Ver Pontos de Coleta
              </Link>
              <Link href="/quiz" className="btn-secondary">
                <Brain className="w-5 h-5" />
                Fazer o Quiz Educativo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
