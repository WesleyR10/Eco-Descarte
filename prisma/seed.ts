import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await prisma.acceptedItem.deleteMany();
  await prisma.collectionPoint.deleteMany();
  await prisma.categoryExample.deleteMany();
  await prisma.discardStep.deleteMany();
  await prisma.danger.deleteMany();
  await prisma.wasteCategory.deleteMany();

  // === COLLECTION POINTS ===
  const points = [
    {
      name: "Prefeitura Municipal de Esmeraldas — Secretaria de Meio Ambiente",
      address: "Praça Getúlio Vargas, 36 — Centro, Esmeraldas/MG",
      city: "Esmeraldas", state: "MG", phone: "(31) 3623-1000",
      hours: "Segunda a Sexta: 8h às 17h", type: "prefeitura",
      distance: "~5 km do Novo Retiro",
      accepts: ["Eletrodomésticos", "Computadores", "Celulares", "Pilhas e baterias", "Lâmpadas"],
    },
    {
      name: "Ecoponto SLU — Pampulha",
      address: "Av. Antônio Carlos, 7596 — Pampulha, Belo Horizonte/MG",
      city: "Belo Horizonte", state: "MG", phone: "(31) 3277-9380",
      hours: "Segunda a Sábado: 7h às 18h", type: "prefeitura",
      distance: "~30 km",
      accepts: ["Todos os tipos de lixo eletrônico", "Lâmpadas fluorescentes", "Pilhas e baterias", "Eletrodomésticos grandes"],
    },
    {
      name: "Magazine Luiza — Programa Descarte Consciente",
      address: "Lojas da região metropolitana de BH",
      city: "Região Metropolitana", state: "MG", phone: "SAC: 0800-310-0002",
      hours: "Horário comercial da loja", type: "loja", distance: "Diversas unidades",
      accepts: ["Celulares", "Tablets", "Notebooks", "Pilhas e baterias", "Carregadores"],
    },
    {
      name: "Cooperativa de Catadores de Materiais Recicláveis de Esmeraldas",
      address: "Bairro Industrial — Esmeraldas/MG",
      city: "Esmeraldas", state: "MG",
      hours: "Segunda a Sexta: 8h às 16h", type: "cooperativa",
      distance: "~7 km do Novo Retiro",
      accepts: ["Computadores e periféricos", "Cabos e fios de cobre", "Eletrodomésticos pequenos", "Metais e placas de circuito"],
    },
    {
      name: "GM&C Reciclagem de Eletrônicos",
      address: "R. Vinte e Quatro, 50 — Cinco, Contagem/MG",
      city: "Contagem", state: "MG", phone: "(31) 3391-7000",
      hours: "Segunda a Sexta: 8h às 18h", type: "empresa", distance: "~25 km",
      accepts: ["Todos os tipos de eletrônicos", "Equipamentos de informática", "Telecomunicações"],
    },
    {
      name: "Papa-Pilhas (Programa Nacional)",
      address: "Supermercados, farmácias e bancos da região",
      city: "Esmeraldas e região", state: "MG",
      hours: "Horário do estabelecimento", type: "ong", distance: "Diversos pontos",
      accepts: ["Pilhas alcalinas (AA, AAA, C, D)", "Baterias recarregáveis", "Pilhas botão", "Baterias de celular"],
    },
  ];

  for (const point of points) {
    const { accepts, ...data } = point;
    await prisma.collectionPoint.create({
      data: { ...data, accepts: { create: accepts.map((name) => ({ name })) } },
    });
  }
  console.log(`✅ ${points.length} pontos de coleta criados`);

  // === WASTE CATEGORIES ===
  const categories = [
    {
      slug: "celulares-tablets", name: "Celulares e Tablets", icon: "Smartphone", order: 1,
      description: "Dispositivos móveis contêm metais pesados como chumbo, mercúrio e cádmio que contaminam o solo e a água.",
      tip: "Antes de descartar, considere doar para projetos sociais se o aparelho ainda funciona.",
      examples: ["Smartphones", "Tablets", "Leitores de e-book", "Smartwatches", "Fones Bluetooth"],
      steps: ["Remova seus dados pessoais e faça reset de fábrica", "Retire o chip e cartão de memória", "Leve a um ponto de coleta autorizado", "Muitas lojas aceitam aparelhos antigos"],
      dangers: ["Baterias de lítio podem explodir", "Contêm chumbo, mercúrio e cádmio", "Contaminam lençóis freáticos"],
    },
    {
      slug: "computadores", name: "Computadores e Notebooks", icon: "Monitor", order: 2,
      description: "Computadores possuem componentes com substâncias tóxicas que precisam de tratamento especial.",
      tip: "Computadores antigos podem ser doados para escolas ou ONGs.",
      examples: ["Desktops", "Notebooks", "Monitores", "Teclados e mouses", "Placas-mãe"],
      steps: ["Faça backup e apague todos os dados", "Separe os componentes", "Leve a um ponto de coleta", "Empresas de reciclagem podem retirar no local"],
      dangers: ["Monitores CRT contêm chumbo", "Placas de circuito possuem metais pesados", "Baterias de notebook contêm lítio"],
    },
    {
      slug: "pilhas-baterias", name: "Pilhas e Baterias", icon: "Battery", order: 3,
      description: "Pilhas e baterias são os itens mais perigosos do lixo eletrônico.",
      tip: "Prefira pilhas recarregáveis — além de econômicas, geram menos resíduo.",
      examples: ["Pilhas alcalinas", "Baterias recarregáveis", "Baterias de lítio", "Baterias de carro", "Pilhas botão"],
      steps: ["NUNCA jogue no lixo comum", "Coloque fita isolante nos terminais", "Leve a pontos de coleta em supermercados", "Farmácias também costumam ter coletores"],
      dangers: ["Contêm cádmio, chumbo, mercúrio e lítio", "Podem causar incêndios em aterros", "Contaminam o solo por centenas de anos"],
    },
    {
      slug: "eletrodomesticos", name: "Eletrodomésticos", icon: "Refrigerator", order: 4,
      description: "Eletrodomésticos contêm gases e substâncias que prejudicam a camada de ozônio.",
      tip: "Ao comprar um novo, pergunte na loja sobre logística reversa.",
      examples: ["Geladeiras", "Micro-ondas", "Máquinas de lavar", "Ar-condicionado", "Liquidificadores"],
      steps: ["Contate a prefeitura para coleta de grandes volumes", "Lojas podem aceitar o antigo na troca", "Cooperativas fazem a desmontagem correta", "Nunca abandone em terrenos baldios"],
      dangers: ["Geladeiras antigas contêm CFC", "Compressores possuem óleo contaminante", "Componentes elétricos podem causar choques"],
    },
    {
      slug: "lampadas", name: "Lâmpadas", icon: "Lightbulb", order: 5,
      description: "Lâmpadas fluorescentes contêm mercúrio e exigem descarte especial.",
      tip: "Lâmpadas de LED duram mais e contêm menos substâncias tóxicas.",
      examples: ["Fluorescentes tubulares", "Fluorescentes compactas", "Lâmpadas de LED", "Vapor de sódio", "Vapor de mercúrio"],
      steps: ["Embale em jornal ou papelão", "Leve a pontos de coleta específicos", "Lojas de materiais de construção costumam aceitar", "NUNCA quebre lâmpadas fluorescentes"],
      dangers: ["Contêm mercúrio gasoso", "Vidro quebrado pode causar cortes", "Mercúrio é altamente tóxico"],
    },
    {
      slug: "cabos-acessorios", name: "Cabos e Acessórios", icon: "Cable", order: 6,
      description: "Cabos e acessórios acumulam-se rapidamente e contêm cobre e plásticos.",
      tip: "Antes de comprar um cabo novo, verifique se já não tem um em casa.",
      examples: ["Cabos USB e carregadores", "Cabos HDMI e de rede", "Fontes de alimentação", "Adaptadores", "Capas e películas"],
      steps: ["Junte todos os cabos em um saco", "Leve a pontos de coleta", "Cooperativas valorizam o cobre", "Doe cabos funcionais"],
      dangers: ["Plástico libera toxinas ao ser queimado", "Cobre e estanho contaminam o solo", "Acúmulo em aterros ocupa espaço"],
    },
  ];

  for (const cat of categories) {
    const { examples, steps, dangers, ...data } = cat;
    await prisma.wasteCategory.create({
      data: {
        ...data,
        examples: { create: examples.map((name) => ({ name })) },
        discardSteps: { create: steps.map((text, i) => ({ step: i + 1, text })) },
        dangers: { create: dangers.map((text) => ({ text })) },
      },
    });
  }
  console.log(`✅ ${categories.length} categorias criadas`);
  console.log("🎉 Seed concluído!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
