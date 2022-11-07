import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
	catchPokemon,
	releasePokemon,
} from "../../redux/slices/SavedPokemonSlice";
import Input from "../simple/Input";

function CatchReleasePokemonDialog({
	pokemonId,
	caught,
	showDialog,
	toggleShowDialog,
}: {
	pokemonId: number | string;
	caught: boolean;
	showDialog: boolean;
	toggleShowDialog: () => void;
}) {
	const nicknameRef = useRef<any>(null);
	const dispatch = useDispatch();

	const handleCatchPokemon = () => {
		let nickname = nicknameRef?.current?.value ?? "";
		if (nickname === "")
			return window.alert("You must give your pokemon a nickname.");
		dispatch(catchPokemon({ pokemonId, nickname }));
		toggleShowDialog();
	};

	const handleReleasePokemon = () => {
		dispatch(releasePokemon(pokemonId));
		toggleShowDialog();
	};

	return (
		<div id="dialogCover">
			{showDialog && (
				<div
					className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 animate__animated animate__zoomIn animate__faster text-center"
					onClick={(e: any) => {
						e.preventDefault();
						e.stopPropagation();
						toggleShowDialog();
					}}
				>
					<div
						onClick={(e: any) => {
							e.preventDefault();
							e.stopPropagation();
						}}
					>
						{!caught && (
							<div className="p-5 bg-white dark:bg-gray-700 rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-72">
								Give your Pokemon a nickname.
								<div className="py-3">
									<Input inputRef={nicknameRef} />
								</div>
								<div className="flex flex-row gap-2">
									<button
										className="px-9 py-1 bg-black dark:bg-white rounded-full text-white dark:text-black md:text-base text-xs text-center"
										onClick={handleCatchPokemon}
									>
										Catch
									</button>
									<button
										className="px-9 py-1 bg-red-500 rounded-full text-white dark:text-black md:text-base text-xs text-center"
										onClick={toggleShowDialog}
									>
										Cancel
									</button>
								</div>
							</div>
						)}
						{caught && (
							<div
								className="p-5 bg-white dark:bg-gray-700 rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-72"
								onClick={(e: any) => {
									e.preventDefault();
									e.stopPropagation();
								}}
							>
								Are you sure you want to release this pokemon?
								<div className="pt-3 flex flex-row gap-2">
									<button
										className="px-9 py-1 bg-black dark:bg-white rounded-full text-white dark:text-black md:text-base text-xs text-center"
										onClick={handleReleasePokemon}
									>
										Release
									</button>
									<button
										className="px-9 py-1 bg-red-500 rounded-full text-white dark:text-black md:text-base text-xs text-center"
										onClick={toggleShowDialog}
									>
										Cancel
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default CatchReleasePokemonDialog;
