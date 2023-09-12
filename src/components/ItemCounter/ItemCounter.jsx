import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ItemCounter = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const incrementQuantity = () => {
        quantity < stock && setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1);
    }

    return (
        <div>
            <div className="d-flex justify-content-center gap-3">
                <Button onClick={decrementQuantity} variant="light">-</Button>
                <p>{quantity}</p>
                <Button onClick={incrementQuantity} variant="light">+</Button>
            </div>
            <div className="d-flex justify-content-center my-2">
                <Button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</Button>
            </div>
        </div>
    )
}
