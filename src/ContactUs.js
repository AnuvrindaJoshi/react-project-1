import { useState } from "react";
import ContactBox from "./ContactBox";
import Services from "./data/Services";

function ContactUs(props){
    const[services, setServices]=useState(Services);
    return(
        <>
        <h6>Contact Us</h6>
        <h1>Feel Free to Contact With Us</h1>
        <div className='people-flex'>

            {services.map((item)=>(

<ContactBox a={item}/>

            ))}
       
       
        </div>
        </>
    )
}

export default ContactUs;