import { useState, useEffect } from 'react';
import getProducts from '../../helpers/getProducts';
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
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;