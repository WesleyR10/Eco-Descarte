# Instruções para Criar os Diagramas do EcoDescarte Digital

Acesse https://app.diagrams.net (draw.io) — gratuito, sem cadastro.
Clique "Create New Diagram" → "Blank Diagram"

---

## DIAGRAMA 1 — Diagrama de Casos de Uso (UML)

Este diagrama mostra os atores (quem usa) e as funcionalidades do sistema.

### Atores (desenhe como bonecos palito):
- **Morador da Comunidade** (ator principal, à esquerda)
- **Administrador** (ator secundário, à direita)

### Casos de Uso (desenhe como elipses dentro de um retângulo "Sistema EcoDescarte Digital"):

**Morador da Comunidade:**
- Consultar Guia de Descarte
- Selecionar Categoria de Lixo Eletrônico
- Visualizar Passos de Descarte
- Consultar Pontos de Coleta
- Filtrar Pontos por Tipo
- Realizar Quiz Educativo
- Visualizar Resultado do Quiz
- Enviar Feedback
- Sugerir Ponto de Coleta
- Visualizar Informações do Projeto
- Interagir com Globo 3D

**Administrador:**
- Gerenciar Pontos de Coleta
- Gerenciar Categorias de Lixo
- Visualizar Mensagens de Contato
- Consultar Estatísticas do Quiz

### Relações:
- "Selecionar Categoria" <<include>> "Visualizar Passos de Descarte"
- "Realizar Quiz" <<include>> "Visualizar Resultado do Quiz"
- "Sugerir Ponto de Coleta" <<extend>> "Enviar Feedback"
- "Filtrar Pontos por Tipo" <<extend>> "Consultar Pontos de Coleta"

### Como fazer no draw.io:
1. No menu lateral, procure "UML" → "Use Case"
2. Arraste os atores (Actor) para os lados
3. Arraste elipses (Use Case) para o centro
4. Desenhe um retângulo grande ao redor das elipses com título "EcoDescarte Digital"
5. Conecte atores às elipses com linhas
6. Para <<include>> e <<extend>>, use setas tracejadas com o texto

---

## DIAGRAMA 2 — Diagrama de Classes / Entidade-Relacionamento

Este diagrama mostra a estrutura do banco de dados PostgreSQL.

### Entidades e Atributos:

**CollectionPoint**
- id: String (PK)
- name: String
- address: String
- city: String
- state: String
- phone: String?
- hours: String?
- type: String
- distance: String?
- active: Boolean
- createdAt: DateTime
- updatedAt: DateTime

**AcceptedItem**
- id: String (PK)
- name: String
- collectionPointId: String (FK)

**WasteCategory**
- id: String (PK)
- slug: String (unique)
- name: String
- icon: String
- description: String
- tip: String
- recyclable: Boolean
- order: Int

**CategoryExample**
- id: String (PK)
- name: String
- categoryId: String (FK)

**DiscardStep**
- id: String (PK)
- step: Int
- text: String
- categoryId: String (FK)

**Danger**
- id: String (PK)
- text: String
- categoryId: String (FK)

**QuizResult**
- id: String (PK)
- score: Int
- total: Int
- percentage: Float
- bestStreak: Int
- timeSpent: Int?
- createdAt: DateTime

**ContactMessage**
- id: String (PK)
- name: String
- email: String?
- message: String
- type: String
- read: Boolean
- createdAt: DateTime

### Relacionamentos:
- CollectionPoint 1 ──── N AcceptedItem
- WasteCategory 1 ──── N CategoryExample
- WasteCategory 1 ──── N DiscardStep
- WasteCategory 1 ──── N Danger
- QuizResult (independente)
- ContactMessage (independente)

### Como fazer no draw.io:
1. No menu lateral, procure "UML" → "Class"
2. Para cada entidade, arraste um "Class" e preencha:
   - Nome da classe no topo (negrito)
   - Atributos no meio
   - Métodos embaixo (pode deixar vazio)
3. Conecte com linhas e coloque "1" e "N" nas pontas
4. Use cores diferentes para agrupar (verde para pontos de coleta, azul para categorias, etc.)

---

## DIAGRAMA 3 — Diagrama de Fluxo da Metodologia (para AE I)

### Etapas (use retângulos com setas):

