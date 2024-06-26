import { useNavigate } from "react-router";

function Card({ course }) {
  const navigate = useNavigate();
  return (
    <div className="card h-40 shadow-sm">
      <div className="card-header d-flex align-items-center">
       
        <h5 className="mb-0">{course.name}</h5>
      </div>
      <img
        src={course.thumbnail}
        className="card-img-top"
        alt="Course"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text">{course.description}</p>
        <div className="d-flex justify-content-between">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate(`/course/${course._Id}`)}
          >
            View more 
          </button>
          
        </div>
      </div>
      <div className="card-footer text-muted">
        {course.enrollmentStatus}
      </div>
    </div>
  );
}

export default Card;
