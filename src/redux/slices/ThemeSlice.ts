import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: {
		value: localStorage.getItem("theme") || "dark",
	},
	reducers: {
		toggleTheme: (state) => {
			state.value = state.value === "dark" ? "light" : "dark";
			localStorage.setItem("theme", state.value);
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
