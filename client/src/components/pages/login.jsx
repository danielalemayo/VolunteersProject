import React from "react"
import './signupcs.css'

function Login() {
    
    return (
        <div className="Page">
        <form action="login">
            <h1>Login</h1>
            <div>
            <input type="text" placeholder="מייל" />
            <label>:מייל</label>
          </div>
          <div>
            <input type="password" placeholder="סיסמא" />
            <label>:סיסמא</label>
          </div>
            <button >Submit</button>
        </form>
        </div>
    )
}
export default Login;
