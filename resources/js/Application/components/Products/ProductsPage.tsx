import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

const ProductsPage: React.FC = () => {
	const [products, setProducts] = useState<object[]>([])

	useEffect(() => {
		fetch(process.env.MIX_APP_URL + '/api/products')
			.then(response => response.json())
			.then(data => setProducts(data.data))
	}, [])

	return (products
		? <ProductsList products={products} />
		: <span>загрузка</span>
	);
}

export default ProductsPage;