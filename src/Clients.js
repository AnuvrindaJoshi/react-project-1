import justin from './Images/justin.png';

function Clients(props){
return (
    <>
    <div className='clients'>
        <h4>{props.name}</h4>
        <h6>{props.designation}</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing. </p>
        <img src={justin} height={80} width={80}/>
    </div>
    </>
)
}

export default Clients;