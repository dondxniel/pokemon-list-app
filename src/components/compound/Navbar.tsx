import { Bars4Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/ThemeSlice";
import NavLink from "../simple/NavLink";

function Navbar() {
	const dispatch = useDispatch();
	const theme = useSelector((state: any) => state.theme.value);
	const savedPokemon = useSelector((state: any) => state.savedPokemon.value);
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => setShowMenu(!showMenu);
	return (
		<div className="fixed left-0 right-0 z-20">
			<div className="flex flex-row justify-between items-center mx-5 py-7">
				<div>
					<NavLink link="/" label="Pokemon List" />
				</div>
				<div className="flex flex-row gap-3 items-center">
					<div
						className="px-3 py-3 bg-black dark:bg-white rounded-full text-white dark:text-black text-xs text-center cursor-pointer flex flex-row justify-center items-center"
						onClick={() => dispatch(toggleTheme())}
					>
						{theme === "dark" && (
							<SunIcon className="h-4 w-4 fill-yellow-500" />
						)}
						{theme === "light" && (
							<MoonIcon className="h-4 w-4 fill-blue-500" />
						)}
					</div>
					<div className="flex flex-col gap-3 relative">
						<div className="flex flex-row justify-end md:hidden">
							<div
								className="px-5 py-1 bg-black dark:bg-white rounded-full text-white dark:text-black text-xs text-center"
								onClick={toggleMenu}
							>
								<Bars4Icon className="h-3 w-3" />
							</div>
						</div>
						<div
							className={`flex md:flex-row flex-col gap-3 overflow-hidden transition-all duration-200 md:static absolute top-[100%] right-[0] w-40 md:w-auto md:h-auto mt-5 md:mt-0 ${
								showMenu ? "h-20" : "h-0"
							}`}
						>
							<NavLink link="/" label="Home" />
							<NavLink
								link="/my-list"
								label={`My List (${savedPokemon.length})`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
