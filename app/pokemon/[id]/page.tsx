import Link from "next/link";

import axios from "axios";

type PokemonPageProps = {
  params: { id: string };
};

export default async function PokemonSoloPage({ params }: PokemonPageProps) {
  const { id } = params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  
  const sprite = data.sprites.front_default;

  return (
    <main>
      <h1>{data.name}</h1>
      <p>Nombre: {data.name}</p>
      <img src={sprite} alt={data.name} width={400} height={400} />
    </main>
  );
}
