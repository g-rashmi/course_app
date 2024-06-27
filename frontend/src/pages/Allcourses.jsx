import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../feature/coursesplice';

function Courses() { 
  const dispatch = useDispatch();
  const loader=useSelector(state=>state.courses.status)
  const courses = useSelector(state => state.courses.filteredCourses); 
  console.log(courses)
    console.log(loader)
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]); 
 
  return ( 
    <>
      <Navbar />
     { loader==='succeeded'?(<div className="container">
        <div className="row d-flex flex-wrap">
          {courses.map(course => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <Card course={course} />
            </div>
          ))} 
          
        </div>
      </div> ):(<div className="text-center " style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"}}> <div className="spinner-border " role="status" >
        <span className="visually-hidden text-center">Loading...</span>
      </div></div>) }
    
    </>
  );
}

export default Courses;
