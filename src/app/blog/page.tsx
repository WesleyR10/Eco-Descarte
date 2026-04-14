"use client";

import { blogPosts, categoryLabels, categoryColors } from "@/data/blog";
import FadeIn from "@/components/FadeIn";
import { Calendar, ExternalLink, Newspaper, Filter } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@/data/blog";

type FilterCat = "todos" | BlogPost["category"];

export default function BlogPage() {
  const [filter, setFilter] = useState<FilterCat>("todos");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "todos"
    ? blogPosts
    : blogPosts.filter((p) => p.category === filter);

  const filters: { value: FilterCat; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "dados", label: "Dados" },
    { value: "legislacao", label: "Legislação" },
    { value: "dicas", label: "Dicas" },
    { value: "tecnologia", label: "Tecnologia" },
    { value: "comunidade", label: "Comunidade" },
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        <FadeIn>
          <div className="max-w-3xl mb-8">
            <h1 className="section-title text-white">
              Blog & <span className="gradient-text">Notícias</span>
            </h1>
            <p className="section-subtitle">
              Fique por dentro das últimas notícias, legislação e dados sobre
              lixo eletrônico no Brasil e no mundo.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-dark-400" />
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f.value
                  ? "bg-primary-600 text-white"
                  : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filtered.map((post, i) => (
            <FadeIn key={post.id} delay={i * 80}>
              <article className="card group">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{post.imageEmoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}>
                        {categoryLabels[post.category]}
                      </span>
                      <span className="text-xs text-dark-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                      {post.title}
                    </h2>

                    <p className="text-dark-300 text-sm leading-relaxed mb-3">
                      {expanded === post.id ? post.content : post.summary}
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                        className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
                      >
                        {expanded === post.id ? "← Ler menos" : "Ler mais →"}
                      </button>

                      <a
                        href={post.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-400 text-xs hover:text-primary-400 transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Fonte: {post.source}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-dark-400">
            Nenhuma notícia encontrada para este filtro.
          </div>
        )}

        {/* Newsletter-style CTA */}
        <FadeIn delay={200}>
          <div className="mt-12 card bg-gradient-to-br from-primary-950/30 to-dark-900 border-primary-500/20 text-center py-10">
            <Newspaper className="w-10 h-10 text-primary-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Conhece alguma notícia relevante?
            </h2>
            <p className="text-dark-300 text-sm max-w-md mx-auto mb-4">
              Envie sugestões de notícias e artigos sobre lixo eletrônico
              através do nosso formulário de contato.
            </p>
            <a href="/contato" className="btn-primary inline-flex">
              Enviar Sugestão
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
