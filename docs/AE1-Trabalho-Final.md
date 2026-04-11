# ATIVIDADES EXTENSIONISTAS — Proposta de Tema / Trabalho Final

**Curso:** (X) CST em Análise e Desenvolvimento de Sistemas

**Disciplina:** (X) Atividade Extensionista I: Tecnologia Aplicada à Inclusão Digital – Levantamento

**Etapa:** (X) Trabalho final

| Aluno | RU |
|---|---|
| Wesley Ribas Gonçalves | 5022777 |

---

## Título

EcoDescarte Digital: Levantamento de Necessidades e Planejamento de Ferramenta Web para Orientação sobre o Descarte Correto de Lixo Eletrônico no Bairro Novo Retiro — Esmeraldas/MG

---

## Setor de Aplicação

Bairro Novo Retiro — Esmeraldas, Minas Gerais.

A comunidade do bairro Novo Retiro, localizada no município de Esmeraldas, região metropolitana de Belo Horizonte/MG, é composta majoritariamente por famílias de classe média e baixa. A maioria dos moradores não possui conhecimento adequado sobre os riscos do descarte incorreto de equipamentos eletrônicos, tampouco sobre os locais apropriados para a destinação desses resíduos na região.

---

## Objetivos de Desenvolvimento Sustentável (ODS)

(X) 11. Cidades e comunidades sustentáveis
(X) 12. Consumo e produção responsáveis

O ODS 11 se relaciona ao projeto por promover a gestão adequada de resíduos eletrônicos urbanos, tornando a comunidade mais sustentável. O ODS 12 se relaciona por conscientizar a população sobre padrões sustentáveis de consumo e descarte de equipamentos eletrônicos, incentivando a reciclagem e o reuso.

---

## Objetivos

**Objetivo Geral:**

Realizar o levantamento das necessidades da comunidade do bairro Novo Retiro, em Esmeraldas/MG, em relação ao descarte de lixo eletrônico, e planejar uma plataforma web educativa utilizando Next.js, TypeScript e PostgreSQL para orientar os moradores sobre o descarte correto.

**Objetivos Específicos:**

1. Mapear as necessidades da comunidade do bairro Novo Retiro em relação ao descarte de lixo eletrônico, identificando os principais problemas e a carência de informações acessíveis sobre o tema.

2. Pesquisar e catalogar os pontos de coleta de lixo eletrônico disponíveis em Esmeraldas/MG e na região metropolitana de Belo Horizonte, utilizando consultas à Prefeitura, lojas e cooperativas locais.

3. Definir a arquitetura tecnológica da plataforma web, utilizando o framework Next.js com a linguagem TypeScript para o frontend, o banco de dados PostgreSQL com Prisma ORM para o backend, e a plataforma Vercel para hospedagem.

4. Modelar o banco de dados relacional com Prisma ORM, estruturando as entidades necessárias para armazenar pontos de coleta, categorias de lixo eletrônico, conteúdo educativo e interações dos usuários.

5. Elaborar o conteúdo educativo sobre descarte de lixo eletrônico, organizando as informações em categorias (celulares, computadores, pilhas, eletrodomésticos, lâmpadas e cabos) com orientações de descarte fundamentadas na Lei 12.305/2010.

6. Projetar as interfaces da plataforma aplicando os 7 Princípios do Desenho Universal, garantindo acessibilidade para todos os perfis de usuários da comunidade.

---

## Metodologia

A metodologia adotada para o levantamento do projeto EcoDescarte Digital seguiu uma abordagem ágil simplificada, baseada no Kanban, organizada nas seguintes etapas sequenciais:

*[Inserir aqui a imagem do Diagrama 3 — Fluxo da Metodologia AE I, gerado no Mermaid Live]*

*Figura 1 — Diagrama de fluxo da metodologia aplicada no levantamento do projeto EcoDescarte Digital: apresenta a sequência de 7 etapas desde o levantamento do problema até a elaboração do conteúdo educativo.*

