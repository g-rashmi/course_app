import { configureStore } from '@reduxjs/toolkit'  
import dashsplice from '../feature/dashsplice'
import coursesplice from "../feature/coursesplice"
export const store= configureStore({ 
reducer:{
  courses :coursesplice , 
  students :dashsplice,
}
}) 

export default store;