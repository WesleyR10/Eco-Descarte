"use client";

import { quizQuestions } from "@/data/quiz";
import {
  Brain,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Target,
  Star,
  Share2,
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

type QuizState = "intro" | "playing" | "result";

const difficultyColors = {
  facil: "bg-green-500/20 text-green-400 border-green-500/30",
  medio: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  dificil: "bg-red-500/20 text-red-400 border-red-500/30",
};

const difficultyLabels = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil",
};

export default function QuizPage() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const scorePercentage = useMemo(
    () => Math.round((score / totalQuestions) * 100),
    [score, totalQuestions]
  );

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    const isCorrect = index === question.correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
    } else {
      setStreak(0);
    }
    setAnswers((a) => [...a, isCorrect]);
  }

  function handleNext() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setState("result");
    }
  }

  function handleRestart() {
    setState("intro");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setStreak(0);
    setBestStreak(0);
  }

  function getScoreMessage() {
    if (scorePercentage === 100)
      return "Perfeito! Você é um verdadeiro guardião do meio ambiente! 🏆";
    if (scorePercentage >= 80)
      return "Excelente! Você tem grande conhecimento sobre descarte eletrônico! 🌟";
    if (scorePercentage >= 60)
      return "Bom trabalho! Você está no caminho certo, mas ainda pode aprender mais. 📚";
    if (scorePercentage >= 40)
      return "Razoável. Visite nosso Guia de Descarte para aprimorar seus conhecimentos! 🔄";
    return "Não desanime! O importante é aprender. Confira nosso Guia de Descarte! 📖";
  }

  function getScoreColor() {
    if (scorePercentage >= 80) return "text-primary-400";
    if (scorePercentage >= 60) return "text-amber-400";
    return "text-red-400";
  }

  function getStars() {
    if (scorePercentage >= 90) return 5;
    if (scorePercentage >= 75) return 4;
    if (scorePercentage >= 60) return 3;
    if (scorePercentage >= 40) return 2;
    return 1;
  }

  // Intro screen
  if (state === "intro") {
    return (
      <div className="py-20">
        <div className="container-custom max-w-2xl">
          <div className="card text-center py-12">
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Quiz: Descarte de Lixo Eletrônico
            </h1>
            <p className="text-dark-300 mb-2">
              Teste seus conhecimentos sobre o descarte correto de equipamentos
              eletrônicos e descubra como proteger o meio ambiente da sua
              comunidade.
            </p>
            <p className="text-dark-400 text-sm mb-6">
              {totalQuestions} perguntas • 3 níveis de dificuldade • ~8 minutos
            </p>

            <div className="flex justify-center gap-4 mb-8">
              {(["facil", "medio", "dificil"] as const).map((d) => {
                const count = quizQuestions.filter(
                  (q) => q.difficulty === d
                ).length;
                return (
                  <div
                    key={d}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium ${difficultyColors[d]}`}
                  >
                    {difficultyLabels[d]}: {count}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setState("playing")}
              className="btn-primary mx-auto"
            >
              Começar Quiz
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Result screen
  if (state === "result") {
    const stars = getStars();
    return (
      <div className="py-20">
        <div className="container-custom max-w-2xl">
          <div className="card text-center py-12">
            <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Resultado do Quiz
            </h1>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < stars
                      ? "text-amber-400 fill-amber-400"
                      : "text-dark-700"
                    }`}
                />
              ))}
            </div>

            <p className="text-dark-400 mb-6">{getScoreMessage()}</p>

            <div className={`text-6xl font-black mb-2 ${getScoreColor()}`}>
              {score}/{totalQuestions}
            </div>
            <p className="text-dark-400 text-sm mb-2">
              {scorePercentage}% de acertos
            </p>
            {bestStreak > 1 && (
              <p className="text-amber-400 text-sm mb-6">
                🔥 Melhor sequência: {bestStreak} acertos seguidos
              </p>
            )}

            {/* Answer summary */}
            <div className="flex justify-center gap-1.5 mb-8 flex-wrap">
              {answers.map((correct, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${correct
                      ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  aria-label={`Pergunta ${i + 1}: ${correct ? "correta" : "incorreta"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-dark-800/50 rounded-xl p-3">
                <div className="text-lg font-bold text-primary-400">
                  {answers.filter(Boolean).length}
                </div>
                <div className="text-dark-400 text-xs">Corretas</div>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-3">
                <div className="text-lg font-bold text-red-400">
                  {answers.filter((a) => !a).length}
                </div>
                <div className="text-dark-400 text-xs">Incorretas</div>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-3">
                <div className="text-lg font-bold text-amber-400">
                  {bestStreak}
                </div>
                <div className="text-dark-400 text-xs">Melhor sequência</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handleRestart} className="btn-primary">
                <RotateCcw className="w-4 h-4" />
                Tentar Novamente
              </button>
              <Link href="/guia" className="btn-secondary">
                <Share2 className="w-4 h-4" />
                Ver Guia de Descarte
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="py-20">
      <div className="container-custom max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-dark-400 text-sm flex items-center gap-2">
              <Target className="w-4 h-4" />
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </span>
            <div className="flex items-center gap-3">
              {streak > 1 && (
                <span className="text-amber-400 text-sm font-medium">
                  🔥 {streak}x
                </span>
              )}
              <span className="text-dark-400 text-sm">
                Acertos: {score}
              </span>
            </div>
          </div>
          <div
            className="w-full h-2 bg-dark-800 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-primary-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full border text-xs font-medium ${difficultyColors[question.difficulty]
                }`}
            >
              {difficultyLabels[question.difficulty]}
            </span>
          </div>

          <h2 className="text-xl font-bold text-white mb-6">
            {question.question}
          </h2>

          <div
            className="space-y-3"
            role="radiogroup"
            aria-label="Opções de resposta"
          >
            {question.options.map((option, index) => {
              let optionClass =
                "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 ";

              if (selectedAnswer === null) {
                optionClass +=
                  "border-dark-700/50 bg-dark-800/50 hover:border-primary-500/50 hover:bg-dark-800 cursor-pointer text-dark-200";
              } else if (index === question.correctIndex) {
                optionClass +=
                  "border-primary-500/50 bg-primary-500/10 text-primary-300";
              } else if (index === selectedAnswer) {
                optionClass +=
                  "border-red-500/50 bg-red-500/10 text-red-300";
              } else {
                optionClass +=
                  "border-dark-700/30 bg-dark-800/30 text-dark-500";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={optionClass}
                  disabled={selectedAnswer !== null}
                  role="radio"
                  aria-checked={selectedAnswer === index}
                >
                  <span className="w-7 h-7 rounded-lg bg-dark-700/50 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {selectedAnswer !== null ? (
                      index === question.correctIndex ? (
                        <CheckCircle2 className="w-4 h-4 text-primary-400" />
                      ) : index === selectedAnswer ? (
                        <XCircle className="w-4 h-4 text-red-400" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span className="text-sm">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 animate-fade-in">
              <div
                className={`p-4 rounded-xl border ${selectedAnswer === question.correctIndex
                    ? "bg-primary-500/5 border-primary-500/20"
                    : "bg-red-500/5 border-red-500/20"
                  }`}
              >
                <p className="text-sm font-semibold mb-2 text-white">
                  {selectedAnswer === question.correctIndex
                    ? "✅ Correto!"
                    : "❌ Incorreto"}
                </p>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="btn-primary mt-4 w-full justify-center"
              >
                {currentQuestion < totalQuestions - 1
                  ? "Próxima Pergunta"
                  : "Ver Resultado Final"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
