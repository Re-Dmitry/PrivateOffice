import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProduct';

const Payment: React.FC = () => {

    const products_in_cart = JSON.parse(localStorage.getItem('products_in_cart') || '[]') as IProduct[];
    let history = useHistory();

    function checkoutOrder() {
        axios.post('/api/checkout', {
            'products_in_cart': products_in_cart
        })
            .then(function (response) {
                localStorage.removeItem('products_in_cart');
                alert(response.data)
                history.push('/');
            })
            .catch(function (error) {
                alert(error.response.data)
            });
    }

    return (
        <>
            <div>
                <div>привет! это страница оплаты</div>
                <div>У вас в корзине: </div>
                <ul>
                    {products_in_cart.map(product => {
                        return <li>{product.title}</li>
                    })}
                </ul>
            </div>

            <Button onClick={() => checkoutOrder()} color="primary">
                Оформить
            </Button>

        </>
    );
}

export default Payment;
