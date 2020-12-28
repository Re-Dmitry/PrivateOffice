import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import IRoutesProps from "../interfaces/IRoutesProps";
import LoginView from "./Auth/LoginView";
import RegisterView from "./Auth/RegisterView";
import ItemsList from "./Main/ItemsList";
import Payment from "./Payment/PaymentIndex";
import ProductsPage from "./Products/ProductsPage";

const Routes: React.FC<IRoutesProps> = ({ auth, setAuth, setProductsInCart }) => {
    return (
        <Switch>
            <Route path="/login" component={(props: JSX.IntrinsicAttributes) =>
                <LoginView auth={auth} setAuth={setAuth} {...props} />
            } />

            <Route component={RegisterView} path="/register" />

            {
                auth
                    ? <>
                        <Route component={ItemsList} path="/" exact />
                        <Route component={Payment} path="/payment" exact />
                        <Route path="/products" component={(props: JSX.IntrinsicAttributes) =>
                            <ProductsPage setProductsInCart={setProductsInCart} {...props} />
                        } />
                    </>
                    : <Redirect to='/login' />
            }
        </Switch>
    )
}

export default Routes;
