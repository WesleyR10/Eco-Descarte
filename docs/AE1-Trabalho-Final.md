# ATIVIDADE EXTENSIONISTA I — TRABALHO FINAL

**Curso:** Tecnólogo em Análise e Desenvolvimento de Sistemas

**Disciplina:** Atividade Extensionista I: Tecnologia Aplicada à Inclusão Digital – Levantamento

**Etapa:** Trabalho Final

**Aluno:** Wesley Ribas Gonçalves — RU: 5022777

---

## Título

EcoDescarte Digital: Ferramenta Web para Conscientização e Orientação sobre o Descarte Correto de Lixo Eletrônico na Comunidade do Bairro Novo Retiro — Esmeraldas/MG

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

Desenvolver uma plataforma web educativa e interativa, utilizando as tecnologias Next.js, TypeScript, Tailwind CSS e PostgreSQL, para conscientizar e orientar os moradores do bairro Novo Retiro, em Esmeraldas/MG, sobre o descarte correto de lixo eletrônico, promovendo a inclusão digital e a sustentabilidade ambiental.

**Objetivos Específicos:**

1. Realizar o levantamento das necessidades da comunidade do bairro Novo Retiro em relação ao descarte de lixo eletrônico, identificando os principais problemas e carências informacionais.

2. Pesquisar e catalogar os pontos de coleta de lixo eletrônico disponíveis em Esmeraldas/MG e na região metropolitana de Belo Horizonte.

3. Desenvolver um guia interativo de descarte, utilizando a linguagem de programação TypeScript e o framework Next.js, categorizando os tipos de lixo eletrônico com orientações específicas para cada categoria.

4. Implementar um quiz educativo gamificado para engajar os moradores na aprendizagem sobre descarte correto e impactos ambientais.

5. Criar um banco de dados relacional, utilizando PostgreSQL e Prisma ORM, para armazenar os pontos de coleta e categorias de resíduos.

6. Aplicar os 7 Princípios do Desenho Universal no desenvolvimento da interface.

7. Disponibilizar a plataforma na Internet, utilizando a Vercel para hospedagem.

---

## Metodologia

A metodologia adotada para o desenvolvimento do projeto EcoDescarte Digital seguiu uma abordagem ágil simplificada, baseada no Kanban, organizada nas seguintes etapas sequenciais:

### Diagrama da Metodologia

```
┌─────────────────┐
│  1. LEVANTAMENTO │
│   DO PROBLEMA    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. PESQUISA DE  │
│    SOLUÇÕES      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. DEFINIÇÃO    │
│  DA ARQUITETURA  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. MODELAGEM    │
│  DO BANCO DE     │
│     DADOS        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  5. PROTOTIPAÇÃO │
│  DAS INTERFACES  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  6. CATALOGAÇÃO  │
│  DOS PONTOS DE   │
│     COLETA       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  7. ELABORAÇÃO   │
│  DO CONTEÚDO     │
│   EDUCATIVO      │
└─────────────────┘
```

**Etapa 1 — Levantamento do Problema:**
Realizou-se uma pesquisa informal junto aos moradores do bairro Novo Retiro, em Esmeraldas/MG, para identificar o nível de conhecimento da comunidade sobre o descarte correto de lixo eletrônico. Constatou-se que a maioria dos moradores descarta equipamentos eletrônicos no lixo comum por desconhecimento dos riscos ambientais e dos locais adequados para descarte.

**Etapa 2 — Pesquisa de Soluções:**
Pesquisaram-se alternativas tecnológicas para solucionar o problema identificado, considerando os conhecimentos adquiridos no curso de Análise e Desenvolvimento de Sistemas. Optou-se pelo desenvolvimento de uma plataforma web por ser acessível via navegador (sem necessidade de instalação), responsiva (funciona em celulares e computadores) e de fácil compartilhamento na comunidade.

**Etapa 3 — Definição da Arquitetura:**
Definiu-se a arquitetura tecnológica do projeto: Next.js 16 como framework frontend e backend (API Routes), TypeScript como linguagem de programação, Tailwind CSS para estilização responsiva, PostgreSQL (Supabase) como banco de dados relacional, Prisma ORM para modelagem e acesso ao banco, React Three Fiber para visualização 3D interativa, e Vercel para hospedagem e deploy contínuo.

**Etapa 4 — Modelagem do Banco de Dados:**
Modelou-se o banco de dados relacional com as seguintes entidades: CollectionPoint (pontos de coleta), AcceptedItem (itens aceitos por ponto), WasteCategory (categorias de lixo eletrônico), CategoryExample (exemplos por categoria), DiscardStep (passos de descarte), Danger (riscos do descarte incorreto), QuizResult (resultados dos quizzes) e ContactMessage (mensagens da comunidade).

