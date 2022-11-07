import { useEffect, useState } from "react";
import PokemonService from "../../services/Pokemon.service";
import PokemonListItem from "../compound/PokemonListItem";

function Home() {
	const [pokemonList, setPokemonList] = useState<
		{ id: number; pokemonName: string; pokemonImg: string }[]
	>([]);
	const setPokemonToState = async () => {
		let pokemon = await Promise.all(await PokemonService.getAllPokemon());
		setPokemonList(pokemon);
	};
	useEffect(() => {
		setPokemonToState();
	}, []);
	return (
		<div className="mx-10 pt-24 grid grid-cols-1 md:grid-cols-5 gap-5 py-5">
			{pokemonList.map((pokemon) => (
				<PokemonListItem key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
}

export default Home;
