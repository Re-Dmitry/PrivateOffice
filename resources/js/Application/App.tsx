import React from "react";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemsList";
import Routes from "./components/Routes";

const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<ItemList />
			<Routes />
		</>
	);
};

export default App;