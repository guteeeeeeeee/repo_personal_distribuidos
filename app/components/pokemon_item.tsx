"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  name: string;
  url: string;
};

export default function PokemonItem({ name, url }: Props) {
  const [clicks, setClicks] = useState(0);
  const [sprite, setSprite] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setSprite(res.data.sprites.front_default ?? null);
      setTypes(res.data.types.map((t: any) => t.type.name));
    });
  }, [url]);

  return (
    <li>
      <button
        onClick={() => setClicks((c) => c + 1)}
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        {sprite ? (
          <img src={sprite} alt={name} width={56} height={56} />
        ) : ( <div style={{width:56,height:56,background:"#eee"}} />
	) }
        <div>
          <strong>{name}</strong> usado: {clicks}
          <ul>
            {types.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </button>
    </li>
  );
}
