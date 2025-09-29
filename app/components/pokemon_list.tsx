"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./pokemon_item";

type PokemonBase = { name: string; url: string };

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonBase[]>([]);

  useEffect(() => {
    axios
      .get<{ results: PokemonBase[] }>("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => setPokemons(res.data.results));
  }, []);

  return (
    <ul>
      {pokemons.map((p, index) => (
        <PokemonItem key={index} name={p.name} url={p.url} />
      ))}
    </ul>
  );
}
