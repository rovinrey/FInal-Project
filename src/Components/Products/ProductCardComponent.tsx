import './ProductCardComponent.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
//import cart from '../../Pages/Cart/Cart'
// cart component
//import cart from '../../Pages/Cart'

// The props now include a unique 'id' and a function to call when the button is clicked.
type ProductCardProps = {
    name: string;
    img: string;
    productDesc: string;
    price: number;
    rating: number;

};

// Destructure the new props in the function signature
function ProductCardComponent({ name, img, productDesc, price, rating,}: ProductCardProps) {
    
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const handleMin = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
    }; 
    const total = quantity * price;

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
        <>
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
                    <Link to='/cart'>
                        <button className='add-to-cart-button'>Add to cart</button>
                    </Link>
                </div>
                  <p>Total: {total}</p> 
            </div>
           
        </>
        
    );
};

export default ProductCardComponent;