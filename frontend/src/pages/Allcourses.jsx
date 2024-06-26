
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../feature/coursesplice';
function Courses() { 
const dispatch=useDispatch();
const courses=useSelector(state=>state.courses.courses) ;  
console.log(courses);
useEffect(() => {
  dispatch(fetchCourses());
}, [dispatch]); 
  return (
    <>
      <Navbar />
      <div className="container ">
        {courses.map(course => (
         <div  key={course.id}> <Card key={course.id} course={course} /></div>
        ))}
        </div>
    </>
  );
}

export default Courses;
