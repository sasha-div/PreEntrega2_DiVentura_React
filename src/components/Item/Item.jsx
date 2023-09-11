import { Counter } from '../Counter/Counter';
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
                        <Counter />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Item;