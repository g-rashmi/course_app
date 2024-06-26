 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import axios from 'axios'; 
 export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get('http://localhost:4000/courses');
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