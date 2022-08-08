function AboutCard(props){
    return (
        <>
        <div className='about-card'>
            <img src={props.about.img}/>
          
            <h6>{props.about.title}</h6>
        </div>
        </>
    )
}

export default AboutCard;