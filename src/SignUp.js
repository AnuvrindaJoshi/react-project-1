import { Link } from "react-router-dom";
function SignUp(){
    return(
        <>
        <h4><span>Digi</span>ency</h4>
        <input placeholder='name'/>
        <input placeholder='mail'/>
        <p>Already have an account?<Link to='/login'>Login</Link></p>
        </>
    )
}

export default SignUp;