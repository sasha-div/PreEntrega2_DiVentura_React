import { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProducts';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container } from 'react-bootstrap';

const ItemDetailContainer = ({ productId }) => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(productId)
            .then(res => {
                setProduct(res)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <Container className='d-flex justify-content-center mt-5'>
            {product &&
                <ItemDetail product={product} />}
        </Container>
    )
}

export default ItemDetailContainer;