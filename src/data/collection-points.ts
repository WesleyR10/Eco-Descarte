export interface CollectionPoint {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  accepts: string[];
  hours?: string;
  type: "prefeitura" | "loja" | "cooperativa" | "empresa" | "ong";
  distance?: string;
  lat: number;
  lng: number;
}

export const collectionPoints: CollectionPoint[] = [
  {
    id: "1",
    name: "Prefeitura Municipal de Esmeraldas — Secretaria de Meio Ambiente",
    address: "Praça Getúlio Vargas, 36 — Centro, Esmeraldas/MG",
    city: "Esmeraldas",
    state: "MG",
    phone: "(31) 3623-1000",
    accepts: ["Eletrodomésticos", "Computadores", "Celulares", "Pilhas e baterias", "Lâmpadas"],
    hours: "Segunda a Sexta: 8h às 17h",
    type: "prefeitura",
    distance: "~5 km do Novo Retiro",
    lat: -19.7631,
    lng: -44.3142,
  },
  {
    id: "2",
    name: "Ecoponto SLU — Pampulha",
    address: "Av. Antônio Carlos, 7596 — Pampulha, Belo Horizonte/MG",
    city: "Belo Horizonte",
    state: "MG",
    phone: "(31) 3277-9380",
    accepts: ["Todos os tipos de lixo eletrônico", "Lâmpadas fluorescentes", "Pilhas e baterias", "Eletrodomésticos grandes"],
    hours: "Segunda a Sábado: 7h às 18h",
    type: "prefeitura",
    distance: "~30 km",
    lat: -19.8694,
    lng: -43.9673,
  },
  {
    id: "3",
    name: "Magazine Luiza — Programa Descarte Consciente",
    address: "Lojas da região metropolitana de BH",
    city: "Região Metropolitana",
    state: "MG",
    phone: "SAC: 0800-310-0002",
    accepts: ["Celulares", "Tablets", "Notebooks", "Pilhas e baterias", "Carregadores"],
    hours: "Horário comercial da loja",
    type: "loja",
    distance: "Diversas unidades",
    lat: -19.8157,
    lng: -44.2045,
  },
  {
    id: "4",
    name: "Casas Bahia / Ponto Frio — Logística Reversa",
    address: "Lojas da região metropolitana de BH",
    city: "Região Metropolitana",
    state: "MG",
    phone: "SAC: 4003-0101",
    accepts: ["Celulares", "Tablets", "Notebooks", "Pilhas e baterias"],
    hours: "Horário comercial da loja",
    type: "loja",
    distance: "Diversas unidades",
    lat: -19.84,
    lng: -44.15,
  },
  {
    id: "5",
    name: "Cooperativa de Catadores de Materiais Recicláveis de Esmeraldas",
    address: "Bairro Industrial — Esmeraldas/MG",
    city: "Esmeraldas",
    state: "MG",
    accepts: ["Computadores e periféricos", "Cabos e fios de cobre", "Eletrodomésticos pequenos", "Metais e placas de circuito"],
    hours: "Segunda a Sexta: 8h às 16h",
    type: "cooperativa",
    distance: "~7 km do Novo Retiro",
    lat: -19.758,
    lng: -44.305,
  },
  {
    id: "6",
    name: "GM&C Reciclagem de Eletrônicos",
    address: "R. Vinte e Quatro, 50 — Cinco, Contagem/MG",
    city: "Contagem",
    state: "MG",
    phone: "(31) 3391-7000",
    accepts: ["Todos os tipos de eletrônicos", "Equipamentos de informática", "Telecomunicações", "Equipamentos médicos"],
    hours: "Segunda a Sexta: 8h às 18h",
    type: "empresa",
    distance: "~25 km",
    lat: -19.932,
    lng: -44.0538,
  },
  {
    id: "7",
    name: "Recicla Minas — Reciclagem Especializada",
    address: "Belo Horizonte/MG",
    city: "Belo Horizonte",
    state: "MG",
    phone: "(31) 3225-8800",
    accepts: ["Lâmpadas fluorescentes", "Pilhas e baterias", "Eletrônicos em geral", "Cartuchos e toners"],
    hours: "Segunda a Sexta: 8h às 17h30",
    type: "empresa",
    distance: "~35 km",
    lat: -19.9191,
    lng: -43.9386,
  },
  {
    id: "8",
    name: "Papa-Pilhas (Programa Nacional)",
    address: "Supermercados, farmácias e bancos da região",
    city: "Esmeraldas e região",
    state: "MG",
    accepts: ["Pilhas alcalinas (AA, AAA, C, D)", "Baterias recarregáveis", "Pilhas botão", "Baterias de celular"],
    hours: "Horário do estabelecimento",
    type: "ong",
    distance: "Diversos pontos",
    lat: -19.765,
    lng: -44.312,
  },
];

export const typeLabels: Record<CollectionPoint["type"], string> = {
  prefeitura: "Órgão Público",
  loja: "Loja / Varejo",
  cooperativa: "Cooperativa",
  empresa: "Empresa de Reciclagem",
  ong: "Programa Nacional",
};

export const typeColors: Record<CollectionPoint["type"], string> = {
  prefeitura: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  loja: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  cooperativa: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  empresa: "bg-primary-500/20 text-primary-400 border-primary-500/30",
  ong: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};
