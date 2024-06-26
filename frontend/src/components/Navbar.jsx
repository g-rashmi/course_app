
import { useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  const navigate=useNavigate();

 
  return (
    <div>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid" >
      <button style={{border:"none"}} className="navbar-brand" onClick={()=>{ navigate("/");
  }} > All Courses </button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" type="submit">Search</button>

       
     <button type="button" className="btn btn-primary" onClick={()=>{ 
navigate("/dashboard")
      }}

   > <FaUserCircle />
      
       </button> 
      
      </form>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
