"use client";

import Link from "next/link";

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
		<li key={index}>
			<PokemonItem name={p.name} url={p.url} />
        	  	<Link href={`/pokemon/${index + 1}`}>{p.name}</Link>
	        </li>
      ))}
    </ul>
  );
}
