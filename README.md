# ♻️ EcoDescarte Digital — Ferramenta Web de Descarte Correto de Lixo Eletrônico

## 📋 Sobre o Projeto

O **EcoDescarte Digital** é uma plataforma web educativa e interativa desenvolvida como projeto de **Atividade Extensionista** do curso de **Tecnólogo em Análise e Desenvolvimento de Sistemas** do **Centro Universitário Internacional Uninter**.

O projeto tem como objetivo promover a **conscientização sobre o descarte correto de lixo eletrônico (e-lixo)** na comunidade do **bairro Novo Retiro, em Esmeraldas/MG**, utilizando tecnologia da informação como ferramenta de **inclusão digital** e **transformação social**.

### 🎯 Problema Identificado

O Brasil é o **5º maior produtor de lixo eletrônico do mundo**, gerando mais de **2 milhões de toneladas por ano**. Apenas **3% desse total é reciclado corretamente**. Na comunidade do bairro Novo Retiro, em Esmeraldas/MG, a falta de informação sobre o descarte adequado de equipamentos eletrônicos contribui para a contaminação do solo e da água por metais pesados como chumbo, mercúrio e cádmio.

### 💡 Solução Proposta

Uma **ferramenta web** onde o usuário:
- Seleciona o tipo de equipamento eletrônico que deseja descartar
- Recebe orientações detalhadas sobre como descartar corretamente
- Visualiza pontos de coleta próximos em Esmeraldas/MG e região
- Testa seus conhecimentos através de um quiz interativo educativo
- Aprende sobre os impactos ambientais do descarte incorreto

---

## 🌍 Alinhamento com ODS da ONU

| ODS | Descrição | Relação com o Projeto |
|-----|-----------|----------------------|
| **ODS 11** | Cidades e Comunidades Sustentáveis | Promover a gestão adequada de resíduos eletrônicos urbanos |
| **ODS 12** | Consumo e Produção Responsáveis | Conscientizar sobre padrões sustentáveis de consumo e descarte |

---

## ♿ Princípios do Desenho Universal Aplicados

| # | Princípio | Aplicação no Projeto |
|---|-----------|---------------------|
| 1 | **Igualitário** | Interface acessível para todas as pessoas |
| 2 | **Adaptável** | Design responsivo (desktop, tablet, celular) |
| 3 | **Intuitivo** | Navegação simples, linguagem clara e direta |
| 4 | **Informação de fácil percepção** | Alto contraste, ícones descritivos, textos legíveis |
| 5 | **Tolerância ao erro** | Quiz com feedback imediato e explicações |
| 6 | **Baixo esforço físico** | Interações simples com cliques/toques |
| 7 | **Dimensão e espaço para uso** | Botões e áreas de toque com tamanho adequado |

---

## 🏗️ Premissas Atendidas

1. ✅ **Viés de inclusão digital** com uso de Tecnologia da Informação
2. ✅ **Aplicação em setor da sociedade** — Bairro Novo Retiro, Esmeraldas/MG
3. ✅ **Relevância dentro do curso** — Desenvolvimento web (ADS), TI Verde
4. ✅ **Foco em ODS** — ODS 11 e ODS 12

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|-----------|--------|
| **Next.js 16** | Framework React com App Router e SSR |
| **TypeScript** | Tipagem estática para código mais seguro |
| **Tailwind CSS** | Estilização responsiva e moderna |
| **React Three Fiber** | Globo 3D interativo na página inicial |
| **Lucide React** | Biblioteca de ícones |
| **Vercel** | Hospedagem gratuita com deploy automático |

---

## 📁 Estrutura do Projeto

```
eco-descarte/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── page.tsx            # Página inicial (Hero + Globo 3D + Stats)
│   │   ├── guia/page.tsx       # Guia de descarte por categoria
│   │   ├── pontos-de-coleta/   # Pontos de coleta com filtros
│   │   ├── quiz/page.tsx       # Quiz interativo educativo
│   │   └── sobre/page.tsx      # Sobre o projeto, ODS, autor
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Header.tsx          # Navegação responsiva
│   │   ├── Footer.tsx          # Rodapé com links e ODS
│   │   └── Globe.tsx           # Globo 3D interativo
│   └── data/                   # Dados estáticos
│       ├── categories.ts       # Categorias de lixo eletrônico
│       ├── collection-points.ts # Pontos de coleta
│       ├── quiz.ts             # Perguntas do quiz
│       └── stats.ts            # Estatísticas sobre e-lixo
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🚀 Como Executar

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar na pasta
cd eco-descarte

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:3000
```

---

## 📊 Funcionalidades

### 🏠 Página Inicial
- Globo 3D interativo representando o impacto global do e-lixo
- Estatísticas impactantes sobre lixo eletrônico no Brasil
- Chamadas para ação direcionando ao guia e quiz

### 📖 Guia de Descarte
- 6 categorias de lixo eletrônico (celulares, computadores, pilhas, eletrodomésticos, lâmpadas, cabos)
- Passo a passo de descarte correto para cada categoria
- Riscos do descarte incorreto
- Dicas práticas de reutilização e doação

### 📍 Pontos de Coleta
- Mapeamento de pontos de coleta em Esmeraldas/MG e região metropolitana de BH
- Filtros por tipo (órgão público, loja, cooperativa, empresa)
- Informações de contato, horário e tipos aceitos

### 🧠 Quiz Educativo
- 10 perguntas sobre descarte de lixo eletrônico
- Feedback imediato com explicações detalhadas
- Sistema de pontuação com resultado final
- Gamificação para engajar o usuário

### ℹ️ Sobre o Projeto
- Informações sobre ODS 11 e 12
- Princípios do Desenho Universal aplicados
- Tecnologias utilizadas
- Dados do autor e instituição

---

## 📝 Atividade Extensionista — Informações

| Campo | Valor |
|-------|-------|
| **Curso** | Tecnólogo em Análise e Desenvolvimento de Sistemas |
| **Disciplina** | Atividade Extensionista: Tecnologia Aplicada à Inclusão Digital |
| **Aluno** | Wesley Ribas Gonçalves |
| **RU** | 5022777 |
| **Instituição** | Centro Universitário Internacional Uninter |
| **Setor de Aplicação** | Bairro Novo Retiro — Esmeraldas/MG |
| **ODS** | 11 (Cidades Sustentáveis) e 12 (Consumo Responsável) |

---

## 📄 Entregas

### Atividade Extensionista I — Levantamento
- Mapeamento do problema de descarte de lixo eletrônico na comunidade
- Pesquisa de alternativas tecnológicas para solução
- Proposta de tema e trabalho final com metodologia

### Atividade Extensionista II — Projeto
- Desenvolvimento completo da plataforma web
- Diagramas e documentação do projeto (Kanban)
- Implementação e deploy na Vercel
- Comprovação de aplicação na comunidade local

---

## 📜 Licença

Projeto acadêmico desenvolvido para fins educacionais — Atividade Extensionista Uninter 2026.
