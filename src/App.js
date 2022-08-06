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
import Section from './data/Section';
import Blog from './data/Blog';


function App() {
  const[section,setSection]=useState(Section);
  const[blog, setBlog]=useState(Blog);
  
  return (
   <>
   <Navigationbar/>
   <Sectionone/>
   <Sectiontwo child={section}/>
   <Sectionthree/>
   <SectionFour/>
   <SectionFive five={blog}/>
   <SectionSix/>
   <Footer/>
   </>
  );
}

export default App;
