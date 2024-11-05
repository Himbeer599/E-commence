import '../ProductItem/ProductItem.module.css'

const ProductItem=({product})=> (
    <div className="product-item">
        <h2>{product.name}
        <p>Brand:{product.brand}</p>
        <p>Price:{product.price}</p>
        <p>Size:{product.size}</p>
        </h2>
    </div>
);
export default ProductItem;
