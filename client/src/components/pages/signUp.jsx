import React from "react";
import './signupcs.css'

// function SendData(){
//   const [ users, setUsers ] = useState([]);

//   useEffect(() => {
//     function getUsers() {
//       fetch('http://localhost:3001/')
//         .then(response => response.json())
//         .then(users => {
//           setUsers(users);
//         })
//     }
//     getUsers()
//   }, []);
//   const renderUsers = users.map(user => (
//     <li key={user.id}>
//       <div>Username: {user.name}</div>
//       <div>ID: {user.id}</div>
//     </li>)
//   );
// }
// export default SendData;


function Signup() { 
  return (
    <div className="Page">
      <form action="login">
        <h1>SignUp</h1>
        <div>
          <div>
            <input type="text" placeholder="שם פרטי" />
            <label >:שם פרטי</label>
          </div>
          <div>
            <input type="text" placeholder="שם משפחה" />
            <label>:שם משפחה</label>
          </div>
          <div>
            <input type="text" placeholder="מייל" />
            <label>:מייל</label>
          </div>
          <div>
            <input type="password" placeholder="סיסמא" />
            <label>:סיסמא</label>
          </div>
          <div>
            <input type="password" placeholder="אישור סיסמא" />
            <label>:אישור סיסמא</label>
          </div>
        </div>
        <button >Submit</button>
      </form>
    </div>
  )
}
export default Signup;
