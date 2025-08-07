import './Homepage.css';
import ProductCardComponent from "../../Components/Products/ProductCardComponent";

// Images
import AsusROG from '../../assets/asusROG.jpg';
import Pocof7 from '../../assets/poco.jpg';
import IQOOneo from '../../assets/IQOOneo.jpg';
import ROG from '../../assets/ROGphone9.jpg';
import acerNitro from '../../assets/acerNitro.jpg';

function Homepage() {
    const topProducts = [
        {
            id: 1,
            name: "Poco P7 Pro 5G",
            img: Pocof7,
            productDesc: "MediaTek Dimensity 8400 Ultra",
            price: 21000,
            rating: 3.2
        },
        {
            id: 2,
            name: "ROG Phone 9 Pro",
            img: ROG,
            productDesc: "Powered by Snapdragon 8 Elite",
            price: 47000,
            rating: 4.5
        },
        {
            id: 3,
            name: "IQOO Neo 10",
            img: IQOOneo,
            productDesc: "Powered by Snapdragon 8s Gen4",
            price: 29000,
            rating: 4.0
        },
        {
            id: 4,
            name: "Acer Nitro V16s",
            img: acerNitro,
            productDesc: "AMD Ryzen 7 260 Processor",
            price: 50000,
            rating: 4.0
        }
    ];

    return (
        <>
            <div className="hero">
                <div className="left">
                    <h2>Upgrade Your Tech,<br /> Upgrade Your Life</h2>
                    <button>Get Started</button>
                </div>
                <div className='right'>
                    <img src={AsusROG} alt="Asus ROG Hero" />
                </div>
            </div>

            <h3>Top Products</h3> 
            <div className='top-products'>  
                {topProducts.map(product => (
                    <ProductCardComponent
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        productDesc={product.productDesc}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </>
    );
}

export default Homepage;
