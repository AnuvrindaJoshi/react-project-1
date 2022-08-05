import SecthreeCards from "./SecthreeCards";

function Sectionthree(){
    return(
<>
<div className='sec-three'>
    <div>
    <h6>Our Experience</h6>
    <h1>We Have Completed <span>150+ Projects</span> Succesfully</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.</p>
    <p>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.</p>
    <button>Contact us</button>
    </div>
    
    <div className='people-flex'>
        <div>
        <SecthreeCards line1='250+' line2='Global Customer'/>
        <SecthreeCards line1='50+' line2='Team Member'/>
        </div>
        <div>
        <SecthreeCards line1='156+' line2='Project Completed'/>
        <SecthreeCards line1='15+' line2='Our Company'/>
        </div>
    </div>
</div>
</>
    )
}

export default Sectionthree;