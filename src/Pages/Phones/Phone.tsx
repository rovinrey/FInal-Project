import './Phone.css'
import ProductCardComponent from "../../Components/Products/ProductCardComponent";

//product images
import tecno from '../../assets/tecno_camon_pro_40_5g.jpg'
import redMagic from '../../assets/redMagic.jpg'
import Samsung from '../../assets/samsung.jpg'
import IP16pro from '../../assets/IP16.jpg'
import Pocof7 from '../../assets/poco.jpg'
import IQOOneo from '../../assets/IQOOneo.jpg'
import ROG from '../../assets/ROGphone9.jpg'

function PhonePage() {
    return(
        <div className="phone">
            <ProductCardComponent 
                name={"tecno camon 40 pro 5g"} 
                img={tecno} 
                productDesc={"powerd by dimensity 7300  ultra"} 
                price={14999} 
                rating={4.5} 
            />
                <ProductCardComponent 
                name={"Red magic 10 pro"} 
                img={redMagic} 
                productDesc={"Powered by snapdragon 8 Elite"} 
                price={45000} 
                rating={3} 
            />
                <ProductCardComponent 
                name={"Iphone 16 pro-max"} 
                img={IP16pro} 
                productDesc={"Chipset: Apple A18 Pro"} 
                price={145000}  
                rating={4} 
            />
                <ProductCardComponent 
                name={"Samsung galaxy s25"} 
                img={Samsung} 
                productDesc={"Powered by snapdragon 8 Elite"} 
                price={89000}  
                rating={4.1} 
            />
                <ProductCardComponent 
                name={"Poco p7 pro 5g"} 
                img={Pocof7} 
                productDesc={"Mediatek Dimensity 8400 Ultra"} 
                price={21000} 
                rating={3.2} 
            />   
             <ProductCardComponent 
                name={"ROG Phone 9 pro"} 
                img={ROG} 
                productDesc={"Powered by Snapdragon 8 Elite"} 
                price={47000} 
                rating={4.5} 
            />
                <ProductCardComponent 
                name={"IQOO Neo 10"} 
                img={IQOOneo} 
                productDesc={"Powered by snapdragon 8s Gen4"} 
                price={29000}  
                rating={4.0} 
            />
       </div>
    );

}
export default PhonePage;