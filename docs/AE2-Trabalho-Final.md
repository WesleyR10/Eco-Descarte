# ATIVIDADE EXTENSIONISTA II — TRABALHO FINAL

**Curso:** Tecnólogo em Análise e Desenvolvimento de Sistemas

**Disciplina:** Atividade Extensionista II: Tecnologia Aplicada à Inclusão Digital – Projeto

**Etapa:** Trabalho Final

**Aluno:** Wesley Ribas Gonçalves — RU: 5022777

---

## Título

EcoDescarte Digital: Implementação e Aplicação de Ferramenta Web para Descarte Correto de Lixo Eletrônico na Comunidade do Bairro Novo Retiro — Esmeraldas/MG

---

## Setor de Aplicação

Bairro Novo Retiro — Esmeraldas, Minas Gerais.

A comunidade do bairro Novo Retiro, localizada no município de Esmeraldas, região metropolitana de Belo Horizonte/MG, é composta majoritariamente por famílias de classe média e baixa que, em sua maioria, não possuem conhecimento adequado sobre os riscos do descarte incorreto de equipamentos eletrônicos e sobre os locais apropriados para a destinação desses resíduos.

---

## Objetivos de Desenvolvimento Sustentável (ODS)

- **ODS 11 — Cidades e Comunidades Sustentáveis:** Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis, promovendo a gestão adequada de resíduos eletrônicos urbanos.

- **ODS 12 — Consumo e Produção Responsáveis:** Assegurar padrões de produção e de consumo sustentáveis, conscientizando a população sobre a redução da geração de resíduos por meio da prevenção, redução, reciclagem e reuso de equipamentos eletrônicos.

---

## Objetivos

**Objetivo Geral:**

Implementar e aplicar na comunidade do bairro Novo Retiro, em Esmeraldas/MG, a plataforma web EcoDescarte Digital, desenvolvida com Next.js, TypeScript, Tailwind CSS e PostgreSQL, para conscientizar e orientar os moradores sobre o descarte correto de lixo eletrônico, comprovando sua efetividade como ferramenta de inclusão digital e transformação social.

**Objetivos Específicos:**

1. Implementar o frontend da plataforma web utilizando Next.js 16, TypeScript e Tailwind CSS, com design responsivo e acessível.

2. Implementar o backend com API Routes do Next.js e banco de dados PostgreSQL (Supabase) utilizando Prisma ORM.

3. Desenvolver um globo 3D interativo utilizando React Three Fiber e Three.js na página inicial.

4. Implementar o quiz educativo gamificado com 15 perguntas e 3 níveis de dificuldade.

5. Implementar formulário de contato e sugestão de pontos de coleta.

6. Realizar o deploy da plataforma na Vercel com URL pública acessível.

7. Aplicar o projeto na comunidade do bairro Novo Retiro e comprovar sua utilização.

---

## Metodologia

A metodologia adotada para a implementação do projeto EcoDescarte Digital seguiu uma abordagem ágil baseada no Kanban, organizada nas seguintes etapas:

### Diagrama da Metodologia

```
┌──────────────────────┐
│  1. CONFIGURAÇÃO DO  │
│     AMBIENTE         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  2. IMPLEMENTAÇÃO    │
│     DO BANCO DE      │
│     DADOS            │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  3. DESENVOLVIMENTO  │
│     DAS API ROUTES   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  4. DESENVOLVIMENTO  │
│     DO FRONTEND      │
│  (6 páginas + globo  │
│   3D + quiz + form)  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  5. TESTES E         │
│     VALIDAÇÃO        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  6. DEPLOY NA        │
│     VERCEL           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  7. APLICAÇÃO NA     │
│     COMUNIDADE       │
└──────────────────────┘
```

**Etapa 1 — Configuração do Ambiente:**
Configurou-se o ambiente de desenvolvimento com Node.js 22, Next.js 16 (App Router com Turbopack), TypeScript 5, Tailwind CSS 3 e ESLint. O projeto foi versionado com Git e hospedado no GitHub (repositório público).