**Etapa 1 — Levantamento do Problema:**
Realizou-se uma pesquisa informal junto aos moradores do bairro Novo Retiro, em Esmeraldas/MG, para identificar o nível de conhecimento da comunidade sobre o descarte correto de lixo eletrônico. Constatou-se que a maioria dos moradores descarta equipamentos eletrônicos no lixo comum por desconhecimento dos riscos ambientais e dos locais adequados para descarte.

**Etapa 2 — Pesquisa de Soluções:**
Pesquisaram-se alternativas tecnológicas para solucionar o problema identificado, considerando os conhecimentos adquiridos no curso de Análise e Desenvolvimento de Sistemas. Optou-se pelo desenvolvimento de uma plataforma web por ser acessível via navegador (sem necessidade de instalação), responsiva (funciona em celulares e computadores) e de fácil compartilhamento na comunidade.

**Etapa 3 — Definição da Arquitetura:**
Definiu-se a arquitetura tecnológica do projeto: Next.js 16 como framework frontend e backend (API Routes), TypeScript como linguagem de programação, Tailwind CSS para estilização responsiva, PostgreSQL (Supabase) como banco de dados relacional, Prisma ORM para modelagem e acesso ao banco, React Three Fiber para visualização 3D interativa, e Vercel para hospedagem e deploy contínuo.

**Etapa 4 — Modelagem do Banco de Dados:**
Modelou-se o banco de dados relacional com 8 entidades: CollectionPoint (pontos de coleta), AcceptedItem (itens aceitos por ponto), WasteCategory (categorias de lixo eletrônico), CategoryExample (exemplos por categoria), DiscardStep (passos de descarte), Danger (riscos do descarte incorreto), QuizResult (resultados dos quizzes) e ContactMessage (mensagens da comunidade).

*[Inserir aqui a imagem do Diagrama 2 — Entidade-Relacionamento, gerado no Mermaid Live]*

*Figura 2 — Diagrama Entidade-Relacionamento do banco de dados: demonstra a estrutura de dados e os relacionamentos entre as 8 entidades do sistema.*

**Etapa 5 — Prototipação das Interfaces:**
Projetaram-se as interfaces seguindo os 7 Princípios do Desenho Universal: design responsivo (adaptável), navegação intuitiva, alto contraste e fontes legíveis (informação de fácil percepção), botões com tamanho adequado para toque (baixo esforço físico), e feedback imediato no quiz (tolerância ao erro).

**Etapa 6 — Catalogação dos Pontos de Coleta:**
Pesquisaram-se e catalogaram-se 8 pontos de coleta de lixo eletrônico em Esmeraldas/MG e região metropolitana de BH, incluindo: Prefeitura Municipal de Esmeraldas, Ecoponto SLU Pampulha, Magazine Luiza (Programa Descarte Consciente), Casas Bahia (Logística Reversa), Cooperativa de Catadores de Esmeraldas, GM&C Reciclagem de Eletrônicos e Papa-Pilhas (Programa Nacional).

**Etapa 7 — Elaboração do Conteúdo Educativo:**
Elaborou-se o conteúdo educativo organizado em 6 categorias de lixo eletrônico (celulares/tablets, computadores/notebooks, pilhas/baterias, eletrodomésticos, lâmpadas, cabos/acessórios), com informações sobre riscos ambientais, passos de descarte correto e dicas práticas. Também foram elaboradas 15 perguntas para o quiz educativo com 3 níveis de dificuldade (fácil, médio, difícil), fundamentadas na Lei 12.305/2010 (Política Nacional de Resíduos Sólidos) e na Resolução CONAMA 401/2008.

---

## Resultados Esperados/Obtidos

Com o levantamento realizado na Atividade Extensionista I, obtiveram-se os seguintes resultados:

