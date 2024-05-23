import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import orderSliceReducer from '../features/order/orderSlice';

export const store = configureStore({
  // included fetcher reducer
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    order: orderSliceReducer,
  },
  // redux devTools false for production
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares: any) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export interface RootState {
  auth: {
    token: string;
  };
  /* Type of your auth slice state */
  // Add other slices if any
}
