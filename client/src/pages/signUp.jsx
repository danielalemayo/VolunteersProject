import React from "react";


function Signup() { 
  
  return (
    <div className="Page">
      <form action="api/page/signup">
        <h1>SignUp</h1>
        <div>
          <div>
            <input onChange="" name="firstName" type="text" placeholder="שם פרטי" />
            <label for="firstName" name="firstName">:שם פרטי</label>
          </div>
          <div>
            <input type="text" placeholder="שם משפחה" />
            <label> :שם משפחה</label>
          </div>
          <div>
            <input type="text" placeholder="מייל" />
            <label> :מייל</label>
          </div>
          <div>
            <input type="password" placeholder="סיסמא" />
            <label> :סיסמא</label>
          </div>
          <div>
            <input type="password" placeholder="אישור סיסמא" />
            <label>:אישור סיסמא</label>
          </div>
        </div>
        <button type="submit" >Add New</button>
      </form>
    </div>
  )
}
export default Signup;
