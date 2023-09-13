import { ItemCounter } from '../ItemCounter/ItemCounter';
import { Card } from 'react-bootstrap';

export const ItemDetail = ({ product }) => {
    return (
        <div>
            <Card style={{ width: '15rem', height: '40rem' }}>
                <Card.Img variant="top" src={product.img} alt={product.title} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Género: {product.genre}</Card.Text>
                    <Card.Text>Plataforma: {product.platform}</Card.Text>
                    <Card.Text>Precio: {product.price}</Card.Text>
                </Card.Body>
                <ItemCounter initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </Card>
        </div>
    )
}
