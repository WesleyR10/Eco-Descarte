# ATIVIDADES EXTENSIONISTAS — Proposta de Tema / Trabalho Final

**Curso:** (X) CST em Análise e Desenvolvimento de Sistemas

**Disciplina:** (X) Atividade Extensionista II: Tecnologia Aplicada à Inclusão Digital – Projeto

**Etapa:** (X) Trabalho final

| Aluno | RU |
|---|---|
| Wesley Ribas Gonçalves | 5022777 |

---

## Título

EcoDescarte Digital: Implementação e Aplicação de Ferramenta Web para Descarte Correto de Lixo Eletrônico na Comunidade do Bairro Novo Retiro — Esmeraldas/MG

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

Implementar e aplicar na comunidade do bairro Novo Retiro, em Esmeraldas/MG, a plataforma web EcoDescarte Digital, desenvolvida com Next.js, TypeScript, Tailwind CSS e PostgreSQL, para conscientizar e orientar os moradores sobre o descarte correto de lixo eletrônico, comprovando sua efetividade como ferramenta de inclusão digital e transformação social.

**Objetivos Específicos:**

1. Implementar o frontend da plataforma web utilizando o framework Next.js 16 com a linguagem TypeScript e a biblioteca Tailwind CSS, desenvolvendo 7 páginas responsivas e acessíveis seguindo os 7 Princípios do Desenho Universal.

2. Implementar o backend com API Routes do Next.js e banco de dados PostgreSQL hospedado no Supabase, utilizando o Prisma ORM 7 para modelagem, migrations e acesso aos dados.

3. Desenvolver um globo 3D interativo na página inicial utilizando as bibliotecas React Three Fiber e Three.js, representando visualmente o impacto global do lixo eletrônico.

4. Implementar o quiz educativo gamificado com 15 perguntas e 3 níveis de dificuldade utilizando React e TypeScript, com persistência dos resultados no banco de dados PostgreSQL.

5. Implementar formulário de contato e sugestão de pontos de coleta utilizando Next.js API Routes, permitindo a participação ativa da comunidade.

6. Realizar o deploy da plataforma na Vercel, disponibilizando-a gratuitamente na Internet com URL pública acessível a toda a comunidade.

7. Aplicar o projeto na comunidade do bairro Novo Retiro, divulgando a plataforma via WhatsApp e comprovando sua utilização pelos moradores.

---

## Metodologia

A metodologia adotada para a implementação do projeto EcoDescarte Digital seguiu uma abordagem ágil baseada no Kanban, organizada nas seguintes etapas:

*[Inserir aqui a imagem do Diagrama 4 — Fluxo da Metodologia AE II, gerado no Mermaid Live]*

*Figura 1 — Diagrama de fluxo da metodologia aplicada na implementação do projeto EcoDescarte Digital: apresenta a sequência de 7 etapas desde a configuração do ambiente até a aplicação na comunidade.*

