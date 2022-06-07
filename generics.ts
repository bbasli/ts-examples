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

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

console.log(pluck(pokemons, "hp"));
console.log(pluck(pokemons, "name"));
console.log(pluck(pokemons, "str"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  quantity: 3,
  productID: "qwe123",
  time: 1,
  user: "me",
});

sendEvent("checkout", { user: "joe", time: 2 });
