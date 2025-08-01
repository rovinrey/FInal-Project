
import './LandingPage.css'
import { Link } from 'react-router-dom';
import AsusROG from '../../assets/asusROG.jpg'

function LandingPage() {
    return(
       <>
            
        <div className="hero">
            <div className="left">
                <h2>Upgrade Your Tech,<br /> Upgrade Your Life</h2>
                <p>Welcome to our shop, we are happy<br/>
                    to serve you</p>
                <Link to='/Home'>
                    <button>Get Started</button>
                </Link>
            </div>
            <div className='right'>
                <img src={AsusROG} />
            </div>
        </div>
        </>
    );
}
export default LandingPage;