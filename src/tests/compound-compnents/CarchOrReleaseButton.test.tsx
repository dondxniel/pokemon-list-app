import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CatchOrReleaseButton from "../../components/compound/CatchOrReleaseButton";
import store from "../../redux/store";

test("Make sure caught=true displays certain text", () => {
	render(
		<Provider store={store}>
			<CatchOrReleaseButton pokemonId={"1"} caught={true} />
		</Provider>
	);

	expect(screen.getByRole("button")).toHaveTextContent("Release");
});

test("Make sure caught=false displays certain text", () => {
	render(
		<Provider store={store}>
			<CatchOrReleaseButton pokemonId={"1"} caught={false} />
		</Provider>
	);

	expect(screen.getByRole("button")).toHaveTextContent("Catch");
});
