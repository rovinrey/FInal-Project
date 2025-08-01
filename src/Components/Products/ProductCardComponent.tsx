import './ProductCardComponent.css';
import { useState } from 'react';

// The props now include a unique 'id' and a function to call when the button is clicked.
type ProductCardProps = {
    id: number;
    name: string;
    img: string;
    productDesc: string;
    price: number;
    rating: number;
    // This is the function passed down from the parent
    onAddToCart: (product: {id: number, name: string, price: number, quantity: number}) => void;
};

// Destructure the new props in the function signature
function ProductCardComponent({ id, name, img, productDesc, price, rating, onAddToCart }: ProductCardProps) {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const handleMin = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
    };

    // This new function collects the product data and calls the parent's function
    const handleAddToCartClick = () => {
        if (quantity > 0) {
            // Call the 'onAddToCart' function from the parent
            onAddToCart({ id, name, price, quantity });
            // Reset the quantity display on the card
            setQuantity(0);
        }
    }

    // for star rating
    const renderStars = (currentRating: number) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < currentRating) {
                stars.push(<span key={i} className="star filled">&#9733;</span>); // Filled star
            } else {
                stars.push(<span key={i} className="star empty">&#9734;</span>); // Empty star
            }
        }
        return stars;
    };

    return (
        <div className='product-card'>
            <img src={img} alt={name} className='product-image'/>
            <div className='product-content'>
                <h3 className='product-name'>{name}</h3>
                <p className='product-desc'>{productDesc}</p>
                <p className='product-price'>₱{price}</p>
                <div className='product-rating'>
                    {renderStars(rating)}
                </div>
                <div className='quantity-container'>
                    <button className='min-button' onClick={handleMin}>-</button>
                    <span className='quantity-display'>{quantity}</span>
                    <button className='add-button' onClick={handleAdd}>+</button>
                </div>
                <button
                    onClick={handleAddToCartClick} // Connect this button to the new function
                    className='add-to-cart-button'
                    disabled={quantity === 0}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCardComponent;