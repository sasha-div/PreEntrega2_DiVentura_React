import data from '../data/products.json';

const getProducts = () => {
    return new Promise((resolve) => {
        resolve(data)
    })
}

export default getProducts;