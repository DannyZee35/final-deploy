

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import courseReducer from "../features/courses/courseSlice"

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const composeEnhancers = composeWithDevTools({
  serialize: {
    options: {
      undefined: true,
      function: true,
      symbol: true,
      date: true,
      regexp: true,
    },
  },
});
export const store =configureStore({

    reducer:{
        auth:authReducer,
        course:courseReducer,
        enhancers: [composeWithDevTools()],
        

    }

})