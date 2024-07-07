import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {
const {signInUser,signInWithGoogle}=useContext(AuthContext)
const navigate=useNavigate()
// console.log(signInUser)

const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value ;

    const password=e.target.password.value ;
    console.log(email,password)

 signInUser(email,password)
 .then(result=>{
  // console.log(result.user)
  e.target.reset()
  navigate("/")
 })
 .catch(error=>{
  console.log(error.message)
 })

}

const handleWithGoogleLogIN=()=>{
  signInWithGoogle()
  navigate("/")
  .then(result=>{
    console.log(result.user)
    
  })
  
  .catch(error=>{
    console.error(error)
  })
  

}

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>new user? please <Link to="/register"><button className="btn btn-link">register</button></Link></p>
            <p><button onClick={handleWithGoogleLogIN} className="btn btn-ghost">Google</button></p>
          </div>
        </div>
        
      </div>
    );
};

export default Login;