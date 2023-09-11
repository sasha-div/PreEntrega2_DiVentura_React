import { useState, useEffect } from 'react';
import getProducts from '../getProducts';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
    }, [])

    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer