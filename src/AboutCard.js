function AboutCard(props){
    return (
        <>
        <div className='about-card'>
            <img src={props.about.img} height={70} width={70}/>
          
            <h6>{props.about.title}</h6>
        </div>
        </>
    )
}

export default AboutCard;