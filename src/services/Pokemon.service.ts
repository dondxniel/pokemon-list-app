import axios from "axios";
import toTitleCase from "../helpers/toTitleCase";
import { get_all_pokemon } from "./../config/urls.config";

export default (class PokemonService {
	static async getAllPokemon() {
		let {
			data: { results },
		} = await axios({
			method: "GET",
			url: get_all_pokemon,
		});

		let elaborateResults = await results.map(async (item: any) => {
			let pokemonId = item.url.split("/");
			pokemonId = parseInt(pokemonId[pokemonId.length - 2]);
			let { data } = await axios({
				method: "GET",
				url: `${get_all_pokemon}/${pokemonId}`,
			});
			return {
				id: pokemonId,
				pokemonName: toTitleCase(data.name),
				pokemonImg: data.sprites.front_default,
			};
		});
		return elaborateResults;
	}
	static async getSinglePokemon(id: string | number) {
		let { data } = await axios({
			method: "GET",
			url: get_all_pokemon + `/${id}`,
		});
		let relevantData = {
			id: id,
			name: toTitleCase(data.name),
			img: data.sprites.front_default,
			height: data.height,
			baseExp: data.base_experience,
			abilities: data.abilities.map((item: any) =>
				toTitleCase(item.ability.name)
			),
			types: data.types.map((item: any) => toTitleCase(item.type.name)),
			moves: data.moves.map((item: any) => toTitleCase(item.move.name)),
		};
		return relevantData;
	}
	static async getPokemonFromIdArray(ids: any[]) {
		console.log(ids);

		let data: any = ids.map(async (id: any) => {
			let fetched = await this.getSinglePokemon(id.id);
			return { ...fetched, others: { nickname: id.nickname } };
		});
		data = await Promise.all(data);
		data = data.map((item: any) => {
			return {
				id: item.id,
				pokemonName: item.name,
				pokemonImg: item.img,
				others: item.others,
			};
		});

		return data;
	}
});
