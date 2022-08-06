
function Blogs(props){
    return (
        <>
        <div className='blogs'>
            <div className='flex'>

            <div>
            <h6>{props.val.position}</h6>
            <h4>{props.val.about}</h4>
            </div>
            <img src={props.val.biggerimg} height={164} width={164}/>
            </div>

            <div className='flex-2'>
                <img src={props.val.img}/>
                <div>
                    <h5>{props.val.name}</h5>
                    <h6>{props.val.date}, {props.val.time}</h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blogs;