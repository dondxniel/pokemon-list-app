import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonService from "../../services/Pokemon.service";
import PokemonListItem from "../compound/PokemonListItem";

function MyList() {
	const savedPokemon = useSelector((state: any) => state.savedPokemon.value);
	const [savedPokemonList, setSavedPokemonList] = useState<any>([]);

	const fetchSaved = async () => {
		let fetchedSavedPokemonList =
			await PokemonService.getPokemonFromIdArray(savedPokemon);

		setSavedPokemonList(fetchedSavedPokemonList);
	};

	useEffect(() => {
		fetchSaved();
	}, [savedPokemon]);
	return (
		<div className="mx-10 pt-24 grid grid-cols-1 md:grid-cols-5 gap-5 py-5">
			{savedPokemonList?.map((pokemon: any) => (
				<PokemonListItem key={pokemon?.id} pokemon={pokemon} />
			))}
		</div>
	);
}

export default MyList;
