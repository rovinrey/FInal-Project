import './TopNav.css';
import cart from '../assets/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import logo from '../assets/devices_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function TopNav() {

    const [menu, setMenu ] = useState("home");

    return (
        <div className="top-nav">
            <div className="logo">
                <img src={logo} alt='' />
                <p>TICNOLOGIA</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() =>{setMenu("home")}}><Link to ='/Home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("phones")}}><Link to ='/phones'>Phones</Link> {menu === "phones"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("laptops")}}><Link to='/laptops'>Laptops</Link> {menu === "laptops"?<hr/>:<></>}</li>
            </ul>
            <div className='cart-icon'>
                <Link to='cart'><img src={cart} alt="" /></Link>
                <div className='cart-count'>0</div>
            </div>
        </div>
    );
}
export default TopNav;