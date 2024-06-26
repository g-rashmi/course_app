 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import axios from 'axios'; 
 import { backend_url } from '../config';
 export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(`${backend_url}/courses`);
  return response.data;
});  
const courseslice = createSlice({
name:'courses' , 
initialState:{
  courses:[],
  status:null
}
,  reducers: {},
extraReducers: (builder) => {
  builder
    .addCase(fetchCourses.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.status = 'succeeded';
    })
    .addCase(fetchCourses.rejected, (state) => {
      state.status = 'failed';
    });
},



})  

export default courseslice.reducer; 