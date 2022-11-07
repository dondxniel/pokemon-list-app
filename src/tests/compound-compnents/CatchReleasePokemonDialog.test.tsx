import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CatchReleasePokemonDialog from "../../components/compound/CatchReleasePokemonDialog";
import store from "../../redux/store";

test("Checking if the dialog's cancel button works", () => {
	const result = render(
		<Provider store={store}>
			<CatchReleasePokemonDialog
				caught={true}
				pokemonId="1"
				showDialog={true}
				toggleShowDialog={() => null}
			/>
		</Provider>
	);

	fireEvent.click(screen.getByText("Cancel"));

	expect(result.container.querySelector("#dialog")).toBeNull();
});

test("Checking if the dialog won't show id showDialog is false", () => {
	const result = render(
		<Provider store={store}>
			<CatchReleasePokemonDialog
				caught={true}
				pokemonId="1"
				showDialog={false}
				toggleShowDialog={() => null}
			/>
		</Provider>
	);
	expect(result.container.querySelector("#dialog")).toBeNull();
});
