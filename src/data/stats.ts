export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: "2M+",
    label: "Toneladas/ano",
    description: "de lixo eletrônico gerado no Brasil anualmente",
  },
  {
    value: "3%",
    label: "Reciclado",
    description: "apenas 3% do e-lixo brasileiro é reciclado corretamente",
  },
  {
    value: "500",
    label: "Anos",
    description: "tempo que uma pilha leva para se decompor na natureza",
  },
  {
    value: "5º",
    label: "No mundo",
    description: "Brasil é o 5º maior produtor de lixo eletrônico do planeta",
  },
];
