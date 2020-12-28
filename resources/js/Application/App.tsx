import React, { useEffect } from "react";
import Index from "./components/Main/Index";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./components/Routes";
import Cookies from 'js-cookie';
import axios from 'axios';
import { IProduct } from "./interfaces/IProduct";

const App: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [auth, setAuth] = React.useState<boolean>(false);
    const [productsInCart, setProductsInCart] = React.useState<IProduct[]>([]);
    const [userMoney, setUserMoney] = React.useState<number>(0);

    function setProductsInLocalStorage(values:any) {
        const product: IProduct = {
            id: values[0],
            title: values[1],
            price: values[2]
        }
        setProductsInCart(prev => {
            localStorage.setItem('products_in_cart', JSON.stringify([product, ...prev]))
            return [product, ...prev]
        });
    }

    useEffect(() => {
        if (Cookies.get('user_logged_in') == 'true') {
            setAuth(true);
            const fetchData = async () => {
                const result = await axios.get('/api/me')
                setUserMoney(result.data.money);
            };
            fetchData();

            const saved = JSON.parse(localStorage.getItem('products_in_cart') || '[]') as IProduct[]
            setProductsInCart(saved)
        };
    }, []);

    const handleDrawer = () => {
        let status = !open;
        setOpen(status);
    };

    return (
        <>
            {auth
            ? <NavBar open={open} setAuth={setAuth} handleDrawer={handleDrawer} userMoney={userMoney} />
            : null}
            <Index open={open}>
                <Routes auth={auth} setAuth={setAuth} setProductsInCart={setProductsInLocalStorage} />
            </Index>
        </>
    );
};

export default App;

