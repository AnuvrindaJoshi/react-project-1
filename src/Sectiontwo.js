import AboutCard from './AboutCard';
import about from './Images/about.png';

function Sectiontwo(props){
if(!props.child || props.child.length === 0){
  return <p>No data found</p>
}
return(
<>
<div className="sec-two">
    <div className='contact-card'>
    <figure><img src={about} height={250} width={400}/></figure>
    <div>
        <h6>About us</h6>
        <h1>We Are <span>Making Ideas Better</span> For Everyone</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.</p>
        <p>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.</p>
    <button>Contact us</button>
    </div>
    </div>

<div className='sec-two-flex-cards'>


{
  props.child.map((val)=>(

    <AboutCard about={val}/>

  ))
}


</div>
  </div>

</>
)
}

export default Sectiontwo;