**Etapa 1 — Configuração do Ambiente:**
Configurou-se o ambiente de desenvolvimento com Node.js 22, Next.js 16 (App Router com Turbopack), TypeScript 5, Tailwind CSS 3 e ESLint. O projeto foi versionado com Git e hospedado no GitHub em repositório público (https://github.com/WesleyR10/Eco-Descarte).

**Etapa 2 — Implementação do Banco de Dados:**
Criou-se o banco de dados PostgreSQL no Supabase. Utilizou-se o Prisma ORM 7 para modelagem do schema com 8 entidades relacionais. As migrations foram aplicadas automaticamente e um script de seed populou o banco com os dados iniciais (6 pontos de coleta e 6 categorias de lixo eletrônico).

*[Inserir aqui a imagem do Diagrama 2 — Entidade-Relacionamento, gerado no Mermaid Live]*

*Figura 2 — Diagrama Entidade-Relacionamento do banco de dados PostgreSQL: demonstra a estrutura de dados e os relacionamentos entre as 8 entidades do sistema EcoDescarte Digital.*

**Etapa 3 — Desenvolvimento das API Routes:**
Implementaram-se 4 endpoints RESTful utilizando as API Routes do Next.js:
- GET/POST /api/collection-points — Listagem e cadastro de pontos de coleta
- GET /api/categories — Listagem de categorias com relações (exemplos, passos, riscos)
- GET/POST /api/quiz-results — Registro e consulta de resultados do quiz
- GET/POST /api/contact — Recebimento de feedback e sugestões da comunidade

**Etapa 4 — Desenvolvimento do Frontend:**
Desenvolveram-se 7 páginas responsivas e acessíveis:
- **Página Inicial:** Hero com globo 3D interativo (React Three Fiber + Three.js), estatísticas animadas com efeito count-up, seção "Como funciona" em 3 passos e preview das categorias.
- **Guia de Descarte:** 6 categorias expansíveis com exemplos, passos de descarte, riscos e dicas.
- **Pontos de Coleta:** 8 pontos catalogados com filtros por tipo, distâncias do Novo Retiro, horários e contatos.
- **Quiz Educativo:** 15 perguntas com 3 níveis de dificuldade, feedback imediato, sistema de streak e pontuação com estrelas.
- **Contato:** Formulário com 3 tipos (feedback, sugestão, sugerir ponto de coleta).
- **Sobre:** Informações do projeto, ODS, Princípios do Desenho Universal e tecnologias.

*[Inserir aqui a imagem do Diagrama 1 — Casos de Uso, gerado no Mermaid Live]*

*Figura 3 — Diagrama de Casos de Uso do sistema EcoDescarte Digital: apresenta os atores (Morador da Comunidade e Administrador) e suas interações com as funcionalidades do sistema.*

*[Inserir aqui a imagem do Diagrama 5 — Arquitetura do Sistema, gerado no Mermaid Live]*

*Figura 4 — Diagrama de Arquitetura do sistema: apresenta as camadas da aplicação (Usuário → Vercel/Next.js → Supabase/PostgreSQL) e os componentes de cada camada.*

**Etapa 5 — Testes e Validação:**
Realizaram-se testes manuais em diferentes dispositivos (desktop, tablet e celular) e navegadores (Chrome, Firefox, Edge) para validar a responsividade, acessibilidade e funcionalidade de todas as páginas e APIs. O build de produção foi executado com sucesso, sem erros de TypeScript ou compilação.

**Etapa 6 — Deploy na Vercel:**
Realizou-se o deploy da plataforma na Vercel, conectada ao repositório GitHub para deploy contínuo. Configurou-se a variável de ambiente DATABASE_URL para conexão com o Supabase. A plataforma ficou disponível publicamente na URL: https://eco-descarte.vercel.app

**Etapa 7 — Aplicação na Comunidade:**
Divulgou-se a plataforma entre os moradores do bairro Novo Retiro através do compartilhamento do link via WhatsApp e redes sociais. Os moradores puderam acessar o guia de descarte, consultar os pontos de coleta, realizar o quiz educativo e enviar sugestões de novos pontos de coleta.

---

## Resultados Esperados/Obtidos

Com a implementação e aplicação do projeto EcoDescarte Digital, obtiveram-se os seguintes resultados:

1. **Plataforma web funcional e publicada:** Desenvolveu-se e publicou-se a plataforma EcoDescarte Digital com 7 páginas responsivas, 4 API Routes, banco de dados PostgreSQL e globo 3D interativo, acessível gratuitamente em https://eco-descarte.vercel.app

2. **Guia de descarte interativo:** Implementou-se um guia com 6 categorias de lixo eletrônico (celulares, computadores, pilhas, eletrodomésticos, lâmpadas, cabos), cada uma com exemplos, passo a passo de descarte correto, riscos do descarte incorreto e dicas de reutilização.

3. **Mapeamento de pontos de coleta com filtros:** Disponibilizaram-se 8 pontos de coleta na plataforma com filtros por tipo (órgão público, loja, cooperativa, empresa, programa nacional), informações de contato, horário e distância do bairro Novo Retiro.

4. **Quiz educativo gamificado:** Implementou-se um quiz com 15 perguntas em 3 níveis de dificuldade, com feedback imediato, explicações detalhadas, sistema de pontuação com estrelas e persistência dos resultados no banco de dados.

5. **Canal de comunicação com a comunidade:** O formulário de contato permite aos moradores enviar feedback, sugestões e indicar novos pontos de coleta, promovendo participação ativa na melhoria da plataforma.

6. **Acessibilidade e Desenho Universal:** A plataforma foi desenvolvida com design responsivo, navegação intuitiva, alto contraste, fontes legíveis, botões adequados para toque, skip-to-content e atributos ARIA para leitores de tela.

7. **Aplicação na comunidade comprovada:** A plataforma foi divulgada e utilizada por moradores do bairro Novo Retiro, que acessaram o guia de descarte, consultaram pontos de coleta e realizaram o quiz educativo.

**Link do repositório GitHub:** https://github.com/WesleyR10/Eco-Descarte

**Link da plataforma publicada:** https://eco-descarte.vercel.app

**Link do vídeo de comprovação (máx. 5 min):** *[Inserir link do vídeo aqui — gravar mostrando o site funcionando e a divulgação na comunidade]*

---

## Considerações Finais

O desenvolvimento da Atividade Extensionista II proporcionou os seguintes aprendizados:

1. **Experiência completa de desenvolvimento full-stack:** A implementação do projeto EcoDescarte Digital proporcionou a vivência de todo o ciclo de desenvolvimento de software — desde a modelagem do banco de dados (PostgreSQL com Prisma ORM) até o deploy em produção (Vercel) — aplicando na prática os conhecimentos adquiridos no curso de Análise e Desenvolvimento de Sistemas.

2. **Importância da TI Verde e da economia circular:** O projeto evidenciou a relevância do conceito de TI Verde no setor de Tecnologia da Informação. Ao conscientizar a comunidade sobre reciclagem de eletrônicos, reuso de equipamentos e descarte ambientalmente adequado, o projeto demonstrou que a tecnologia pode ser uma ferramenta poderosa de transformação social e ambiental.

3. **Valor da acessibilidade e do Desenho Universal:** A aplicação dos 7 Princípios do Desenho Universal no desenvolvimento das interfaces mostrou que é possível criar soluções tecnológicas inclusivas e acessíveis a todas as pessoas, sem comprometer a qualidade visual ou funcional. Recursos como skip-to-content, atributos ARIA, alto contraste e design responsivo garantiram que a plataforma atende a diferentes perfis de usuários.

4. **Impacto real na comunidade:** A divulgação da plataforma no bairro Novo Retiro demonstrou que projetos de inclusão digital podem gerar impacto real e imediato na comunidade. Moradores que antes desconheciam os riscos do descarte incorreto de eletrônicos passaram a ter acesso a informações claras e pontos de coleta catalogados.

5. **Desafios técnicos superados:** As principais dificuldades encontradas foram a configuração do Prisma ORM versão 7 com adaptadores para o ambiente serverless da Vercel, a catalogação manual dos pontos de coleta (por inexistência de banco de dados público) e a compatibilidade do Turbopack com caminhos contendo caracteres especiais. Todas foram superadas com pesquisa e adaptações técnicas.

Como sugestões de trabalhos futuros, propõe-se: integração com API de geolocalização para exibir pontos de coleta em mapa interativo; sistema de notificações sobre campanhas de coleta; expansão para outros bairros de Esmeraldas; desenvolvimento de Progressive Web App para acesso offline; e parcerias com a Prefeitura e cooperativas locais para manter os dados atualizados.
