import Clients from "./Clients";

function SectionFive(props){
    return (
        <>
        <div className='sec-five'>
            <h6>Client's Feedback</h6>
            <h1>Some <span>Great <br/>Words</span> From Our Clients</h1>
            
            <div className='client-flex'>
            {props.five.map((item)=>(

<Clients blogdata={item}/>

            ))}
            </div>
        </div>
        </>
    )
}

export default SectionFive;