import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CatchOrReleaseButton from "./CatchOrReleaseButton";

function PokemonListItem({ pokemon }: { pokemon: any }) {
	const savedPokemon = useSelector((state: any) => state.savedPokemon.value);
	const [caught, setCaught] = useState(false);
	useEffect(() => {
		let caughtTemp = false;

		savedPokemon.forEach((item: any) => {
			if (`${item.id}` === `${pokemon.id}`) {
				caughtTemp = true;
				return;
			}
		});

		setCaught(caughtTemp);
	});
	return (
		<Link to={`/${pokemon.id}`}>
			<div className="border-b border-l dark:border-gray-300 border-gray-200 min-h-72 backdrop-blur-sm bg-white/30 rounded-xl p-3 cursor-pointer hover:border-t hover:border-r transition-all duration-100 hover:scale-[1.02] flex flex-col">
				<div className="flex-1">
					<img
						className="h-full w-full"
						src={pokemon.pokemonImg}
						alt="Pokemon"
					/>
				</div>
				<div className="flex flex-row items-center justify-center gap-2 text-sm">
					{pokemon.pokemonName}{" "}
					{(pokemon?.others?.nickname &&
						`(${pokemon?.others?.nickname})`) ||
						""}
					<CatchOrReleaseButton
						pokemonId={pokemon.id}
						caught={caught}
					/>
				</div>
			</div>
		</Link>
	);
}

export default PokemonListItem;
