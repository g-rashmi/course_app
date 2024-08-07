import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backend_url } from '../config';

// Fetch courses asynchronously
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(`${backend_url}/courses`);
  return response.data;
});


const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: null,
    filteredCourses: [],
  },
  reducers: {
    searchCourse: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      if (!searchTerm) {
        state.filteredCourses = state.courses;
      } else {
        state.filteredCourses = state.courses.filter(
          course =>
            course.name.toLowerCase().includes(searchTerm) ||
            course.instructor.toLowerCase().includes(searchTerm)
        );
      }
    },
    enrollcourse: (state, action) => {
      const courseId = action.payload;
      const course = state.courses.find(course => course._Id === courseId);
      if (course&&!course.enroll) {
        course.enroll = true;
      }
      
      const filteredCourse = state.filteredCourses.find(course => course._Id === courseId);
      if (filteredCourse && !filteredCourse.enroll) {
        filteredCourse.enroll = true;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.filteredCourses = action.payload; 
        state.status = 'succeeded';
      })
      .addCase(fetchCourses.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { searchCourse, enrollcourse } = courseSlice.actions;
export default courseSlice.reducer;
