
import icons from './icons/SocialIcon.png'

function People(props){
    return (
<>
<div className='gustavo'> 
    <img src={props.val.img} height={270} width={250} />
    <img className='icon' src={icons}/>
    <h5>{props.val.name}</h5>
    <h6>{props.val.designation}</h6>
</div>
</>
    )
}

export default People;