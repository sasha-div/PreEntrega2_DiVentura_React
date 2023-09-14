import { useState, useEffect } from 'react';
import getProducts from '../../helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { platform } = useParams();

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (platform) {
                    setProducts(res.filter((product) => product.platform === platform));
                } else {
                    setProducts(res);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }, [platform])

    return (
        <Container>
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;