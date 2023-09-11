import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div>
            <h2 className='mb-5'>Productos</h2>
            {
                products.length > 0 &&
                products.map((product) => {

                    return (
                        <Item key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default ItemList;