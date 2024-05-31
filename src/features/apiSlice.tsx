// apiSlice.tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fameflownetwork-server.vercel.app',

    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = await (getState() as RootState)?.auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
