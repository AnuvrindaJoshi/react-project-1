import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import Form from "./Form";
import Frames from "./Frames";
import formImage from './Images/form.png';


function SectionSix(){
    return (
        <>
        <div className='sec-six'>
            <h6>Our Blog</h6>
            <h1>Our Latest <span>Blogs Will Keep</span> Everyone Updated</h1>
            <div className='people-flex'>
            <Blogs designation='Graphic Design' info='35 Stellar Graphic Design Blogs to Keep You Educated and Inspired' name='Graphic Design'/>
            <Blogs designation='Managing Director' info='Ridiculously powerful 2021 iPad Pro may drop this month' name='Haylie Mango'/>
           </div>
            <ContactUs/>

            <div className="people-flex">
            <figure><img src={formImage}/></figure>
            <Form/>
            </div>

            <Frames/>
        </div>
        </>
    )
}


export default SectionSix;