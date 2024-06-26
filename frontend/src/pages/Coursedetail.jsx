import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../feature/dashsplice';
const CourseDetailsScreen = () => {
  const dispatch=useDispatch(); 
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [syllabusExpanded, setSyllabusExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/courses/${courseId}`);
        if (response.data) {
          setCourse(response.data);
        } else {
          setError('No such course found.');
        }
      } catch (error) {
        setError('Error fetching course details.');
        console.error('Error fetching course details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const toggleSyllabus = () => {
    setSyllabusExpanded(!syllabusExpanded);
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>; // Placeholder for loading state
  }

  if (error) {
    return <p className="text-center mt-4">{error}</p>; // Display error message if fetch fails
  }

  return ( 

    <>
    <Navbar/>
    <div className="container mt-4">
    
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{course.name}</h2>
        <h6 className="card-subtitle mb-2 text-muted">Instructor: {course.instructor}</h6>
        <p className="card-text">{course.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Enrollment Status:</strong> {course.status}</li>
          <li className="list-group-item"><strong>Duration:</strong> {course.duration}</li>
          <li className="list-group-item"><strong>Schedule:</strong> {course.schedule}</li>
          <li className="list-group-item"><strong>Location:</strong> {course.location}</li>
          <li className="list-group-item"><strong>Pre-requisites:</strong> {course.prerequisites}</li>
        </ul>
        <div className="mt-3">
          <h3 className="cursor-pointer" onClick={toggleSyllabus}>Syllabus {syllabusExpanded ? '-' : '+'} </h3>
          {syllabusExpanded &&( 
            <div className="card mt-3">
              <div className="card-body"> {course.syllabus.map((item)=>{
                  return( 
                    
                    <div className="card mb-3" key={item.week}>
        <div className="card-header">
          Week {item.week}
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.topic}</h5>
          <p className="card-text">{item.content}</p>
        </div>
      </div>
                )} )} 
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-center"> <button type="button" className="btn btn-primary my-3 text-center" onClick={()=>{ 
   dispatch(enrollCourse({course}))
         }}> ENROLL NOW</button> 
           
           </div>
    </div>
   
    </div>
    </>
  );
}

export default CourseDetailsScreen;
