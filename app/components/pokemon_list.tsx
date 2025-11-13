"use client";

import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./pokemon_item";

type Pokemon={
	name:string,
	url:string;
};

async function fetchPokemons(): Promise<Pokemon[]>{
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
	return res.json();
}

export default function PokemonList(){
	const {data,isLoading,error} = useQuery<Pokemon[]>({
		queryKey:["pokemon"],
		queryFn: fetchPokemons,
	});
	
	if (isLoading) return <p>Cargando...</p>;
	if (error) return <p>Error al cargar</p>;
	
	return (
		<ul>
			{data.results?.map((p,index)=>(
				<li key={index}>
					<PokemonItem name={p.name} url={p.url} />
        	 	 	<Link href={`/pokemon/${index + 1}`}>{p.name}</Link>
				</li>
			))}
		</ul>
	);
}

/*export default function PokemonList() {
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
}*/
