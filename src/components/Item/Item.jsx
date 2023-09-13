import { ItemCounter } from '../ItemCounter/ItemCounter';
import { Card, Button } from 'react-bootstrap';
import './Item.css';

const Item = ({ product }) => {
    return (
        <div className='itemCard'>
            <Card style={{ width: '15rem', height: '36rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>$ {product.price}</Card.Text>
                    <Button variant='light' size="sm" href={`/item/${product.id}`}>Ver detalles</Button>
                </Card.Body>
                <ItemCounter initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </Card>
        </div>
    );
};

export default Item;