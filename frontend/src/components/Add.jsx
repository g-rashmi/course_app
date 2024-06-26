import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Add() {  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const courses = [
      {
        id: "1",
        name: "Introduction to React Native",
        instructor: "John Doe",
        description: "Learn the basics of React Native development and build your first mobile app.",
        enrollmentStatus: "Open",
        thumbnail: "your.image.here",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
          "Basic JavaScript knowledge",
          "Familiarity with React"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to React Native",
            content: "Overview of React Native, setting up your development environment."
          },
          {
            week: 2,
            topic: "Building Your First App",
            content: "Creating a simple mobile app using React Native components."
          }
        ],
        students: [
          {
            id: 101,
            name: "Alice Johnson",
            email: "alice@example.com"
          },
          {
            id: 102,
            name: "Bob Smith",
            email: "bob@example.com"
          }
        ]
      },
      {
        id: "2",
        name: "Advanced React Concepts",
        instructor: "Jane Smith",
        description: "Explore advanced topics in React such as Redux, Hooks, and performance optimization.",
        enrollmentStatus: "Closed",
        thumbnail: "your.image.here",
        duration: "6 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
          "Solid understanding of React fundamentals",
          "Experience with JavaScript ES6+"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Redux Fundamentals",
            content: "Introduction to Redux, managing state with reducers and actions."
          },
          {
            week: 2,
            topic: "Advanced Hooks",
            content: "Exploring custom hooks and their applications."
          }
        ],
        students: [
          {
            id: 103,
            name: "Charlie Brown",
            email: "charlie@example.com"
          }
        ]
      },
      {
        id: "3",
        name: "Full-Stack Web Development",
        instructor: "Michael Scott",
        description: "Master the skills needed to build modern web applications from scratch.",
        enrollmentStatus: "Open",
        thumbnail: "your.image.here",
        duration: "12 weeks",
        schedule: "Weekdays, 9:00 AM - 12:00 PM",
        location: "On-site",
        prerequisites: [
          "Basic understanding of web technologies"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Web Development",
            content: "Overview of HTML, CSS, and JavaScript."
          },
          {
            week: 2,
            topic: "Frontend Development",
            content: "Deep dive into frontend frameworks and tools."
          }
        ],
        students: [
          {
            id: 104,
            name: "Dwight Schrute",
            email: "dwight@example.com"
          }
        ]
      },
      {
        id: "4",
        name: "Machine Learning Basics",
        instructor: "Sarah Connor",
        description: "An introductory course on machine learning concepts and techniques.",
        enrollmentStatus: "Open",
        thumbnail: "your.image.here",
        duration: "10 weeks",
        schedule: "Weekends, 10:00 AM - 1:00 PM",
        location: "Online",
        prerequisites: [
          "Basic understanding of statistics",
          "Programming experience"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Machine Learning",
            content: "Overview of machine learning concepts and applications."
          },
          {
            week: 2,
            topic: "Supervised Learning",
            content: "Understanding regression and classification techniques."
          }
        ],
        students: [
          {
            id: 105,
            name: "John Connor",
            email: "john@example.com"
          }
        ]
      },
      {
        id: "5",
        name: "Data Science with Python",
        instructor: "Alan Turing",
        description: "Learn data science techniques and tools using Python.",
        enrollmentStatus: "Closed",
        thumbnail: "your.image.here",
        duration: "8 weeks",
        schedule: "Fridays, 5:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
          "Basic Python programming knowledge"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Data Science",
            content: "Overview of data science workflow and tools."
          },
          {
            week: 2,
            topic: "Data Wrangling",
            content: "Techniques for data cleaning and preprocessing."
          }
        ],
        students: [
          {
            id: 106,
            name: "Ada Lovelace",
            email: "ada@example.com"
          }
        ]
      },
      {
        id: "6",
        name: "Cybersecurity Essentials",
        instructor: "Grace Hopper",
        description: "Learn the fundamental concepts and practices of cybersecurity.",
        enrollmentStatus: "Open",
        thumbnail: "your.image.here",
        duration: "10 weeks",
        schedule: "Wednesdays, 6:00 PM - 9:00 PM",
        location: "On-site",
        prerequisites: [
          "Basic understanding of computer networks"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Cybersecurity",
            content: "Overview of cybersecurity threats and defenses."
          },
          {
            week: 2,
            topic: "Network Security",
            content: "Understanding network security protocols and practices."
          }
        ],
        students: [
          {
            id: 107,
            name: "Alan Turing",
            email: "alan@example.com"
          }
        ]
      }
    ];

    try {
      const coursesCollection = collection(db, 'courses');
      for (const course of courses) {
        await addDoc(coursesCollection, course);
      }
     
    } catch (e) {
      console.error('Error adding documents: ', e);
      
    }
  };

  return (
    <div>
     
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Add;
