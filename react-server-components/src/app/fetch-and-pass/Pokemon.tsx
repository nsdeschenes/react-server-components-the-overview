"use client";

import { useState } from "react";

interface PokemonProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  abilities: string[];
}

export default function Pokemon({
  name,
  imageSrc,
  imageAlt,
  abilities,
}: PokemonProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Name: {name}</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ imageRendering: "pixelated" }}
        width={128}
      />
      <h2>Abilities:</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ maxWidth: "fit-content", textAlign: "left" }}>
          {abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => setCount(count + 1)}>
        Pokemon Counter: {count}
      </button>
    </div>
  );
}
