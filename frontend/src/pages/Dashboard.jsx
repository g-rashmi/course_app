
import { useSelector, useDispatch } from 'react-redux';

import { completeCourse } from '../feature/dashsplice';


const Dashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.students.enrolledCourses);

  const handleCompleteCourse = (courseId) => {
    dispatch(completeCourse(courseId));
  };

  return (
    <div>
      <h1>My Courses</h1>
      {enrolledCourses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <img src={course.thumbnail} alt={course.name} />
          <p>Due Date: {/* Placeholder for due date */}</p>
          <p>Progress: <progress value={course.completed ? 100 : 0} max="100"></progress></p>
          <button onClick={() => handleCompleteCourse(course.id)}>Mark as Completed</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