**Etapa 2 — Implementação do Banco de Dados:**
Criou-se o banco de dados PostgreSQL no Supabase (plataforma de banco de dados como serviço). Utilizou-se o Prisma ORM (versão 7) para modelagem do schema com 8 entidades relacionais: CollectionPoint, AcceptedItem, WasteCategory, CategoryExample, DiscardStep, Danger, QuizResult e ContactMessage. As migrations foram aplicadas automaticamente e um script de seed populou o banco com os dados iniciais (6 pontos de coleta e 6 categorias de lixo eletrônico).

**Etapa 3 — Desenvolvimento das API Routes:**
Implementaram-se 4 endpoints RESTful utilizando as API Routes do Next.js:
- GET/POST /api/collection-points — Listagem e cadastro de pontos de coleta
- GET /api/categories — Listagem de categorias com relações (exemplos, passos, riscos)
- GET/POST /api/quiz-results — Registro e consulta de resultados do quiz com estatísticas
- GET/POST /api/contact — Recebimento de feedback e sugestões da comunidade

**Etapa 4 — Desenvolvimento do Frontend:**
Desenvolveram-se 7 páginas responsivas e acessíveis:
- **Página Inicial:** Hero com globo 3D interativo (React Three Fiber + Three.js), estatísticas animadas com efeito count-up, seção "Como funciona" em 3 passos, preview das categorias e chamada para ação.
- **Guia de Descarte:** 6 categorias expansíveis (celulares, computadores, pilhas, eletrodomésticos, lâmpadas, cabos) com exemplos, passos de descarte, riscos e dicas.
- **Pontos de Coleta:** 8 pontos catalogados com filtros por tipo (órgão público, loja, cooperativa, empresa, programa nacional), distâncias do Novo Retiro, horários e contatos.
- **Quiz Educativo:** 15 perguntas com 3 níveis de dificuldade (fácil, médio, difícil), feedback imediato com explicações, sistema de streak, pontuação com estrelas e persistência no banco.
- **Contato:** Formulário com 3 tipos (feedback, sugestão, sugerir ponto de coleta), validação e envio para o banco de dados.
- **Sobre:** Informações do projeto, ODS, Princípios do Desenho Universal aplicados, tecnologias e dados do autor.

**Etapa 5 — Testes e Validação:**
Realizaram-se testes manuais em diferentes dispositivos (desktop, tablet e celular) e navegadores (Chrome, Firefox, Edge) para validar a responsividade, acessibilidade e funcionalidade de todas as páginas e APIs. Verificou-se o build de produção com sucesso (zero erros de TypeScript e compilação).

**Etapa 6 — Deploy na Vercel:**
Realizou-se o deploy da plataforma na Vercel, conectada ao repositório GitHub para deploy contínuo. Configurou-se a variável de ambiente DATABASE_URL para conexão com o Supabase. A plataforma ficou disponível publicamente na URL: https://eco-descarte.vercel.app

**Etapa 7 — Aplicação na Comunidade:**
Divulgou-se a plataforma entre os moradores do bairro Novo Retiro através do compartilhamento do link via WhatsApp e redes sociais. Os moradores puderam acessar o guia de descarte, consultar os pontos de coleta, realizar o quiz educativo e enviar sugestões de novos pontos de coleta através do formulário de contato.

---

## Resultados Esperados/Obtidos

Com a implementação e aplicação do projeto EcoDescarte Digital, obtiveram-se os seguintes resultados:

1. **Plataforma web funcional:** Desenvolveu-se e publicou-se a plataforma EcoDescarte Digital com 7 páginas responsivas, 4 API Routes, banco de dados PostgreSQL e globo 3D interativo, acessível gratuitamente na Internet.

2. **Guia de descarte completo:** Implementou-se um guia interativo com 6 categorias de lixo eletrônico, cada uma contendo exemplos de equipamentos, passo a passo de descarte correto, riscos do descarte incorreto e dicas práticas de reutilização.

