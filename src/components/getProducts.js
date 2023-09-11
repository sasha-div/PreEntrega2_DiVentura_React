
import data from '../data/products.json'

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export default getProducts;