
import { useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react"; 
import { searchCourse } from "../feature/coursesplice"; 
import { useDispatch} from "react-redux";



 function Navbar() { 

  const navigate=useNavigate();
const dispatch=useDispatch();
  const [search,setSearch]=useState(""); 
  useEffect(()=>{dispatch(searchCourse(search)) },[search])
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    dispatch(searchCourse(search)); // Dispatch searchCourse action with search term
  };

    
    
  return (
    <div>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid" >
      <button style={{border:"none"}} className="navbar-brand" onClick={(e)=>{ 
        e.preventDefault()
        setSearch(""); 
        navigate("/");
  }} > All Courses </button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" value ={search} aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className="btn btn-outline-success mx-2" onClick={handleSearch} >Search</button>
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
