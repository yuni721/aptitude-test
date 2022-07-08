import { configureStore } from '@reduxjs/toolkit';
import benchReducer from '../reducers/benchSlice';

export const store = configureStore({
  reducer: benchReducer,
  
});

