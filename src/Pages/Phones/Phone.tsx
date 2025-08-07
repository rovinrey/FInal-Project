import './Phone.css';
import ProductCardComponent from "../../Components/Products/ProductCardComponent";

// Product images
import tecno from '../../assets/tecno_camon_pro_40_5g.jpg';
import redMagic from '../../assets/redMagic.jpg';
import Samsung from '../../assets/samsung.jpg';
import IP16pro from '../../assets/IP16.jpg';
import Pocof7 from '../../assets/poco.jpg';
import IQOOneo from '../../assets/IQOOneo.jpg';
import ROG from '../../assets/ROGphone9.jpg';

function PhonePage() {
    const phoneProducts = [
        {
            id: 1,
            name: "Tecno Camon 40 Pro 5G",
            img: tecno,
            productDesc: "Powered by Dimensity 7300 Ultra",
            price: 14999,
            rating: 4.5
        },
        {
            id: 2,
            name: "Red Magic 10 Pro",
            img: redMagic,
            productDesc: "Powered by Snapdragon 8 Elite",
            price: 45000,
            rating: 3
        },
        {
            id: 3,
            name: "iPhone 16 Pro-Max",
            img: IP16pro,
            productDesc: "Chipset: Apple A18 Pro",
            price: 145000,
            rating: 4
        },
        {
            id: 4,
            name: "Samsung Galaxy S25",
            img: Samsung,
            productDesc: "Powered by Snapdragon 8 Elite",
            price: 89000,
            rating: 4.1
        },
        {
            id: 5,
            name: "Poco P7 Pro 5G",
            img: Pocof7,
            productDesc: "MediaTek Dimensity 8400 Ultra",
            price: 21000,
            rating: 3.2
        },
        {
            id: 6,
            name: "ROG Phone 9 Pro",
            img: ROG,
            productDesc: "Powered by Snapdragon 8 Elite",
            price: 47000,
            rating: 4.5
        },
        {
            id: 7,
            name: "IQOO Neo 10",
            img: IQOOneo,
            productDesc: "Powered by Snapdragon 8s Gen4",
            price: 29000,
            rating: 4.0
        }
    ];

    return (
        <div className="phone">
            {phoneProducts.map(product => (
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
    );
}

export default PhonePage;