```
[Início]
    ↓
[1. Levantamento do Problema]
  - Pesquisa informal com moradores
  - Identificação da carência informacional
    ↓
[2. Pesquisa de Soluções]
  - Análise de alternativas tecnológicas
  - Escolha: plataforma web responsiva
    ↓
[3. Definição da Arquitetura]
  - Next.js + TypeScript + Tailwind
  - PostgreSQL + Prisma ORM
  - Vercel (hospedagem)
    ↓
[4. Modelagem do Banco de Dados]
  - 8 entidades relacionais
  - Schema Prisma + migrations
    ↓
[5. Prototipação das Interfaces]
  - 7 páginas responsivas
  - Princípios do Desenho Universal
    ↓
[6. Catalogação dos Pontos de Coleta]
  - 8 pontos em Esmeraldas/MG e região
  - Órgãos públicos, lojas, cooperativas
    ↓
[7. Elaboração do Conteúdo Educativo]
  - 6 categorias de lixo eletrônico
  - 15 perguntas do quiz
    ↓
[Fim - Levantamento Concluído]
```

### Como fazer no draw.io:
1. Use "Flowchart" no menu lateral
2. Arraste retângulos arredondados para cada etapa
3. Conecte com setas para baixo
4. Use cores: verde para início/fim, azul para etapas
5. Adicione texto descritivo dentro ou ao lado de cada retângulo

---

## DIAGRAMA 4 — Diagrama de Fluxo da Metodologia (para AE II)

### Etapas:

```
[Início]
    ↓
[1. Configuração do Ambiente]
  - Node.js 22, Next.js 16, Git/GitHub
    ↓
[2. Implementação do Banco de Dados]
  - PostgreSQL (Supabase)
  - Prisma ORM 7, migrations, seed
    ↓
[3. Desenvolvimento das API Routes]
  - 4 endpoints RESTful
  - CRUD pontos de coleta, categorias, quiz, contato
    ↓
[4. Desenvolvimento do Frontend]
  - 7 páginas responsivas
  - Globo 3D (React Three Fiber)
  - Quiz gamificado, formulário de contato
    ↓
[5. Testes e Validação]
  - Testes em desktop, tablet, celular
  - Chrome, Firefox, Edge
    ↓
[6. Deploy na Vercel]
  - Deploy contínuo via GitHub
  - URL pública acessível
    ↓
[7. Aplicação na Comunidade]
  - Divulgação no bairro Novo Retiro
  - Compartilhamento via WhatsApp
    ↓
[Fim - Projeto Implementado e Aplicado]
```

---

## DIAGRAMA 5 — Diagrama de Arquitetura do Sistema (opcional, impressiona muito)

### Componentes:

```
┌─────────────────────────────────────────────┐
│              USUÁRIO (Navegador)             │
│  Desktop / Tablet / Celular                 │
└──────────────────┬──────────────────────────┘
                   │ HTTPS
                   ▼
┌─────────────────────────────────────────────┐
│              VERCEL (Hospedagem)             │
│  ┌─────────────────────────────────────┐    │
│  │         NEXT.JS 16 (Frontend)       │    │
│  │  - React + TypeScript               │    │
│  │  - Tailwind CSS                     │    │
│  │  - React Three Fiber (3D)           │    │
│  │  - 7 páginas responsivas            │    │
│  └──────────────┬──────────────────────┘    │
│                 │                            │
│  ┌──────────────▼──────────────────────┐    │
│  │      NEXT.JS API ROUTES (Backend)   │    │
│  │  - /api/collection-points           │    │
│  │  - /api/categories                  │    │
│  │  - /api/quiz-results                │    │
│  │  - /api/contact                     │    │
│  └──────────────┬──────────────────────┘    │
│                 │ Prisma ORM 7              │
└─────────────────┼───────────────────────────┘
                  │ PostgreSQL Protocol
                  ▼
┌─────────────────────────────────────────────┐
│           SUPABASE (Banco de Dados)         │
│  PostgreSQL                                 │
│  - CollectionPoint + AcceptedItem           │
│  - WasteCategory + Examples + Steps         │
│  - QuizResult                               │
│  - ContactMessage                           │
└─────────────────────────────────────────────┘
```

### Como fazer no draw.io:
1. Use retângulos grandes para cada camada
2. Coloque retângulos menores dentro para os componentes
3. Conecte com setas rotuladas
4. Use cores: azul para frontend, verde para backend, laranja para banco

---

## DICA FINAL

Depois de criar cada diagrama no draw.io:
1. File → Export as → PNG (ou JPEG)
2. Resolução: 2x (para ficar nítido)
3. Cole a imagem no documento Word da Uninter
4. Adicione legenda embaixo: "Figura X — Descrição do diagrama"
