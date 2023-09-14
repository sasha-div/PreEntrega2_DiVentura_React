import data from '../data/data.json';

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export default getProducts;

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((element) => element.id === id);

        item ? resolve(item) : reject({ error: "No se encontró el producto :(" });

    })
}

// export const getProductByPlatform = (platform) => {
//     return new Promise((resolve, reject) => {
//         const itemsByPlatform = data.filter((element) => element.platform === platform);

//         itemsByPlatform.length > 0 ? resolve(itemsByPlatform) : reject({ error: "No se encontraron productos para esta plataforma :(" });

//     })
// }