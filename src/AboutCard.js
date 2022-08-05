import doc from './icons/doc.png';

function AboutCard(props){
    return (
        <>
        <div className='about-card'>
          
            <h6>{props.about.title}</h6>
        </div>
        </>
    )
}

export default AboutCard;