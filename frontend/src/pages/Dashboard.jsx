import { useSelector, useDispatch } from 'react-redux';
import { completeCourse } from '../feature/dashsplice';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import {useState,useEffect} from 'react'

const Dashboard = () => {
  const [progress, setProgress] = useState({});
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  const handleCompleteCourse = (courseId) => {
    dispatch(completeCourse(courseId)); 
    setProgress((prevProgress) => ({
      ...prevProgress,
      [courseId]: 100,
    }));
  };
  useEffect(() => {
    const initialProgress = enrolledCourses.reduce((acc, course) => {
      acc[course._Id] = course.completed ? 100 : 0;
      return acc;
    }, {});
    setProgress(initialProgress);
  }, [enrolledCourses]);
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
            <div className="progress-bar" style={{ width: `${progress[course._Id] || 0}%` }}>
            {`${progress[course._Id] || 0}%`} 
          </div>
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
