import Clients from "./Clients";

function SectionFive(){
    return (
        <>
        <div className='sec-five'>
            <h6>Client's Feedback</h6>
            <h1>Some <span>Great <br/>Words</span> From Our Clients</h1>
            <div className='client-flex'>
            <Clients name='Justin Septimus' designation='CEO,word yt'/>
            <Clients name='Ashlyn Goose' designation='Managing Director'/>
            </div>
        </div>
        </>
    )
}

export default SectionFive;