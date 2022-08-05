import dark from './icons/dark.png';


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
        </div>
    )
}

export default Navigationbar;