

import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'

import Courses from './pages/Allcourses'
import Dashboard from './pages/Dashboard'
import CourseDetailsScreen from './pages/Coursedetail'
function App() {
  return (
    <div> 
<Router> 
<Routes> 

<Route path="/" element={<Courses/>} >  

</Route>
<Route path="/course/:courseId" element={<CourseDetailsScreen/>} >  

</Route>
<Route path="/dashboard" element={<Dashboard/>} > 
</Route>
</Routes></Router>
    </div>
  )
}

export default App