**Etapa 5 — Prototipação das Interfaces:**
Projetaram-se as interfaces seguindo os 7 Princípios do Desenho Universal: design responsivo (adaptável), navegação intuitiva, alto contraste e fontes legíveis (informação de fácil percepção), botões com tamanho adequado para toque (baixo esforço físico), e feedback imediato no quiz (tolerância ao erro).

**Etapa 6 — Catalogação dos Pontos de Coleta:**
Pesquisaram-se e catalogaram-se os pontos de coleta de lixo eletrônico em Esmeraldas/MG e região metropolitana de BH, incluindo órgãos públicos (Prefeitura, Ecopontos SLU), lojas com programas de logística reversa (Magazine Luiza, Casas Bahia), cooperativas de catadores, empresas de reciclagem e programas nacionais (Papa-Pilhas).

**Etapa 7 — Elaboração do Conteúdo Educativo:**
Elaborou-se o conteúdo educativo sobre descarte de lixo eletrônico, organizado em 6 categorias (celulares/tablets, computadores/notebooks, pilhas/baterias, eletrodomésticos, lâmpadas, cabos/acessórios), com informações sobre riscos, passos de descarte correto e dicas práticas. Também foram elaboradas 15 perguntas para o quiz educativo com 3 níveis de dificuldade.

---

## Resultados Esperados/Obtidos

Com o levantamento realizado na Atividade Extensionista I, obtiveram-se os seguintes resultados:

1. **Mapeamento do problema:** Identificou-se que a comunidade do bairro Novo Retiro carece de informações acessíveis sobre o descarte correto de lixo eletrônico, sendo que a maioria dos moradores desconhece os riscos ambientais e os locais adequados para descarte.

2. **Catalogação de pontos de coleta:** Foram identificados e catalogados 8 pontos de coleta de lixo eletrônico na região, incluindo a Prefeitura de Esmeraldas, Ecopontos da SLU em BH, lojas com logística reversa, cooperativas e programas nacionais como o Papa-Pilhas.

3. **Definição da solução tecnológica:** Definiu-se a arquitetura completa da plataforma web EcoDescarte Digital, com stack moderna (Next.js, TypeScript, PostgreSQL, Prisma) capaz de atender às necessidades identificadas.

4. **Modelagem do banco de dados:** Criou-se o modelo relacional com 8 entidades, permitindo o armazenamento estruturado de pontos de coleta, categorias de lixo, conteúdo educativo e interações dos usuários.

5. **Conteúdo educativo:** Elaboraram-se orientações detalhadas de descarte para 6 categorias de lixo eletrônico e 15 perguntas para o quiz educativo, fundamentadas em legislação brasileira (Lei 12.305/2010, Resolução CONAMA 401/2008).

6. **Prototipação:** Definiram-se as interfaces da plataforma seguindo os Princípios do Desenho Universal, garantindo acessibilidade e usabilidade para todos os perfis de usuários da comunidade.

---

## Considerações Finais

A Atividade Extensionista I permitiu realizar o levantamento completo do problema de descarte de lixo eletrônico na comunidade do bairro Novo Retiro, em Esmeraldas/MG, bem como a pesquisa e definição da solução tecnológica a ser implementada.

O principal aprendizado obtido foi a compreensão da dimensão do problema do lixo eletrônico no Brasil — o país gera mais de 2 milhões de toneladas de e-lixo por ano, sendo o 5º maior produtor mundial, com apenas 3% reciclado corretamente. Na comunidade local, essa realidade se reflete na falta de informação e na ausência de ferramentas digitais acessíveis que orientem os moradores.

A principal dificuldade encontrada foi a catalogação dos pontos de coleta, uma vez que não existe um banco de dados público centralizado com essas informações para o município de Esmeraldas. A pesquisa foi realizada manualmente, consultando a prefeitura, lojas e cooperativas da região.

Como trabalho futuro, na Atividade Extensionista II, pretende-se implementar a plataforma web EcoDescarte Digital, realizar o deploy na Internet e aplicar o projeto na comunidade do bairro Novo Retiro, comprovando sua efetividade como ferramenta de inclusão digital e conscientização ambiental. Sugere-se também a expansão do projeto para outros bairros de Esmeraldas e a integração com APIs de geolocalização para facilitar a localização dos pontos de coleta.
