import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import courseService from "./courseService"


const initialState = {

  courses: [],
  singleCourse: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}


// creating new course

export const create_Course = createAsyncThunk(
  "courses/create",
  async (courseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseService.create_Course(courseData, token
      );

    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get courses
export const getCourses = createAsyncThunk(
  "courses/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseService.getCourses(token);

    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSingleCourse = createAsyncThunk(
  'courses/getOne',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseService.getSingleCourse(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const updateCourse = createAsyncThunk(
  "courses/update",
  async ({ id, updatedCourseData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseService.updateCourse(id,updatedCourseData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateHodFeedback = createAsyncThunk(
  "courses/updateHodFeedback",
  async ({ id, updatedHodFeedbackData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseService.updateHodFeedback(
        id,
        updatedHodFeedbackData,
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

  export const updateFolderFeedback = createAsyncThunk(
    "courses/updateFolderFeedback",
    async ({ id, updatedFolderFeedbackData }, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await courseService.updateFolderFeedback(
          id,
          updatedFolderFeedbackData,
          token
        );
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const addLogToCourse = createAsyncThunk(
    "courses/addLog",
    async ({ id, logData }, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await courseService.addLogToCourse(id, logData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const getLogsForCourse = createAsyncThunk(
    "courses/getLogs",
    async ({ id, token }, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;

        return await courseService.getLogsForCourse(id, token);
      } catch (error) {
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(create_Course.pending, (state) => {
        state.isLoading = true
      })
      .addCase(create_Course.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.courses.push(action.payload)
      })
      .addCase(create_Course.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.courses = action.payload
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSingleCourse.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleCourse.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.singleCourse = action.payload
      })
      .addCase(getSingleCourse.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // find the index of the updated course in the courses array
        const index = state.courses.findIndex(
          (course) => course._id === action.payload._id
        );
        // update the course object at the corresponding index in the array
        state.courses[index] = action.payload;
        // update the singleCourse object if the updated course is the same as the single course being displayed
        if (state.singleCourse._id === action.payload._id) {
          state.singleCourse = action.payload;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateHodFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateHodFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.courses.findIndex(
          (course) => course._id === action.payload._id
        );
        state.courses[index] = action.payload;
        if (state.singleCourse._id === action.payload._id) {
          state.singleCourse = action.payload;
        }
      })
      .addCase(updateHodFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateFolderFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFolderFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.courses.findIndex(
          (course) => course._id === action.payload._id
        );
        state.courses[index] = action.payload;
        if (state.singleCourse._id === action.payload._id) {
          state.singleCourse = action.payload;
        }
      })
      .addCase(updateFolderFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addLogToCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLogToCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const id = action.payload.id;
        const log = action.payload.log;

        // Find the course index in the courses array
        const courseIndex = state.courses.findIndex(
          (course) => course._id === id
        );

        if (courseIndex !== -1) {
          // Add the log to the course's logs array
          state.courses[courseIndex].logs.push(log);
        }

        // Update the singleCourse object if the updated course is the same as the single course being displayed
        if (state.singleCourse._id === id) {
          state.singleCourse.logs.push(log);
        }
      })
      .addCase(addLogToCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLogsForCourse.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getLogsForCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleCourse = { ...state.singleCourse, logs: action.payload };
      })
      .addCase(getLogsForCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      }) 
  }
})

export const { reset } = courseSlice.actions
export default courseSlice.reducer
