

function Clients(props){
return (
    <>
    <div className='clients'>
        <h4>{props.blogdata.title}</h4>
        <h6>{props.blogdata.position}</h6>
        <p> {props.blogdata.para}</p>
        <img src={props.blogdata.img} />
    </div>
    </>
)
}

export default Clients;