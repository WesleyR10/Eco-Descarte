"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import {
  Droplets,
  TreePine,
  Zap,
  Weight,
  Smartphone,
  Monitor,
  Battery,
  Lightbulb,
  Calculator,
  TrendingUp,
  Globe,
  AlertTriangle,
} from "lucide-react";

const devices = [
  { id: "celular", label: "Celulares", icon: Smartphone, waterL: 910, co2Kg: 70, goldMg: 30, mercuryMg: 0 },
  { id: "notebook", label: "Notebooks", icon: Monitor, waterL: 1500, co2Kg: 300, goldMg: 100, mercuryMg: 0 },
  { id: "pilha", label: "Pilhas/Baterias", icon: Battery, waterL: 600000, co2Kg: 1, goldMg: 0, mercuryMg: 5 },
  { id: "lampada", label: "Lâmpadas", icon: Lightbulb, waterL: 0, co2Kg: 0.5, goldMg: 0, mercuryMg: 15 },
];

export default function ImpactoPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    celular: 0, notebook: 0, pilha: 0, lampada: 0,
  });
  const [calculated, setCalculated] = useState(false);

  const totals = {
    water: devices.reduce((sum, d) => sum + d.waterL * (quantities[d.id] || 0), 0),
    co2: devices.reduce((sum, d) => sum + d.co2Kg * (quantities[d.id] || 0), 0),
    gold: devices.reduce((sum, d) => sum + d.goldMg * (quantities[d.id] || 0), 0),
    mercury: devices.reduce((sum, d) => sum + d.mercuryMg * (quantities[d.id] || 0), 0),
  };

  return (
    <div className="py-20">
      <div className="container-custom">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <h1 className="section-title text-white">
              Impacto <span className="gradient-text">Ambiental</span>
            </h1>
            <p className="section-subtitle">
              Entenda o impacto real do lixo eletrônico no meio ambiente e calcule
              quanto você pode ajudar descartando corretamente.
            </p>
          </div>
        </FadeIn>

        {/* Global stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Globe, value: "62M", label: "Toneladas/ano", desc: "de lixo eletrônico gerado no mundo em 2024", color: "text-blue-400" },
            { icon: Droplets, value: "600K", label: "Litros de água", desc: "contaminados por uma única pilha descartada incorretamente", color: "text-cyan-400" },
            { icon: AlertTriangle, value: "1000", label: "Substâncias tóxicas", desc: "diferentes encontradas em equipamentos eletrônicos", color: "text-red-400" },
            { icon: TrendingUp, value: "21%", label: "Crescimento/ano", desc: "taxa de aumento do lixo eletrônico global", color: "text-amber-400" },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card text-center py-8">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-black gradient-text mb-1">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-dark-400 text-xs mt-1">{stat.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Environmental impact timeline */}
        <FadeIn>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-primary-400" />
            Tempo de decomposição na natureza
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            { item: "Pilhas e baterias", time: "100 a 500 anos", danger: "Contaminam 600 mil litros de água", pct: 90 },
            { item: "Placas de circuito", time: "200+ anos", danger: "Liberam chumbo, cádmio e mercúrio", pct: 85 },
            { item: "Plásticos de eletrônicos", time: "400+ anos", danger: "Liberam microplásticos tóxicos", pct: 95 },
            { item: "Vidro de monitores CRT", time: "1 milhão de anos", danger: "Contêm até 2kg de chumbo", pct: 100 },
            { item: "Cabos e fios", time: "100+ anos", danger: "Revestimento libera toxinas ao degradar", pct: 70 },
            { item: "Lâmpadas fluorescentes", time: "Indeterminado", danger: "Mercúrio gasoso é neurotóxico", pct: 98 },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 80} direction="left">
              <div className="card">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white text-sm">{item.item}</h3>
                  <span className="text-primary-400 font-bold text-sm whitespace-nowrap">{item.time}</span>
                </div>
                <p className="text-dark-400 text-xs mb-3">{item.danger}</p>
                <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-red-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Impact calculator */}
        <FadeIn>
          <div className="card bg-gradient-to-br from-primary-950/30 to-dark-900 border-primary-500/20">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-primary-400" />
              Calculadora de Impacto
            </h2>
            <p className="text-dark-400 text-sm mb-6">
              Quantos equipamentos eletrônicos você tem em casa que não usa mais?
              Descubra o impacto ambiental de descartá-los incorretamente.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {devices.map((d) => (
                <div key={d.id} className="bg-dark-800/50 rounded-xl p-4 text-center border border-dark-700/50">
                  <d.icon className="w-8 h-8 mx-auto mb-2 text-primary-400" />
                  <p className="text-white text-sm font-semibold mb-2">{d.label}</p>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={quantities[d.id]}
                    onChange={(e) => {
                      setQuantities({ ...quantities, [d.id]: Math.max(0, parseInt(e.target.value) || 0) });
                      setCalculated(false);
                    }}
                    className="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-3 py-2 text-center text-white text-lg font-bold focus:outline-none focus:border-primary-500"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setCalculated(true)}
              className="btn-primary w-full justify-center mb-6"
            >
              <Calculator className="w-4 h-4" />
              Calcular Impacto
            </button>

            {calculated && (totals.water > 0 || totals.co2 > 0) && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                  <Droplets className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <div className="text-2xl font-black text-cyan-400">
                    {totals.water >= 1000000
                      ? `${(totals.water / 1000000).toFixed(1)}M`
                      : totals.water >= 1000
                        ? `${(totals.water / 1000).toFixed(0)}K`
                        : totals.water}
                  </div>
                  <div className="text-xs text-dark-300 mt-1">litros de água contaminados</div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                  <Weight className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                  <div className="text-2xl font-black text-amber-400">{totals.co2.toFixed(0)} kg</div>
                  <div className="text-xs text-dark-300 mt-1">de CO₂ para fabricar novos</div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-black text-yellow-400">{totals.gold} mg</div>
                  <div className="text-xs text-dark-300 mt-1">de ouro recuperável</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                  <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-red-400" />
                  <div className="text-2xl font-black text-red-400">{totals.mercury} mg</div>
                  <div className="text-xs text-dark-300 mt-1">de mercúrio tóxico liberado</div>
                </div>
              </div>
            )}

            {calculated && totals.water === 0 && totals.co2 === 0 && (
              <p className="text-center text-dark-400 text-sm">
                Insira a quantidade de equipamentos acima para ver o impacto.
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
