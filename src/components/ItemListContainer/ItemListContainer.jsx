import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import getProducts from '../getProducts';
import { Container } from 'react-bootstrap';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
    }, [])

    return (
        <Container>
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;