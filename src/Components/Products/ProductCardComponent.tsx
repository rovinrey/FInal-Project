import './ProductCardComponent.css';
import { useCart } from '../../Pages/Cart/cartContext';

type ProductCardProps = {
  id: number;
  name: string;
  img: string;
  productDesc: string;
  price: number;
  rating: number;
};

function ProductCardComponent({ id, name, img, productDesc, price, rating }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, img, productDesc, price, rating });
    console.log('Added to cart:', name); // ✅ Debugging
  };

  const renderStars = (currentRating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < currentRating) {
        stars.push(<span key={i} className="star filled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star empty">&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div className='product-card'>
      <img src={img} alt={name} className='product-image' />
      <div className='product-content'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-desc'>{productDesc}</p>
        <p className='product-price'>₱{price}</p>
        <div className='product-rating'>{renderStars(rating)}</div>
        <button
          onClick={handleAddToCart} className='add-to-cart-button'>Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCardComponent;
