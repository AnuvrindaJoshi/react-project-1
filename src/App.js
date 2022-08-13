import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './components/navbar/Navbar';


function App() {
  const[blog, setBlog]=useState(Blog);
  
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
        <Sectionone/>
        <Sectiontwo/>
        <Sectionthree/>
        <SectionFour/>
        <SectionFive five={blog}/>
        <SectionSix/>
        <Footer/> 
        </>
      }
    />

      <Route path='/login' element={<Login/>} />
      <Route path='/Signup' element={<SignUp/>}/>
   </Routes>
      </Router>
  );
}

export default App;
