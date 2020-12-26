import React from "react";
import Index from "./components/Main/Index";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./components/Routes";

const App: React.FC = () => {
	const [open, setOpen] = React.useState(false);

	const handleDrawer = () => {
		let status = !open;
		setOpen(status);
	};

	return (
		<>
			<NavBar open={open} handleDrawer={handleDrawer} />
			<Index open={open}>
				<Routes />
			</Index>
		</>
	);
};

export default App;