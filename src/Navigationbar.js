import dark from './icons/dark.png';
import menu from './icons/Menu.svg';

function Navigationbar(){
    return(
        <div className="nav">
            <h2><span className="digi">Digi</span>ency</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our Work</li>
                <li>Clients</li>
                <li>Our Blog</li>
                <li>Contact Us</li>
            </ul>
            <img src={dark}/>
            <img src={menu} className='menu'/>
        </div>
    )
}

export default Navigationbar;