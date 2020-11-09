import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemsList from "./Main/ItemsList";
import ProductsPage from "./Products/ProductsPage";

const Routes: React.FC = (props) => {
	return (
		<Switch>
			<Route component={ItemsList} path="/" exact />
			<Route component={ProductsPage} path="/products" />
		</Switch>
	)
}

export default Routes;