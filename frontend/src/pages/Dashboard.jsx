import { useSelector, useDispatch } from 'react-redux';
import { completeCourse } from '../feature/dashsplice';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  const handleCompleteCourse = (courseId) => {
    dispatch(completeCourse(courseId));
    console.log(courseId)
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1 className="text-center my-4">My Courses</h1>
      <div className="container">
        <div className="row d-flex flex-wrap">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-5 mt-2">      {console.log(course)}     <Card course={course} />
              <button
                className="btn btn-secondary mt-2 w-100"
                onClick={() => {handleCompleteCourse(course._Id)}}
              >
                {course.completed ? "Completed" : "Mark as Completed"}
              </button>
              <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style="width: 25%">25%</div>
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
