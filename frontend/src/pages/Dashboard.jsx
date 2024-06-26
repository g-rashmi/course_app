import { useSelector, useDispatch } from 'react-redux';
import { completeCourse } from '../feature/dashsplice';
import Card from '../components/Card';

const Dashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  const handleCompleteCourse = (courseId) => {
    dispatch(completeCourse(courseId));
  };

  return (
    <div>
      <h1>My Courses</h1>
      <div className="container">
        <div className="row">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <Card course={course} />
              <button
                className="btn btn-secondary mt-2 "
                onClick={() => handleCompleteCourse(course._Id)}
              >
                { course.completed===true?"completed": "Marks as completed"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
