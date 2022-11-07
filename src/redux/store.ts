import { configureStore } from "@reduxjs/toolkit";
import SavedPokemonReducer from "./slices/SavedPokemonSlice";
import themeReducer from "./slices/ThemeSlice";

export default configureStore({
	reducer: { theme: themeReducer, savedPokemon: SavedPokemonReducer },
});