3. **Mapeamento de pontos de coleta:** Catalogaram-se e disponibilizaram-se 8 pontos de coleta na plataforma, com informações de endereço, telefone, horário de funcionamento, tipos de resíduos aceitos e distância aproximada do bairro Novo Retiro.

4. **Quiz educativo gamificado:** Implementou-se um quiz com 15 perguntas em 3 níveis de dificuldade, com feedback imediato, explicações detalhadas, sistema de pontuação com estrelas e persistência dos resultados no banco de dados para análise de engajamento.

5. **Canal de comunicação com a comunidade:** Implementou-se um formulário de contato que permite aos moradores enviar feedback, sugestões e indicar novos pontos de coleta, promovendo a participação ativa da comunidade na melhoria contínua da plataforma.

6. **Aplicação dos Princípios do Desenho Universal:** A plataforma foi desenvolvida com design responsivo (adaptável a qualquer dispositivo), navegação intuitiva, alto contraste, fontes legíveis, botões com tamanho adequado para toque, link de pular para conteúdo (skip-to-content) e atributos ARIA para leitores de tela.

7. **Stack tecnológica profissional:** Utilizaram-se tecnologias modernas e amplamente adotadas no mercado: Next.js 16, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM 7, React Three Fiber, Three.js e Vercel, demonstrando a aplicação prática dos conhecimentos adquiridos no curso de ADS.

8. **Conceito de TI Verde aplicado:** O projeto promove diretamente o conceito de TI Verde ao conscientizar sobre reciclagem de eletrônicos, redução de lixo tecnológico, reuso de equipamentos e descarte ambientalmente adequado.

---

## Considerações Finais

A Atividade Extensionista II permitiu concretizar o projeto EcoDescarte Digital, transformando o levantamento realizado na Atividade Extensionista I em uma plataforma web funcional, acessível e aplicada na comunidade do bairro Novo Retiro, em Esmeraldas/MG.

Os principais aprendizados obtidos durante o desenvolvimento do projeto foram:

- A importância de utilizar tecnologias modernas (Next.js, TypeScript, Prisma, PostgreSQL) para criar soluções escaláveis e profissionais, mesmo em projetos de cunho social.
- A aplicação prática dos 7 Princípios do Desenho Universal no desenvolvimento de interfaces web, garantindo que a plataforma seja acessível para todos os perfis de usuários.
- A relevância do conceito de TI Verde e da economia circular no contexto da Tecnologia da Informação, especialmente no que diz respeito ao descarte correto de equipamentos eletrônicos.
- A experiência de realizar o deploy de uma aplicação completa (frontend + backend + banco de dados) em ambiente de produção, utilizando serviços de nuvem gratuitos (Vercel + Supabase).

As principais dificuldades encontradas foram:

- A configuração do Prisma ORM versão 7 com adaptadores de banco de dados, que exigiu ajustes específicos para compatibilidade com o ambiente serverless da Vercel.
- A catalogação dos pontos de coleta de lixo eletrônico em Esmeraldas/MG, devido à inexistência de um banco de dados público centralizado com essas informações.
- A compatibilidade do Turbopack (bundler do Next.js) com caminhos de diretório contendo caracteres especiais (acentos), que exigiu a utilização de caminhos alternativos durante o desenvolvimento.

Como sugestões de trabalhos futuros, propõe-se:

- Integração com API de geolocalização (Google Maps ou OpenStreetMap) para exibir os pontos de coleta em um mapa interativo.
- Implementação de sistema de notificações para alertar os moradores sobre campanhas de coleta de lixo eletrônico na região.
- Expansão do projeto para outros bairros de Esmeraldas e municípios da região metropolitana de Belo Horizonte.
- Desenvolvimento de versão mobile (Progressive Web App) para facilitar o acesso offline.
- Parcerias com a Prefeitura de Esmeraldas e cooperativas locais para manter os dados de pontos de coleta atualizados.
