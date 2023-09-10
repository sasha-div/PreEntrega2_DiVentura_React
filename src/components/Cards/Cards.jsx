import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Counter } from '../Counter/Counter';

function Cards() {
    return (
        <Container className='d-flex gap-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/sPXZKPJ/product-003.webp" />
                <Card.Body>
                    <Card.Title>Horizon II: Forbidden West</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Counter />
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/sPXZKPJ/product-003.webp" />
                <Card.Body>
                    <Card.Title>Horizon II: Forbidden West</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Counter />
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/sPXZKPJ/product-003.webp" />
                <Card.Body>
                    <Card.Title>Horizon II: Forbidden West</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Counter />
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/sPXZKPJ/product-003.webp" />
                <Card.Body>
                    <Card.Title>Horizon II: Forbidden West</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Counter />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Cards;