import ContactBox from "./ContactBox";

function ContactUs(){
    return(
        <>
        <h6>Contact Us</h6>
        <h1>Feel Free to Contact With Us</h1>
        <div className='people-flex'>
        <ContactBox intro='Drop a line' service='Mail Us'/>
        <ContactBox intro='24/7 Service' service='Call Us'/>
        <ContactBox intro='Location' service='Visit Us'/>
        </div>
        </>
    )
}

export default ContactUs;