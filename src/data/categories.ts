export interface WasteCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  examples: string[];
  howToDiscard: string[];
  dangers: string[];
  recyclable: boolean;
  tip: string;
}

export const wasteCategories: WasteCategory[] = [
  {
    id: "celulares-tablets",
    name: "Celulares e Tablets",
    icon: "Smartphone",
    description:
      "Dispositivos móveis contêm metais pesados como chumbo, mercúrio e cádmio que contaminam o solo e a água.",
    examples: [
      "Smartphones",
      "Tablets",
      "Leitores de e-book",
      "Smartwatches",
      "Fones Bluetooth",
    ],
    howToDiscard: [
      "Remova seus dados pessoais e faça reset de fábrica",
      "Retire o chip e cartão de memória",
      "Leve a um ponto de coleta autorizado ou operadora de telefonia",
      "Muitas lojas de eletrônicos aceitam aparelhos antigos",
    ],
    dangers: [
      "Baterias de lítio podem explodir se descartadas incorretamente",
      "Contêm chumbo, mercúrio e cádmio",
      "Contaminam lençóis freáticos",
    ],
    recyclable: true,
    tip: "Antes de descartar, considere doar para projetos sociais se o aparelho ainda funciona.",
  },
  {
    id: "computadores",
    name: "Computadores e Notebooks",
    icon: "Monitor",
    description:
      "Computadores possuem componentes com substâncias tóxicas que precisam de tratamento especial.",
    examples: [
      "Desktops",
      "Notebooks",
      "Monitores",
      "Teclados e mouses",
      "Placas-mãe e processadores",
    ],
    howToDiscard: [
      "Faça backup e apague todos os dados do HD/SSD",
      "Separe os componentes se possível (monitor, gabinete, periféricos)",
      "Leve a um ponto de coleta de eletrônicos",
      "Empresas de reciclagem de TI podem retirar no local",
    ],
    dangers: [
      "Monitores CRT contêm chumbo no vidro",
      "Placas de circuito possuem metais pesados",
      "Baterias de notebook contêm lítio",
    ],
    recyclable: true,
    tip: "Computadores antigos podem ser doados para escolas ou ONGs que fazem recondicionamento.",
  },
  {
    id: "pilhas-baterias",
    name: "Pilhas e Baterias",
    icon: "Battery",
    description:
      "Pilhas e baterias são os itens mais perigosos do lixo eletrônico devido à alta concentração de metais pesados.",
    examples: [
      "Pilhas alcalinas (AA, AAA, C, D)",
      "Baterias recarregáveis",
      "Baterias de lítio",
      "Baterias de carro/moto",
      "Pilhas botão",
    ],
    howToDiscard: [
      "NUNCA jogue no lixo comum",
      "Coloque fita isolante nos terminais para evitar curto-circuito",
      "Leve a pontos de coleta em supermercados ou lojas de eletrônicos",
      "Farmácias e bancos também costumam ter coletores",
    ],
    dangers: [
      "Contêm cádmio, chumbo, mercúrio e lítio",
      "Podem causar incêndios em aterros sanitários",
      "Contaminam o solo por centenas de anos",
    ],
    recyclable: true,
    tip: "Prefira pilhas recarregáveis — além de econômicas, geram menos resíduo.",
  },
  {
    id: "eletrodomesticos",
    name: "Eletrodomésticos",
    icon: "Refrigerator",
    description:
      "Eletrodomésticos grandes e pequenos contêm gases e substâncias que prejudicam a camada de ozônio.",
    examples: [
      "Geladeiras e freezers",
      "Micro-ondas",
      "Máquinas de lavar",
      "Ar-condicionado",
      "Liquidificadores e batedeiras",
    ],
    howToDiscard: [
      "Entre em contato com a prefeitura para coleta de grandes volumes",
      "Lojas que vendem eletrodomésticos podem aceitar o antigo na troca",
      "Cooperativas de reciclagem fazem a desmontagem correta",
      "Nunca abandone em terrenos baldios ou vias públicas",
    ],
    dangers: [
      "Geladeiras antigas contêm CFC (gás que destrói a camada de ozônio)",
      "Compressores possuem óleo contaminante",
      "Componentes elétricos podem causar choques",
    ],
    recyclable: true,
    tip: "Ao comprar um novo, pergunte na loja sobre logística reversa — muitas são obrigadas a aceitar o antigo.",
  },
  {
    id: "lampadas",
    name: "Lâmpadas",
    icon: "Lightbulb",
    description:
      "Lâmpadas fluorescentes e de LED contêm mercúrio e outros materiais que exigem descarte especial.",
    examples: [
      "Lâmpadas fluorescentes tubulares",
      "Lâmpadas fluorescentes compactas",
      "Lâmpadas de LED",
      "Lâmpadas de vapor de sódio",
      "Lâmpadas de vapor de mercúrio",
    ],
    howToDiscard: [
      "Embale em jornal ou papelão para evitar quebra",
      "Leve a pontos de coleta específicos para lâmpadas",
      "Lojas de materiais de construção costumam aceitar",
      "NUNCA quebre lâmpadas fluorescentes — liberam mercúrio",
    ],
    dangers: [
      "Lâmpadas fluorescentes contêm mercúrio gasoso",
      "Vidro quebrado pode causar cortes",
      "Mercúrio é altamente tóxico para o sistema nervoso",
    ],
    recyclable: true,
    tip: "Lâmpadas de LED duram mais e contêm menos substâncias tóxicas — prefira-as.",
  },
  {
    id: "cabos-acessorios",
    name: "Cabos e Acessórios",
    icon: "Cable",
    description:
      "Cabos, carregadores e acessórios eletrônicos acumulam-se rapidamente e contêm cobre e plásticos.",
    examples: [
      "Cabos USB e carregadores",
      "Cabos HDMI e de rede",
      "Fontes de alimentação",
      "Adaptadores e hubs",
      "Capas e películas",
    ],
    howToDiscard: [
      "Junte todos os cabos e acessórios em um saco",
      "Leve a pontos de coleta de eletrônicos",
      "Cooperativas de reciclagem valorizam o cobre dos cabos",
      "Doe cabos funcionais para quem precisa",
    ],
    dangers: [
      "Revestimento plástico libera toxinas ao ser queimado",
      "Cobre e estanho contaminam o solo",
      "Acúmulo em aterros ocupa espaço desnecessário",
    ],
    recyclable: true,
    tip: "Antes de comprar um cabo novo, verifique se já não tem um em casa — a maioria das pessoas acumula dezenas.",
  },
];
