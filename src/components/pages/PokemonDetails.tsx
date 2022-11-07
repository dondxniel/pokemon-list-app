import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PokemonService from "../../services/Pokemon.service";
import CatchOrReleaseButton from "../compound/CatchOrReleaseButton";
import DisplayItem from "../simple/DisplayItem";

function PokemonDetails() {
	const navigate = useNavigate();
	const savedPokemon = useSelector((state: any) => state.savedPokemon.value);
	const [caught, setCaught] = useState(false);
	const [nickname, setNickname] = useState("");

	const { id } = useParams();
	const [pokemonData, setPokemonData] = useState<any>({
		img: "",
		name: "",
	});
	const setPokemonDataToState = async () => {
		if (!id) return;
		let data = await PokemonService.getSinglePokemon(id);
		setPokemonData(data);
	};
	useEffect(() => {
		if (!id) navigate("/");
		setPokemonDataToState();

		let caughtTemp = false;
		let nicknameTemp = "";
		savedPokemon.forEach((item: any) => {
			if (`${item.id}` === `${id}`) {
				caughtTemp = true;
				nicknameTemp = item.nickname;
				return;
			}
		});
		setNickname(nicknameTemp);
		setCaught(caughtTemp);
	}, [savedPokemon]);
	return (
		<div className="mx-10 pt-24">
			<div className="flex md:flex-row flex-col gap-10">
				<div className="md:h-72 md:w-72 w-full h-auto rounded-full backdrop-blur-sm flex flex-row items-center justify-center border bg-white/40">
					<img
						src={pokemonData?.img}
						alt="Pokemon"
						className="h-full w-full"
					/>
				</div>
				<div className="bg-white rounded-xl p-5 flex-1 text-black">
					<h1 className="text-2xl border-b py-3 flex flex-row items-center gap-3">
						<div>
							{pokemonData?.name}{" "}
							{(nickname && `(${nickname})`) || ""}
						</div>
						<CatchOrReleaseButton
							caught={caught}
							pokemonId={`${id}`}
						/>
					</h1>
					<DisplayItem
						label="Height"
						item={`${pokemonData?.height}`}
					/>
					<DisplayItem
						label="Base Experience"
						item={pokemonData?.baseExp}
					/>
					<DisplayItem
						label="Abilities"
						item={pokemonData?.abilities}
					/>
					<DisplayItem label="Type" item={pokemonData?.types} />
					<DisplayItem label="Moves" item={pokemonData?.moves} />
				</div>
			</div>
		</div>
	);
}

export default PokemonDetails;
