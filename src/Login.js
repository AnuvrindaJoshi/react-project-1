import {Link} from 'react-router-dom';
function Login() {
  return (
   
    <div>
        <h4><span>Digi</span>ency</h4>
        <input placeholder='name'></input>
        <input placeholder='mail'></input>
        <p><Link to="/">Back to HomePage</Link></p>
        <p>Dont have an account?<Link to='/Signup'>Sign up</Link></p>
    </div>
  )
}

export default Login;