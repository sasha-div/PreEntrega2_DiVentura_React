import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    products.length > 0 &&
                    products.map((product) => {

                        return (
                            <Item key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemList;