function Form(){
    return(
        <>
        <div>
        <h3>Send Your <span>Message To Us</span></h3>
        <form>
            <div>
            <input placeholder="Name"></input>
            <input placeholder="Mobile Number"></input>
            </div>
            <div>
            <input placeholder="Email"></input>
            <input placeholder="Subject"></input>
            </div>
            <button>Send Message</button>
        </form>
        </div>
        </>
    )
}

export default Form;