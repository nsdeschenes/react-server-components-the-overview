import Pokemon from "./Pokemon";

export default async function FetchAndPassPage() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokemon = await response.json();

  const abilities = pokemon?.abilities?.map((ability: any) => {
    return ability.ability.name;
  });

  return (
    <div>
      <h1>Fetch and Pass via Props</h1>
      <Pokemon
        name={pokemon?.name}
        imageSrc={pokemon?.sprites?.front_default}
        imageAlt={`${pokemon?.name} sprite`}
        abilities={abilities}
      />
    </div>
  );
}
