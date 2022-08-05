import blog1 from './Images/blog1.png';
import cris from './Images/cristofer.png';

function Blogs(props){
    return (
        <>
        <div className='blogs'>
            <div className='flex'>

            <div>
            <h6>{props.designation}</h6>
            <h4>{props.info}</h4>
            </div>
            <img src={blog1} height={164} width={164}/>
            </div>

            <div className='flex-2'>
                <img src={cris}/>
                <div>
                    <h5>{props.name}</h5>
                    <h6>January 25, 2021 , 5 min Read </h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blogs;