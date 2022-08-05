import mail from './icons/mail.png';


function ContactBox(props){
    return(
        <>
        <div className='contact'>

            <div className='contact-card'>
            <img src={mail}/>
            <div>
            <h4>{props.intro}</h4>
            <h3>{props.service}</h3>
            </div>
            </div>

            <h5>Support87@gmail.com</h5>
            <h5>ijkuiu874@gmail.com</h5>
        </div>
        </>
    )
}

export default ContactBox;