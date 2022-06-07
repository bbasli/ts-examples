function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [counterGetter, counterSetter] = simpleState(2);
console.log(counterGetter());

counterSetter(15);
console.log(counterGetter());

const [st2Getter, st2Setter] = simpleState<string | null>(null);
console.log(st2Getter());

st2Setter("str");
console.log(st2Getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
  str: number;
}

const pokemons: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
    str: 9,
  },
  {
    name: "Mesaasaur",
    hp: 11,
    str: 2,
  },
];

const ranks = ranker(pokemons, ({ str }) => str);
console.log(ranks);