1. **Mapeamento do problema:** Identificou-se que a comunidade do bairro Novo Retiro carece de informações acessíveis sobre o descarte correto de lixo eletrônico. A maioria dos moradores desconhece que equipamentos eletrônicos contêm substâncias tóxicas (chumbo, mercúrio, cádmio) e que existem locais específicos para descarte na região.

2. **Catalogação de 8 pontos de coleta:** Foram identificados e catalogados 8 pontos de coleta de lixo eletrônico acessíveis aos moradores do Novo Retiro, com informações de endereço, telefone, horário, tipos aceitos e distância aproximada do bairro.

3. **Definição da arquitetura tecnológica:** Definiu-se a stack completa do projeto — Next.js 16 (TypeScript), Tailwind CSS, PostgreSQL (Supabase), Prisma ORM 7, React Three Fiber e Vercel — garantindo uma solução moderna, escalável e gratuita para hospedagem.

4. **Modelagem do banco de dados:** Criou-se o modelo relacional com 8 entidades e seus relacionamentos, documentado através de Diagrama Entidade-Relacionamento (Figura 2), permitindo o armazenamento estruturado de todos os dados do sistema.

5. **Conteúdo educativo completo:** Elaboraram-se orientações detalhadas de descarte para 6 categorias de lixo eletrônico e 15 perguntas para o quiz educativo, fundamentadas na legislação brasileira vigente.

6. **Protótipos das interfaces:** Definiram-se as 7 páginas da plataforma (Início, Guia de Descarte, Pontos de Coleta, Quiz, Contato, Sobre) seguindo os Princípios do Desenho Universal, garantindo acessibilidade e usabilidade.

**Link do repositório GitHub com o código do projeto:** https://github.com/WesleyR10/Eco-Descarte

---

## Considerações Finais

O desenvolvimento da Atividade Extensionista I proporcionou os seguintes aprendizados:

1. **Compreensão da dimensão do problema do lixo eletrônico no Brasil:** O país gera mais de 2 milhões de toneladas de e-lixo por ano, sendo o 5º maior produtor mundial, com apenas 3% reciclado corretamente. Na comunidade do bairro Novo Retiro, essa realidade se manifesta na falta de informação e no descarte incorreto de equipamentos eletrônicos no lixo comum.

2. **Importância da aplicação prática dos conhecimentos do curso de ADS:** O levantamento demonstrou que os conhecimentos adquiridos em disciplinas como Banco de Dados, Desenvolvimento Web e Engenharia de Software podem ser aplicados diretamente na resolução de problemas reais da comunidade, utilizando tecnologias como Next.js, TypeScript, PostgreSQL e Prisma ORM.

3. **Relevância dos conceitos de TI Verde e economia circular:** O projeto evidenciou a importância do conceito de TI Verde no setor de Tecnologia da Informação, promovendo práticas sustentáveis como a reciclagem de equipamentos eletrônicos, o reuso de componentes e o descarte ambientalmente adequado.

4. **Valor da acessibilidade no desenvolvimento de software:** A aplicação dos 7 Princípios do Desenho Universal no planejamento das interfaces mostrou que é possível criar soluções tecnológicas inclusivas, acessíveis a todas as pessoas independentemente de suas capacidades, sem comprometer a qualidade visual ou funcional do projeto.

5. **Dificuldade na obtenção de dados públicos sobre pontos de coleta:** A principal dificuldade encontrada foi a catalogação dos pontos de coleta de lixo eletrônico em Esmeraldas/MG, pois não existe um banco de dados público centralizado com essas informações. A pesquisa foi realizada manualmente, consultando a Prefeitura, lojas e cooperativas da região.

Como trabalho futuro, na Atividade Extensionista II pretende-se implementar a plataforma web EcoDescarte Digital, realizar o deploy na Internet e aplicar o projeto na comunidade do bairro Novo Retiro, comprovando sua efetividade como ferramenta de inclusão digital e conscientização ambiental.
