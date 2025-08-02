import { useState } from 'react';

// The props now include a unique 'id' and a function to call when the button is clicked.
type ProductCardProps = {
    name: string;
    img: string;
    productDesc: string;
    price: number;
    // New prop: a function to be called on "add to cart"
    onAddToCart: (quantity: number) => void;
};

// Destructure the new prop in the function signature
function ProductCardComponent({ name, img, productDesc, price, onAddToCart }: ProductCardProps) {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMin = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
    };

    return (
        <div className='product-card'>
            <img src={img} alt={name} className='product-image' />
            <div className='product-content'>
                <h3 className='product-name'>{name}</h3>
                <p className='product-desc'>{productDesc}</p>
                <p className='product-price'>₱{price}</p>
                <div className='quantity-container'>
                    <button className='min-button' onClick={handleMin}>-</button>
                    <span className='quantity-display'>{quantity}</span>
                    <button className='add-button' onClick={handleAdd}>+</button>
                </div>
                {/* Button to trigger the parent's function */}
                <button
                    className='add-to-cart-button'
                    onClick={() => onAddToCart(quantity)}
                    disabled={quantity === 0}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCardComponent;