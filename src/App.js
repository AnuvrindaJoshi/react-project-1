import {useState} from 'react';
import './App.css';
import Navigationbar from './Navigationbar';
import Sectionone from './Sectionone';
import Sectiontwo from './Sectiontwo';
import Sectionthree from './Sectionthree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import Footer from './Footer';
import Blog from './data/Blog';


function App() {
  const[blog, setBlog]=useState(Blog);
  
  return (
   <>
   <Navigationbar/>
   <Sectionone/>
   <Sectiontwo/>
   <Sectionthree/>
   <SectionFour/>
   <SectionFive five={blog}/>
   <SectionSix/>
   <Footer/>
   </>
  );
}

export default App;
