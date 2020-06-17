import React from "react";
import "./Login.css";

const Login = () => {

return <div>
    <form className="form">
    <label htmlFor="Enter your Email">Email</label><br></br>
    <input name="Enter your Email" type="text" placeholder="Enter your email" /><br></br>
    <button type="submit">
            Request for Login
    </button>
    </form>
    </div>  

}

export default Login;