import { useSelector, useDispatch } from 'react-redux';
import { completeCourse } from '../feature/dashsplice';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import {useState} from 'react'

const Dashboard = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  const handleCompleteCourse = (courseId) => {
    dispatch(completeCourse(courseId));
    setVal(100); 
    console.log(courseId)
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1 className="text-center my-4">My Courses</h1>
      <div className="container">
        <div className="row d-flex flex-wrap">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-5 mt-2">        <Card course={course} />
            <div className="my-4">
            <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={val} aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar p" style={{ width: `${val}%` }}>{`${val}%`}</div>
            </div>
          </div>
              <button
                className="btn btn-secondary mt-2 w-100"
                onClick={() => {handleCompleteCourse(course._Id)}}
              >
                {course.completed ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
