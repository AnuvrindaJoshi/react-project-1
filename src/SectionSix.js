import { useState } from "react";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import Form from "./Form";
import Frames from "./Frames";
import formImage from './Images/form.png';
import LatestBlog from './data/LatestBlog';


function SectionSix(){
    const[latest, setLatest]=useState(LatestBlog);

    return (
        <>
        <div className='sec-six'>
            <h6>Our Blog</h6>
            <h1>Our Latest <span>Blogs Will Keep</span> Everyone Updated</h1>
            <div className='people-flex'>
            {latest.map((item)=>(

                <Blogs val={item}/>

            ))}
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