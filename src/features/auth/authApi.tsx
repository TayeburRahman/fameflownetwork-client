import { apiSlice } from '../apiSlice';
import { setUserInfo, userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/api/v1/user/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            }),
          );

          dispatch(
            userLoggedIn({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            }),
          );

          //   dispatch(
          //     addMessage({
          //       message: "Registration successful",
          //       type: "success",
          //     })
          //   );
        } catch (error) {
          console.log('redux store error', error);
        }
      },
    }),
    registration: builder.mutation({
      query: (data) => ({
        url: '/api/v1/user/signup',
        method: 'POST',
        body: data,
      }),
    }),
    getUserInfo: builder.query({
      query: (id) => ({
        url: `/api/v1/user/details/${id}`,
        method: 'GET',
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserInfo(result.data));
        } catch (error) {
          console.log('redux store error', error);
        }
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegistrationMutation,
  useGetUserInfoQuery,
} = authApi;
