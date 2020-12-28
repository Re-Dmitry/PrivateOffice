import React, { useEffect, useState } from 'react';
import IProductsPageProps from '../../interfaces/IProductsPageProps';
import ProductsList from './ProductsList';

const ProductsPage: React.FC<IProductsPageProps> = ({ setProductsInCart }) => {
    const [products, setProducts] = useState<object[]>([])
    useEffect(() => {
        fetch(process.env.MIX_APP_URL + '/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.data))
    }, [])

    return (products
        ? <ProductsList products={products} setProductsInCart={setProductsInCart} />
        : <span>загрузка</span>
    );
}

export default ProductsPage;
