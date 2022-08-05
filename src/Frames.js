import frame1 from './icons/Frame 1.png';
import frame2 from './icons/Frame 2.png';
import frame3 from './icons/Frame 3.png';
import frame4 from './icons/Frame 4.png';


function Frames() {
  return (
    <>
    <div className='frames'>
        <img src={frame1}/>
        <img src={frame2}/>
        <img src={frame3}/>
        <img src={frame4}/>
    </div>
    </>
  )
}

export default Frames;