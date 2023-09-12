import { ItemCounter } from '../ItemCounter/ItemCounter';
import { Card, Button } from 'react-bootstrap';
import './Item.css';

const Item = ({ product }) => {
    return (
        <div className='itemCard'>
            <Card style={{ width: '15rem', height: '34rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Button className='itemDetailButton' variant='light' size="sm">Ver detalles</Button>
                </Card.Body>
                <ItemCounter initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </Card>
        </div>
    );
};

export default Item;