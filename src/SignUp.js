import { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import sign from './Images/signup.png';

function SignUp(){

const buttonClick=(e)=>{
    e.preventDefault();
    toast.error('signup FAILED!',{
        position: "bottom-center"
    })
}


    const[username,setUsername]=useState('');
    const[message,setMessage]=useState('');

const checkUsername=(e)=>{
if(username!='' && username.trim().length<=5){
    setMessage('name should have atleast 5 characters');
}else if(username!='' && username.trim().length>=10){
    setMessage('name should not have more than 10 characters');
}else{
    setMessage(null);
}
setUsername(e.target.value);
    }


const[password1,setPassword1]=useState('');
const checkPassword1=(e)=>{
    if(password1!='' && password1.trim().length<=10){
        setMessage('your password should have atleast 10 characters');
    }else if(password1!='' && password1.trim().length>=20){
        setMessage('your password should not have more than 20 characters');
    }else{
        setMessage(null);
    }
    setPassword1(e.target.value);
}


const[password2,setPassword2]=useState('');
const checkPassword2=(e)=>{
    if(password2!='' && password2!=password1){
        setMessage('your password does not match');
    }else{
        setMessage(null);
    }
    setPassword2(e.target.value);
}

    return(
        <>
        <div className="signup">
            

        <div>
         <h2><span>Digi</span>ency</h2>
        <img src={sign} />
        </div>

        <div className="signup-content">
        <h1>Get <br/>
        Started.</h1>
        <p>Already have an account?<Link to='/login'>Login</Link></p>
        <form>
        <input placeholder='Username' type='text' value={username} onChange={checkUsername}/>
        <input placeholder='Email'/>
        <input placeholder='Password' type='password' value={password1} onChange={checkPassword1}/>
        <input placeholder='Confirm your Password' type='password' value={password2} onChange={checkPassword2}/>
        <h5><span>{message}</span></h5>
        <button onClick={buttonClick}>Register</button>
        </form>
        </div>

        </div>
        </>
    )
}

export default SignUp;