export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "facil" | "medio" | "dificil";
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é a forma correta de descartar pilhas e baterias usadas?",
    options: [
      "Jogar no lixo comum junto com outros resíduos",
      "Queimar para eliminar as substâncias tóxicas",
      "Levar a pontos de coleta específicos em lojas ou supermercados",
      "Enterrar no quintal para decomposição natural",
    ],
    correctIndex: 2,
    explanation:
      "Pilhas e baterias contêm metais pesados como cádmio, chumbo e mercúrio. A Resolução CONAMA 401/2008 obriga fabricantes e comerciantes a receberem pilhas usadas. Pontos de coleta em supermercados, farmácias e lojas de eletrônicos são a forma correta de descarte.",
    difficulty: "facil",
  },
  {
    id: 2,
    question:
      "Quanto tempo uma pilha comum pode levar para se decompor na natureza?",
    options: ["10 a 20 anos", "50 a 80 anos", "100 a 500 anos", "Mais de 1000 anos"],
    correctIndex: 2,
    explanation:
      "Uma pilha pode levar de 100 a 500 anos para se decompor, liberando substâncias tóxicas no solo e na água durante todo esse período. Uma única pilha pode contaminar até 600 mil litros de água.",
    difficulty: "medio",
  },
  {
    id: 3,
    question: "O que fazer ANTES de descartar um celular ou notebook antigo?",
    options: [
      "Apenas remover o chip e jogar no lixo",
      "Fazer reset de fábrica, remover chip, cartão de memória e conta Google/Apple",
      "Quebrar a tela para que ninguém acesse seus dados",
      "Nada, os dados são apagados automaticamente",
    ],
    correctIndex: 1,
    explanation:
      "É essencial proteger seus dados pessoais: faça backup, reset de fábrica, remova chip e cartão de memória, e desvincule contas (Google, Apple, redes sociais). Só depois leve a um ponto de coleta autorizado.",
    difficulty: "facil",
  },
  {
    id: 4,
    question:
      "Qual substância tóxica presente em lâmpadas fluorescentes torna seu descarte no lixo comum extremamente perigoso?",
    options: ["Cloro gasoso", "Mercúrio", "Sódio metálico", "Potássio"],
    correctIndex: 1,
    explanation:
      "Lâmpadas fluorescentes contêm mercúrio gasoso, um neurotóxico potente. Quando quebradas, liberam vapor de mercúrio que é absorvido pela pele e pulmões. Por isso, NUNCA quebre lâmpadas fluorescentes e leve-as inteiras a pontos de coleta específicos.",
    difficulty: "medio",
  },
  {
    id: 5,
    question:
      "O que é logística reversa no contexto de resíduos eletrônicos?",
    options: [
      "Vender eletrônicos usados em sites de classificados",
      "A obrigação legal de fabricantes e vendedores receberem produtos de volta após o uso",
      "Enviar lixo eletrônico para reciclagem em outros países",
      "Reutilizar embalagens de produtos eletrônicos",
    ],
    correctIndex: 1,
    explanation:
      "A logística reversa, prevista na Política Nacional de Resíduos Sólidos (Lei 12.305/2010), obriga fabricantes, importadores, distribuidores e comerciantes a estruturarem sistemas para receber produtos eletrônicos após o uso, garantindo sua destinação ambientalmente adequada.",
    difficulty: "dificil",
  },
  {
    id: 6,
    question:
      "Qual ODS da ONU está diretamente relacionado ao descarte responsável de lixo eletrônico?",
    options: [
      "ODS 1 — Erradicação da Pobreza",
      "ODS 7 — Energia Limpa e Acessível",
      "ODS 12 — Consumo e Produção Responsáveis",
      "ODS 15 — Vida Terrestre",
    ],
    correctIndex: 2,
    explanation:
      "O ODS 12 trata de padrões sustentáveis de consumo e produção, incluindo a meta 12.5: 'Até 2030, reduzir substancialmente a geração de resíduos por meio da prevenção, redução, reciclagem e reuso'. O descarte correto de e-lixo é parte fundamental dessa meta.",
    difficulty: "medio",
  },
  {
    id: 7,
    question:
      "Aproximadamente quantas toneladas de lixo eletrônico o Brasil gera por ano?",
    options: [
      "500 mil toneladas",
      "1 milhão de toneladas",
      "2 milhões de toneladas",
      "5 milhões de toneladas",
    ],
    correctIndex: 2,
    explanation:
      "Segundo o Global E-waste Monitor, o Brasil gera cerca de 2 milhões de toneladas de lixo eletrônico por ano, sendo o 5º maior produtor do mundo e o maior da América Latina. Apenas cerca de 3% desse total é reciclado corretamente.",
    difficulty: "medio",
  },
  {
    id: 8,
    question:
      "Qual é o principal risco ambiental de descartar eletrônicos no lixo comum?",
    options: [
      "Ocupar muito espaço no aterro sanitário",
      "Contaminar solo e lençóis freáticos com metais pesados",
      "Atrair insetos e roedores",
      "Causar mau cheiro na vizinhança",
    ],
    correctIndex: 1,
    explanation:
      "Eletrônicos contêm metais pesados (chumbo, mercúrio, cádmio, arsênio) que, ao serem descartados em aterros, lixões ou terrenos baldios, infiltram no solo e contaminam os lençóis freáticos. Essa contaminação afeta a água potável e a cadeia alimentar de toda a região.",
    difficulty: "facil",
  },
  {
    id: 9,
    question: "O que significa o conceito de TI Verde (Green IT)?",
    options: [
      "Usar computadores com gabinete na cor verde",
      "Conjunto de práticas sustentáveis no uso de tecnologia da informação",
      "Plantar árvores usando aplicativos de celular",
      "Usar apenas energia solar para alimentar data centers",
    ],
    correctIndex: 1,
    explanation:
      "TI Verde (Green IT) engloba práticas sustentáveis no setor de TI: reduzir consumo de energia, reciclar equipamentos, virtualizar servidores, diminuir impressões, aumentar a vida útil dos computadores e descartar corretamente o lixo eletrônico. É um conceito central deste projeto.",
    difficulty: "facil",
  },
  {
    id: 10,
    question:
      "Qual destes NÃO é um dos 7 Princípios do Desenho Universal?",
    options: [
      "Uso igualitário para todas as pessoas",
      "Informação de fácil percepção",
      "Design exclusivo para usuários avançados",
      "Tolerância ao erro",
    ],
    correctIndex: 2,
    explanation:
      "O Desenho Universal busca criar soluções acessíveis a TODAS as pessoas, independentemente de suas capacidades. 'Design exclusivo para usuários avançados' contradiz o princípio fundamental de igualdade e acessibilidade universal.",
    difficulty: "medio",
  },
  {
    id: 11,
    question:
      "Qual lei brasileira estabelece a Política Nacional de Resíduos Sólidos, que inclui o lixo eletrônico?",
    options: [
      "Lei 9.605/1998 — Lei de Crimes Ambientais",
      "Lei 12.305/2010 — Política Nacional de Resíduos Sólidos",
      "Lei 6.938/1981 — Política Nacional do Meio Ambiente",
      "Lei 11.445/2007 — Lei do Saneamento Básico",
    ],
    correctIndex: 1,
    explanation:
      "A Lei 12.305/2010 instituiu a Política Nacional de Resíduos Sólidos (PNRS), que estabelece princípios, objetivos e instrumentos para a gestão de resíduos, incluindo a obrigatoriedade da logística reversa para produtos eletrônicos e seus componentes.",
    difficulty: "dificil",
  },
  {
    id: 12,
    question:
      "Qual material precioso pode ser recuperado da reciclagem de placas de circuito de computadores?",
    options: [
      "Diamante",
      "Ouro, prata e cobre",
      "Platina e titânio apenas",
      "Nenhum material de valor",
    ],
    correctIndex: 1,
    explanation:
      "Placas de circuito contêm ouro, prata, cobre, paládio e outros metais preciosos. Uma tonelada de placas de celular pode conter até 300g de ouro — muito mais que uma tonelada de minério de ouro (5-6g). A reciclagem urbana é mais eficiente que a mineração tradicional.",
    difficulty: "medio",
  },
  {
    id: 13,
    question:
      "O que é economia circular e como se relaciona com o lixo eletrônico?",
    options: [
      "Um modelo econômico onde produtos são usados e descartados rapidamente",
      "Um sistema onde recursos são reutilizados, reciclados e reaproveitados continuamente",
      "Uma forma de vender produtos eletrônicos usados com lucro",
      "Um programa governamental de distribuição de eletrônicos",
    ],
    correctIndex: 1,
    explanation:
      "A economia circular é um modelo que busca eliminar o conceito de 'lixo', mantendo materiais em uso pelo maior tempo possível. No contexto do e-lixo, significa reparar, reutilizar, recondicionar e reciclar equipamentos eletrônicos, extraindo o máximo valor antes do descarte final.",
    difficulty: "dificil",
  },
  {
    id: 14,
    question:
      "Geladeiras e ar-condicionados antigos podem conter qual gás prejudicial à camada de ozônio?",
    options: [
      "Oxigênio puro (O₂)",
      "Gás carbônico (CO₂)",
      "CFC (Clorofluorcarboneto)",
      "Gás hélio (He)",
    ],
    correctIndex: 2,
    explanation:
      "Geladeiras e ar-condicionados fabricados antes de 2010 podem conter CFC (Clorofluorcarboneto), um gás que destrói a camada de ozônio. Por isso, esses eletrodomésticos precisam de descarte especializado para que o gás seja capturado e tratado adequadamente.",
    difficulty: "medio",
  },
  {
    id: 15,
    question:
      "Qual a melhor atitude antes de descartar um equipamento eletrônico que ainda funciona?",
    options: [
      "Jogar no lixo eletrônico imediatamente",
      "Guardar em casa indefinidamente",
      "Doar para projetos sociais, escolas ou pessoas que precisam",
      "Vender por qualquer preço para se livrar rápido",
    ],
    correctIndex: 2,
    explanation:
      "A hierarquia de gestão de resíduos prioriza: 1º Reduzir, 2º Reutilizar, 3º Reciclar. Se o equipamento ainda funciona, a melhor opção é doar para projetos sociais, escolas públicas ou pessoas que precisam. Isso promove inclusão digital e reduz a geração de lixo eletrônico.",
    difficulty: "facil",
  },
];
