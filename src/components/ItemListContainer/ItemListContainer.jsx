import { useState, useEffect } from 'react';
import getProducts from '../getProducts';
import ItemList from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <Container>
            <h1 className='my-5 d-flex justify-content-center'>Productos</h1>
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;