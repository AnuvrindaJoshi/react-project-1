import gustavo from './Images/gustavo.png'
import icons from './icons/SocialIcon.png'

function People(props){
    return (
<>
<div className='gustavo'> 
    <img src={gustavo} height={270} width={250} />
    <img className='icon' src={icons}/>
    <h5>{props.name}</h5>
    <h6>{props.designation}</h6>
</div>
</>
    )
}

export default People;