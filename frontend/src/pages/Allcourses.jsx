import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../feature/coursesplice';

function Courses() { 
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);  
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]); 

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex flex-wrap">
          {courses.map(course => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <Card course={course} />
            </div>
          ))} 
          
        </div>
      </div>
    </>
  );
}

export default Courses;
