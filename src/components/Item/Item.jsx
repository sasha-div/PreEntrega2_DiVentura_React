import { ItemCounter } from '../ItemCounter/ItemCounter';
import { Card, Col, Row } from 'react-bootstrap';

const Item = ({ product }) => {
    return (
        <div>
            <Row className='d-flex justify-content-center gap-3'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card style={{ width: '18rem', height: '38rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}
                            </Card.Text>
                        </Card.Body>
                        <ItemCounter initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Item;