import { useState } from "react";

import People from "./People";
import latest from './Images/latest work.png'
import page from './Images/page.png';
import showergel from './Images/showergel.png';
import music from './Images/music.png';
import phone from './Images/phone.png';
import colors from './Images/colors.png';
import TeamMembers from "./data/TeamMembers";


function SectionFour(){

    const[team, setTeam]=useState(TeamMembers);

    return (
        <>
        <div className='sec-four'>
            <h6>Team Member</h6>
            <h1>We Have <span> Some Awesome</span> People</h1>

            <div className='people-flex'>

{team.map((item)=>(
<People val={item}/>
))}
            
            </div>

            <h6>Our Work</h6>
            <h1>We Have Some <span>Designed & Development</span> Projects</h1>
            <ul>
                <li>All</li>
                <li>Graphic Design</li>
                <li>UI/UX Design</li>
                <li>Web Development</li>
            </ul>
            <div className='people-flex'>
            <img src={latest} height={370} width={370}/>
            <img src={page} height={470} width={370}/>
            <img src={showergel} height={370} width={370}/>
            </div>
            <div className='people-flex'>
            <img src={music} height={470} width={370}/>
            <img src={phone} height={370} width={370}/>
            <img src={colors} height={470} width={370}/>
            </div>

        </div>
        </>
    )
}

export default SectionFour;