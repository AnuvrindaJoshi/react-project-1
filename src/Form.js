import { useState } from "react";


function Form(){

const [text, setText]=useState('');
const [message, setMessage]=useState('');

const textChange=(e)=>{

if(text===''){
    setMessage(null);
}
else if(text!=='' && text.trim().length<=5){
    setMessage('name must be atleast 5 characters long');
}else if(text!=='' && text.trim().length>=15){
    setMessage('name should not have more than 15 characters');
}else{
    setMessage(null);
}

setText(e.target.value)
}


const[num, setNum]=useState('');
const numChange=(e)=>{


if(num===''){
    setMessage(null);
}
else if(num!=='' && num.trim().length>10 || num.trim().length<10){
setMessage('the number you entered is not valid');
}
else{
    setMessage(null);
}

setNum(e.target.value);
}


const[sub,setSub]=useState('');
const subChange=(e)=>{

    if(sub!=='' && sub.trim().length<=10){
        setMessage('subject should be atleast 10 characters long');
    }else if(sub!=='' && sub.trim().length>=20){
        setMessage('subject should not exceed more than 20 characters');
    }else{
        setMessage(null);
    }
    setSub(e.target.value);
}


const[msg,setMsg]=useState('');
const msgChange=(e)=>{

    if(msg!=='' && msg.trim().length<=10){
        setMessage('Your message should atleast have 10 characters');
    }else{
        setMessage(null);
    }
setMsg(e.target.value);

}


const [mail,setMail]=useState('');
const mailChange=(e)=>{

    if(mail!=='' && mail!==/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/){
        setMessage('please enter a valid e-mail');
    }else{
        setMessage(null);
    }
    setMail(e.target.value);
}

    return(
        <>
        <div>
        <h3>Send Your <span>Message To Us</span></h3>
        <form>
            <div>
            <input type='text' placeholder="Name" onChange={textChange} value={text} ></input>
            <input type='text' placeholder="Mobile Number" onChange={numChange} value={num}></input>
            </div>
            <div>
            <input placeholder="Email" type='email' onChange={mailChange} value={mail}></input>
            <input placeholder="Subject" type="text" onChange={subChange} value={sub} ></input>
            </div>
            <input placeholder="Send message" type='text' onChange={msgChange} value={msg}></input>
            <h5><span>{message}</span></h5>
            <button>Send Message</button>
            
        </form>
        </div>
        </>
    )
}

export default Form;