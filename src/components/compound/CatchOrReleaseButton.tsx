import { BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CatchReleasePokemonDialog from "./CatchReleasePokemonDialog";

function CatchOrReleaseButton({
	pokemonId,
	caught,
}: {
	pokemonId: string | number;
	caught: boolean;
}) {
	const [showDialog, setShowDialog] = useState(false);

	const toggleShowDialog = () => setShowDialog(!showDialog);
	return (
		<>
			<button
				role="button"
				onClick={(e: any) => {
					e.preventDefault();
					e.stopPropagation();
					toggleShowDialog();
				}}
				className="bg-black/20 dark:bg-white/20 hover:dark:bg-white-40 hover:bg-black/40 transition-all duration-200 px-3 py-[2px] rounded-full flex flex-row text-xs items-center"
			>
				{!caught ? (
					<>
						Catch <BookmarkIcon className="h-6 w-6" />
					</>
				) : (
					<>
						Release
						<BookmarkSlashIcon className="h-6 w-6" />
					</>
				)}
			</button>
			<CatchReleasePokemonDialog
				pokemonId={pokemonId}
				showDialog={showDialog}
				toggleShowDialog={toggleShowDialog}
				caught={caught}
			/>
		</>
	);
}

export default CatchOrReleaseButton;
