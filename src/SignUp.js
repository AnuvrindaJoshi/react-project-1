import { Link } from "react-router-dom";
import sign from './Images/signup.png';

function SignUp(){
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
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        <button>Register</button>
        </form>
        </div>

        </div>
        </>
    )
}

export default SignUp;