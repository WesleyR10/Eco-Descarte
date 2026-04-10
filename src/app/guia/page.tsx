"use client";

import { wasteCategories } from "@/data/categories";
import {
  Smartphone,
  Monitor,
  Battery,
  Refrigerator,
  Lightbulb,
  Cable,
  CheckCircle2,
  AlertTriangle,
  Lightbulb as TipIcon,
  ChevronDown,
  ChevronUp,
  Recycle,
} from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Smartphone,
  Monitor,
  Battery,
  Refrigerator,
  Lightbulb,
  Cable,
};

function CategoryCard({ category }: { category: (typeof wasteCategories)[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = iconMap[category.icon] || Recycle;

  return (
    <div id={category.id} className="card scroll-mt-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        aria-controls={`content-${category.id}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{category.name}</h2>
            <p className="text-dark-400 text-sm mt-1 hidden sm:block">
              {category.description}
            </p>
          </div>
        </div>
        <div className="text-dark-400 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          id={`content-${category.id}`}
          className="mt-6 space-y-6 animate-fade-in"
        >
          <p className="text-dark-300 sm:hidden">{category.description}</p>

          {/* Exemplos */}
          <div>
            <h3 className="text-sm font-semibold text-dark-300 uppercase tracking-wider mb-3">
              Exemplos
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.examples.map((ex, i) => (
                <span
                  key={i}
                  className="bg-dark-800 text-dark-200 text-sm px-3 py-1.5 rounded-lg border border-dark-700/50"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Como descartar */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Como descartar corretamente
            </h3>
            <ol className="space-y-2">
              {category.howToDiscard.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-dark-200 text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Perigos */}
          <div>
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Riscos do descarte incorreto
            </h3>
            <ul className="space-y-2">
              {category.dangers.map((danger, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-dark-300 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  {danger}
                </li>
              ))}
            </ul>
          </div>

          {/* Dica */}
          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-4 flex items-start gap-3">
            <TipIcon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-primary-400 font-semibold text-sm">
                Dica:{" "}
              </span>
              <span className="text-dark-200 text-sm">{category.tip}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GuiaPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="section-title text-white">
            Guia de <span className="gradient-text">Descarte</span>
          </h1>
          <p className="section-subtitle">
            Aprenda a forma correta de descartar cada tipo de equipamento
            eletrônico. Clique em uma categoria para ver os detalhes.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {wasteCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* General tips */}
        <div className="mt-12 card bg-gradient-to-br from-primary-950/30 to-dark-900 border-primary-500/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Recycle className="w-5 h-5 text-primary-400" />
            Dicas Gerais
          </h2>
          <ul className="space-y-3">
            {[
              "Nunca descarte eletrônicos no lixo comum — eles contaminam o meio ambiente",
              "Antes de descartar, verifique se o equipamento pode ser doado ou reparado",
              "Apague todos os dados pessoais de dispositivos antes do descarte",
              "Separe pilhas e baterias dos demais eletrônicos",
              "Procure programas de logística reversa dos fabricantes",
              "Incentive vizinhos e familiares a descartarem corretamente",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-dark-200">
                <CheckCircle2 className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
