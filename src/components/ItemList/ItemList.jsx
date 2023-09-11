import { Container } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <Container>
            <h2 className='mb-5'>Productos</h2>
            {
                products.length > 0 &&
                products.map((product) => {

                    return (
                        <Item product={product} />
                    )
                })
            }
        </Container>
    )
}

export default ItemList;