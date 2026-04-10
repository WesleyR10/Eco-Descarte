"use client";

import {
  collectionPoints,
  typeLabels,
  typeColors,
} from "@/data/collection-points";
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Building2,
  Filter,
  Navigation,
  Info,
} from "lucide-react";
import { useState } from "react";

type FilterType =
  | "todos"
  | "prefeitura"
  | "loja"
  | "cooperativa"
  | "empresa"
  | "ong";

export default function PontosDeColetaPage() {
  const [filter, setFilter] = useState<FilterType>("todos");

  const filtered =
    filter === "todos"
      ? collectionPoints
      : collectionPoints.filter((p) => p.type === filter);

  const filterOptions: { value: FilterType; label: string; count: number }[] = [
    { value: "todos", label: "Todos", count: collectionPoints.length },
    {
      value: "prefeitura",
      label: "Órgão Público",
      count: collectionPoints.filter((p) => p.type === "prefeitura").length,
    },
    {
      value: "loja",
      label: "Lojas",
      count: collectionPoints.filter((p) => p.type === "loja").length,
    },
    {
      value: "cooperativa",
      label: "Cooperativas",
      count: collectionPoints.filter((p) => p.type === "cooperativa").length,
    },
    {
      value: "empresa",
      label: "Empresas",
      count: collectionPoints.filter((p) => p.type === "empresa").length,
    },
    {
      value: "ong",
      label: "Programas",
      count: collectionPoints.filter((p) => p.type === "ong").length,
    },
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <h1 className="section-title text-white">
            Pontos de <span className="gradient-text">Coleta</span>
          </h1>
          <p className="section-subtitle">
            Encontre locais para descartar corretamente seu lixo eletrônico em
            Esmeraldas/MG e região metropolitana de Belo Horizonte. Distâncias
            calculadas a partir do bairro Novo Retiro.
          </p>
        </div>

        {/* Info banner */}
        <div className="card bg-gradient-to-r from-blue-950/30 to-dark-900 border-blue-500/20 mb-8 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-dark-200 text-sm">
              Os pontos de coleta listados aceitam lixo eletrônico gratuitamente.
              Antes de ir, ligue para confirmar horários e tipos aceitos. Lembre-se
              de apagar seus dados pessoais de celulares e computadores antes do descarte.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div
          className="flex items-center gap-2 mb-8 flex-wrap"
          role="group"
          aria-label="Filtrar por tipo"
        >
          <Filter className="w-4 h-4 text-dark-400" />
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${filter === opt.value
                  ? "bg-primary-600 text-white"
                  : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"
                }`}
              aria-pressed={filter === opt.value}
            >
              {opt.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${filter === opt.value
                    ? "bg-white/20"
                    : "bg-dark-700 text-dark-400"
                  }`}
              >
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((point) => (
            <article key={point.id} className="card">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm leading-tight">
                      {point.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${typeColors[point.type]
                          }`}
                      >
                        {typeLabels[point.type]}
                      </span>
                      {point.distance && (
                        <span className="inline-flex items-center gap-1 text-xs text-dark-400">
                          <Navigation className="w-3 h-3" />
                          {point.distance}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-dark-300">
                  <MapPin className="w-4 h-4 text-dark-500 mt-0.5 flex-shrink-0" />
                  <span>{point.address}</span>
                </div>

                {point.phone && (
                  <div className="flex items-center gap-2 text-dark-300">
                    <Phone className="w-4 h-4 text-dark-500 flex-shrink-0" />
                    <span>{point.phone}</span>
                  </div>
                )}

                {point.hours && (
                  <div className="flex items-center gap-2 text-dark-300">
                    <Clock className="w-4 h-4 text-dark-500 flex-shrink-0" />
                    <span>{point.hours}</span>
                  </div>
                )}

                <div>
                  <p className="text-dark-500 text-xs font-semibold uppercase tracking-wider mb-2 mt-4">
                    Aceita:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {point.accepts.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-dark-800 text-dark-200 text-xs px-2.5 py-1 rounded-md border border-dark-700/50"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-dark-400">
            Nenhum ponto de coleta encontrado para este filtro.
          </div>
        )}

        {/* Info box */}
        <div className="mt-12 card bg-gradient-to-br from-amber-950/20 to-dark-900 border-amber-500/20">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            Não encontrou um ponto perto de você?
          </h2>
          <div className="text-dark-300 text-sm leading-relaxed space-y-2">
            <p>
              Entre em contato com a <strong className="text-white">Prefeitura de Esmeraldas</strong> pelo
              telefone (31) 3623-1000 para saber sobre coletas programadas no
              bairro Novo Retiro e região.
            </p>
            <p>
              Você também pode verificar se lojas de eletrônicos próximas
              participam de programas de <strong className="text-white">logística reversa</strong> — pela Lei
              12.305/2010, fabricantes e vendedores são obrigados a receber
              produtos eletrônicos de volta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
