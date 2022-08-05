import Foo from "./Foo";
import Copyright from "./Copyright";
import social from './icons/social icon footer.png'

function Footer(){
    return(
        <>
        <footer>
            <div>
                <h2><span>Digi</span>ency</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.</p>
                <img src={social}/>
            </div>
            <div>
                <Foo title='Company' one='About Us' two='Our Work' three='Clients' four='Our Blog' five='Contact Us'/>
            </div>
            <div>
                <Foo title='Services' one='Graphic Design' two='UI/UX Design' three='Web Development' four='App Development' five='Web Hosting'/>
           </div>
            <div>
                <h2>Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.</p>
            </div>
        </footer>
        <Copyright/>
        </>
    )
}

export default Footer;