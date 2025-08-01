import './Homepage.css'
import ProductCardComponent from "../../Components/Products/ProductCardComponent";

import AsusROG from '../../assets/asusROG.jpg'

import Pocof7 from '../../assets/poco.jpg'
import IQOOneo from '../../assets/IQOOneo.jpg'
import ROG from '../../assets/ROGphone9.jpg'
import acerNitro from '../../assets/acerNitro.jpg'


function Homepage() {
    return(
        <>
      
        <div className="hero">
            <div className="left">
                <h2>Upgrade Your Tech,<br /> Upgrade Your Life</h2>
                <button>Get Started</button>
            </div>
            <div className='right'>
                <img src={AsusROG} />

            </div>

        </div>

        <h3>Top products</h3> 
        <div className='top-products'>  
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
            <ProductCardComponent 
                name={"Acer Nitro v16s "} 
                img={acerNitro} 
                productDesc={"AMD Ryzen 7 260 Processor"} 
                price={50000} 
                rating={4} 
            />
            
        </div>

        </>
             
    );
}
export default Homepage;