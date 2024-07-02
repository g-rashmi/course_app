import { createSlice } from '@reduxjs/toolkit';

const dashslice = createSlice({
  name: 'students',
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      const course = action.payload;
      const existingCourse = state.enrolledCourses.find(enrolledCourse => enrolledCourse._Id === course._Id);
      if (!existingCourse) {
        course.enroll = true;
        state.enrolledCourses.push({ ...course, completed: false });
      }
    },
    completeCourse: (state, action) => {
      const index = state.enrolledCourses.findIndex(course => course._Id === action.payload);
      if (index !== -1) {
        state.enrolledCourses[index].completed = true;
      }
    },
  },
});

export const { enrollCourse, completeCourse } = dashslice.actions;
export default dashslice.reducer;
