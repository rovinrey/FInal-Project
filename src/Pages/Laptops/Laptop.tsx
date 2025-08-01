import './laptop.css'
import ProductCardComponent from "../../Components/Products/ProductCardComponent";

// laptop images 
import acerNitro from '../../assets/acerNitro.jpg'
import AsusROG from '../../assets/asusROG.jpg'
import Lenovo from '../../assets/LenovoLegion.jpg'
import gigaByte from '../../assets/gigabyte.jpg'

function LaptopPage() {
    return(
        <>
        <div className="laptops">
            <ProductCardComponent 
                name={"Acer Nitro v16s "} 
                img={acerNitro} 
                productDesc={"AMD Ryzen 7 260 Processor"} 
                price={50000} 
                rating={4} 
            />
            <ProductCardComponent 
                name={"Asus ROG strix G16"} 
                img={AsusROG} 
                productDesc={"Intel core i7 Processor 14650HX"} 
                price={68000} 
                rating={0} 
            />
            <ProductCardComponent 
                name={"Lenovo Legion 51"} 
                img={Lenovo} 
                productDesc={"Intel® Core™ i7-14700HX "} 
                price={89000} 
                rating={0} 
            />
            <ProductCardComponent 
                name={"GIGABYTE Gaming A16"} 
                img={gigaByte} 
                productDesc={"AMD Ryzen 7 260-1TB SSD"} 
                price={100500} 
                rating={0} 
            />
         
        </div>
        
        </>
    );

}
export default LaptopPage;