import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

export const Counter = () => {
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }

    useEffect(() => {
        const newPrice = number * 15000;
        setPrice(newPrice);
    }, [number])

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <Button onClick={restar} disabled={number === 0} variant="light">-</Button>
                <p>{number}</p>
                <Button onClick={sumar} disabled={number === 10} variant="light">+</Button>
            </div>
            <p className="d-flex justify-content-end pt-4">${price}</p>
        </div>
    )
}
