import { createSlice } from '@reduxjs/toolkit';

const dashslice = createSlice({
  name: 'students',
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push({ ...action.payload, completed: false });
    },
    completeCourse: (state, action) => {
      const index = state.enrolledCourses.findIndex(course => course.id === action.payload);
      if (index !== -1) {
        state.enrolledCourses[index].completed = true;
      }
    },
  },
});

export const { enrollCourse, completeCourse } = dashslice.actions;
export default dashslice.reducer;
