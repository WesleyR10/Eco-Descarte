export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: "legislacao" | "dados" | "dicas" | "tecnologia" | "comunidade";
  imageEmoji: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "brasil-5o-maior-produtor-lixo-eletronico",
    title: "Brasil é o 5º maior produtor de lixo eletrônico do mundo",
    summary: "Segundo o Global E-waste Monitor 2024, o Brasil gera mais de 2 milhões de toneladas de resíduos eletrônicos por ano, mas recicla apenas cerca de 3% desse total.",
    content: "O relatório Global E-waste Monitor 2024, publicado pela ONU, revelou que o mundo gerou 62 milhões de toneladas de lixo eletrônico em 2022, um aumento de 82% em relação a 2010. O Brasil ocupa a 5ª posição no ranking mundial, gerando aproximadamente 2,1 milhões de toneladas por ano. O dado mais alarmante é que apenas cerca de 3% desse volume é reciclado corretamente no país. O restante acaba em aterros sanitários, lixões ou é descartado de forma irregular, contaminando solo e água com metais pesados como chumbo, mercúrio e cádmio. A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos, incluindo a logística reversa de equipamentos eletrônicos, mas a implementação ainda é insuficiente.",
    source: "Global E-waste Monitor 2024 — ONU/ITU",
    sourceUrl: "https://ewastemonitor.info",
    date: "2024-03-20",
    category: "dados",
    imageEmoji: "📊",
  },
  {
    id: "lei-12305-politica-residuos-solidos",
    title: "Lei 12.305/2010: O que diz a Política Nacional de Resíduos Sólidos sobre lixo eletrônico",
    summary: "A PNRS estabelece a logística reversa como obrigação de fabricantes e comerciantes para produtos eletrônicos, pilhas e lâmpadas.",
    content: "A Lei 12.305/2010 instituiu a Política Nacional de Resíduos Sólidos (PNRS), um marco legal que estabelece princípios, objetivos e instrumentos para a gestão de resíduos no Brasil. Entre os pontos mais relevantes para o lixo eletrônico está a obrigatoriedade da logística reversa: fabricantes, importadores, distribuidores e comerciantes são obrigados a estruturar sistemas para receber de volta produtos eletrônicos, pilhas, baterias e lâmpadas após o uso pelo consumidor. A lei também estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos e prioriza a não geração, redução, reutilização, reciclagem e tratamento dos resíduos sólidos, nessa ordem. O descumprimento pode resultar em multas e sanções administrativas.",
    source: "Planalto — Legislação Federal",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm",
    date: "2024-01-15",
    category: "legislacao",
    imageEmoji: "⚖️",
  },
  {
    id: "mineracao-urbana-ouro-celulares",
    title: "Mineração urbana: uma tonelada de celulares contém mais ouro que uma tonelada de minério",
    summary: "A reciclagem de eletrônicos pode recuperar ouro, prata, cobre e paládio, sendo até 50 vezes mais eficiente que a mineração tradicional.",
    content: "O conceito de mineração urbana refere-se à recuperação de metais preciosos e raros a partir de resíduos eletrônicos. Estudos mostram que uma tonelada de placas de circuito de celulares pode conter até 300 gramas de ouro, enquanto uma tonelada de minério de ouro extraído da natureza contém apenas 5 a 6 gramas. Além do ouro, é possível recuperar prata, cobre, paládio, platina e terras raras. A reciclagem desses materiais consome significativamente menos energia e água do que a mineração tradicional, além de evitar a destruição de ecossistemas. No Brasil, empresas como a GM&C em Contagem/MG já realizam esse tipo de reciclagem, processando toneladas de equipamentos eletrônicos por mês e recuperando materiais valiosos que retornam à cadeia produtiva.",
    source: "Revista Pesquisa FAPESP",
    sourceUrl: "https://revistapesquisa.fapesp.br",
    date: "2024-06-10",
    category: "tecnologia",
    imageEmoji: "⛏️",
  },
  {
    id: "como-apagar-dados-antes-descartar",
    title: "Como apagar seus dados pessoais antes de descartar um celular ou computador",
    summary: "Guia prático para proteger suas informações pessoais antes de enviar equipamentos eletrônicos para reciclagem ou doação.",
    content: "Antes de descartar ou doar qualquer equipamento eletrônico, é fundamental proteger seus dados pessoais. Para celulares Android: acesse Configurações > Sistema > Opções de redefinição > Apagar todos os dados (restauração de fábrica). Antes disso, remova sua conta Google, chip SIM e cartão de memória. Para iPhones: vá em Ajustes > Geral > Transferir ou Redefinir > Apagar Conteúdo e Ajustes. Para computadores: faça backup dos arquivos importantes, depois reinstale o sistema operacional ou use ferramentas como DBAN (Darik's Boot and Nuke) para apagar completamente o HD/SSD. Para notebooks: além do reset, remova contas de nuvem (OneDrive, Google Drive, iCloud). Lembre-se: simplesmente deletar arquivos não é suficiente — eles podem ser recuperados com softwares especializados. A formatação completa é essencial.",
    source: "Cert.br — Centro de Estudos para Resposta a Incidentes",
    sourceUrl: "https://www.cert.br",
    date: "2024-08-05",
    category: "dicas",
    imageEmoji: "🔒",
  },
  {
    id: "pilha-contamina-600-mil-litros-agua",
    title: "Uma única pilha pode contaminar até 600 mil litros de água",
    summary: "Metais pesados presentes em pilhas e baterias representam um dos maiores riscos ambientais quando descartados incorretamente.",
    content: "Pilhas e baterias são consideradas os itens mais perigosos do lixo eletrônico. Uma única pilha alcalina comum pode contaminar até 600 mil litros de água — o equivalente ao consumo de uma família de 4 pessoas durante 44 anos. Isso ocorre porque pilhas contêm metais pesados como cádmio, chumbo, mercúrio, níquel e lítio que, ao entrarem em contato com o solo, infiltram nos lençóis freáticos. A Resolução CONAMA 401/2008 regulamenta o descarte de pilhas e baterias no Brasil, obrigando fabricantes e importadores a receberem de volta esses produtos após o uso. Pontos de coleta podem ser encontrados em supermercados, farmácias, bancos e lojas de eletrônicos. O programa Papa-Pilhas, presente em diversas cidades brasileiras, facilita a coleta e destinação adequada desses resíduos.",
    source: "CONAMA — Conselho Nacional do Meio Ambiente",
    sourceUrl: "https://www.gov.br/conama",
    date: "2024-04-22",
    category: "dados",
    imageEmoji: "💧",
  },
  {
    id: "esmeraldas-mg-gestao-residuos",
    title: "Esmeraldas/MG avança na gestão de resíduos sólidos com apoio da comunidade",
    summary: "O município de Esmeraldas tem investido em programas de coleta seletiva e conscientização ambiental, com destaque para a participação ativa dos moradores.",
    content: "O município de Esmeraldas, localizado na região metropolitana de Belo Horizonte, tem avançado na gestão de resíduos sólidos nos últimos anos. A Prefeitura, através da Secretaria de Meio Ambiente, implementou programas de coleta seletiva e pontos de entrega voluntária em diversos bairros. A Cooperativa de Catadores de Materiais Recicláveis de Esmeraldas desempenha papel fundamental nesse processo, realizando a triagem e destinação adequada dos materiais coletados. No bairro Novo Retiro, a comunidade tem se mobilizado para melhorar as práticas de descarte, especialmente de equipamentos eletrônicos. Projetos de inclusão digital, como o EcoDescarte Digital, contribuem para conscientizar os moradores sobre a importância do descarte correto e os riscos ambientais do lixo eletrônico, fortalecendo o compromisso da comunidade com a sustentabilidade.",
    source: "Prefeitura Municipal de Esmeraldas",
    sourceUrl: "https://www.esmeraldas.mg.gov.br",
    date: "2025-02-14",
    category: "comunidade",
    imageEmoji: "🏘️",
  },
];

export const categoryLabels: Record<BlogPost["category"], string> = {
  legislacao: "Legislação",
  dados: "Dados e Pesquisas",
  dicas: "Dicas Práticas",
  tecnologia: "Tecnologia",
  comunidade: "Comunidade",
};

export const categoryColors: Record<BlogPost["category"], string> = {
  legislacao: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  dados: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  dicas: "bg-primary-500/20 text-primary-400 border-primary-500/30",
  tecnologia: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  comunidade: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};
