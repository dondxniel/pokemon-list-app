import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/compound/Navbar";
import Home from "./components/pages/Home";
import MyList from "./components/pages/MyList";
import PokemonDetails from "./components/pages/PokemonDetails";

function App() {
	const theme = useSelector((state: any) => state.theme.value);
	return (
		<div className={theme}>
			<div className="min-h-screen bg-[url(../public/assets/img/pokemon_light_bg.jpeg)] dark:bg-[url(../public/assets/img/pokemon_dark_bg.png)] bg-cover bg-no-repeat bg-center bg-fixed dark:text-white">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:id" element={<PokemonDetails />} />
						<Route path="/my-list" element={<MyList />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
