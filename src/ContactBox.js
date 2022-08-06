
function ContactBox(props){
    return(
        <>
        <div className='contact'>

            <div className='contact-card'>
            <img src={props.a.img}/>
            <div>
            <h4><span>{props.a.line1}</span></h4>
            <h3>{props.a.line2}</h3>
            </div>
            </div>

            <h5>{props.a.add1}</h5>
            <h5>{props.a.add2}</h5>
        </div>
        </>
    )
}

export default ContactBox;