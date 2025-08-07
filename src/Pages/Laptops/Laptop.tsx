import './laptop.css';
import ProductCardComponent from "../../Components/Products/ProductCardComponent";

// Laptop images 
import acerNitro from '../../assets/acerNitro.jpg';
import AsusROG from '../../assets/asusROG.jpg';
import Lenovo from '../../assets/LenovoLegion.jpg';
import gigaByte from '../../assets/gigabyte.jpg';

function LaptopPage() {
    const laptopProducts = [
        {
            id: 1,
            name: "Acer Nitro V16s",
            img: acerNitro,
            productDesc: "AMD Ryzen 7 260 Processor",
            price: 50000,
            rating: 4
        },
        {
            id: 2,
            name: "Asus ROG Strix G16",
            img: AsusROG,
            productDesc: "Intel Core i7 Processor 14650HX",
            price: 68000,
            rating: 0
        },
        {
            id: 3,
            name: "Lenovo Legion 51",
            img: Lenovo,
            productDesc: "Intel® Core™ i7-14700HX",
            price: 89000,
            rating: 0
        },
        {
            id: 4,
            name: "GIGABYTE Gaming A16",
            img: gigaByte,
            productDesc: "AMD Ryzen 7 260 - 1TB SSD",
            price: 100500,
            rating: 0
        }
    ];

    return (
        <div className="laptops">
            {laptopProducts.map(product => (
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

export default LaptopPage;
