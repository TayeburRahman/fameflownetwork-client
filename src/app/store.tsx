import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice';
import authSliceReducer from '../features/auth/authSlice';

// Import any other reducers if needed
// import eventSliceReducer from '../features/event/eventSlice';

// Create the store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    // Add other reducers here
    // event: eventSliceReducer,
  },
  // Enable Redux DevTools extension in development mode
  devTools: process.env.NODE_ENV !== 'production',
  // Add API middleware
  middleware: (getDefaultMiddlewares: any) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
