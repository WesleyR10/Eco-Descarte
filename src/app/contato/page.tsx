"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Lightbulb,
  AlertCircle,
} from "lucide-react";

type FormType = "feedback" | "sugestao" | "ponto_coleta";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typeOptions: { value: FormType; label: string; icon: any; desc: string }[] = [
  {
    value: "feedback",
    label: "Feedback",
    icon: MessageSquare,
    desc: "Conte o que achou do EcoDescarte",
  },
  {
    value: "sugestao",
    label: "Sugestão",
    icon: Lightbulb,
    desc: "Sugira melhorias para a plataforma",
  },
  {
    value: "ponto_coleta",
    label: "Sugerir Ponto de Coleta",
    icon: MapPin,
    desc: "Conhece um ponto de coleta? Nos avise!",
  },
];

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<FormType>("feedback");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setErrorMsg("Nome e mensagem são obrigatórios.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, type }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setType("feedback");
    } catch {
      setErrorMsg("Erro ao enviar mensagem. Tente novamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-20">
        <div className="container-custom max-w-2xl">
          <div className="card text-center py-16">
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Mensagem enviada!
            </h1>
            <p className="text-dark-300 mb-8">
              Obrigado por contribuir com o EcoDescarte Digital. Sua
              participação ajuda a melhorar o descarte de lixo eletrônico em
              Esmeraldas/MG.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-primary mx-auto"
            >
              Enviar outra mensagem
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container-custom max-w-2xl">
        <div className="mb-8">
          <h1 className="section-title text-white">
            Fale <span className="gradient-text">Conosco</span>
          </h1>
          <p className="section-subtitle">
            Envie feedback, sugestões ou indique um ponto de coleta na sua
            região. Sua contribuição é essencial para a comunidade.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card">
          {/* Type selector */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-dark-300 uppercase tracking-wider mb-3 block">
              Tipo de mensagem
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {typeOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setType(opt.value)}
                  className={`p-3 rounded-xl border text-left transition-all ${type === opt.value
                    ? "border-primary-500/50 bg-primary-500/10"
                    : "border-dark-700/50 bg-dark-800/50 hover:border-dark-600"
                    }`}
                >
                  <opt.icon
                    className={`w-5 h-5 mb-2 ${type === opt.value ? "text-primary-400" : "text-dark-400"
                      }`}
                  />
                  <div
                    className={`text-sm font-semibold ${type === opt.value ? "text-primary-300" : "text-dark-200"
                      }`}
                  >
                    {opt.label}
                  </div>
                  <div className="text-xs text-dark-400 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-sm font-medium text-dark-300 mb-1.5 block"
            >
              Nome *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              required
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-dark-300 mb-1.5 block"
            >
              E-mail <span className="text-dark-500">(opcional)</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all text-sm"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-sm font-medium text-dark-300 mb-1.5 block"
            >
              {type === "ponto_coleta"
                ? "Descreva o ponto de coleta (nome, endereço, o que aceita) *"
                : "Mensagem *"}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                type === "ponto_coleta"
                  ? "Ex: Supermercado X na Rua Y aceita pilhas e baterias..."
                  : "Escreva sua mensagem aqui..."
              }
              required
              rows={5}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all text-sm resize-none"
            />
          </div>

          {/* Error */}
          {status === "error" && errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
