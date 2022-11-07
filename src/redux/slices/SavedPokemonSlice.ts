import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../services/offline/LocalStorage.service";

const savedPokemonSlice = createSlice({
	name: "savedPokemon",
	initialState: {
		value: LocalStorageService.getter("savedPokemon") || [],
	},
	reducers: {
		catchPokemon: (state: any, { payload }) => {
			const id = `${payload.pokemonId}`;
			const nickname = `${payload.nickname}`;

			const newPokemon = { id, nickname };

			let current = [...state.value];

			current.push(newPokemon);
			LocalStorageService.setter("savedPokemon", current);
			state.value = current;
		},
		releasePokemon: (state: any, { payload }) => {
			payload = `${payload}`;
			let current = [...state.value];
			current = current.filter(
				(item: { id: string | number; nickname: string }) =>
					item.id !== payload
			);
			LocalStorageService.setter("savedPokemon", current);
			state.value = current;
		},
	},
});
export const { catchPokemon, releasePokemon } = savedPokemonSlice.actions;
export default savedPokemonSlice.reducer;
