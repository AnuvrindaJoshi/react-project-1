import poster from './Images/poster.png';
import socialIcon from './icons/SocialIcon.png';


function Sectionone(){
    return(
        <>
        <div className="sec-one">
        <div>
            <h1>We are the best <span>Digital Agency</span> for Business</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Contact Us</button>
        </div>
        <img src={poster} className='img-one'/>
        <figure><img src={socialIcon}/></figure>
        </div>
        </>
    )
}

export default Sectionone;