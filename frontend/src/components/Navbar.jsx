
import { getAuth } from "firebase/auth"  
import { useNavigate } from "react-router";
function Navbar() {
  const navigate=useNavigate();
  const auth = getAuth();
  const logout=()=>{
    auth.signOut();
      }
  return (
    <div>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid" >
      <button style={{border:"none"}} className="navbar-brand" onClick={()=>{ navigate("/");
  }} > All Courses </button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" type="submit">Search</button>

        <button type="button" className="btn btn-danger mx-2" onClick={logout}>
        Logout
      </button>
      {auth.currentUser ?(
        <img
          src={auth.currentUser.photoURL}
          alt=""
          style={{
            height: "50px",
            width: "50px", 
            padding: "2px", 
            borderRadius: "50%",
            transition: "transform 0.3s",}}
        />
      ): <button type="button" className="btn btn-primary" onClick={()=>{ 
navigate("/login")
      }}

   >
      signIn
       </button> 
      }
      </form>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
