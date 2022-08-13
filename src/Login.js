
import {Link} from 'react-router-dom';
import log from './Images/login.png';

function Login() {



  return (
   <>
   <div className="login">

    <div className="login-content">
    <h2><span>Digi</span>ency</h2>
        <h1>Login to your Account</h1>
        <form>
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password'/>
        <button>Login</button>
        </form>

        <h1>New here?</h1>
         <p> <Link to='/Signup'>Sign up</Link></p>
     </div>

     <div >
        <img src={log} />
     </div>

     </div>
    </>
  )
}

export default Login;