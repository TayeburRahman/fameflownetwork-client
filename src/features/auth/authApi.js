import { apiSlice } from "../apiSlice";
import {
    setAllUsers,
    setUserFriendPost,
    setUserInfo,
    setUserPost,
    userLoggedIn
} from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            })
          );

          dispatch(
            userLoggedIn({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            })
          );

          //   dispatch(
          //     addMessage({
          //       message: "Registration successful",
          //       type: "success",
          //     })
          //   );
          
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    registration: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/signup",
        method: "POST",
        body: data,
      }),
    }), 
    getUserInfo: builder.query({
      query: (id) => ({
        url: `/api/v1/user/find/${id}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data)
          dispatch(setUserInfo(result.data));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }), 
    getAllUser: builder.query({
      query: (id) => ({
        url: `/api/v1/user/get_all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data)
          dispatch(setAllUsers(result.data));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }), 
    addNewFriend: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user/add_friend`,
        method: "PUT", 
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled; 
          dispatch(setUserFriendPost(result.data.friendPost));
          dispatch(setUserInfo(result.data.user));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }), 
    unFollowFriend: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user/un_friend`,
        method: "PUT", 
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;  
          dispatch(setUserFriendPost(result.data.friendPost));
          dispatch(setUserInfo(result.data.user));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),   
    removeFollow: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user/flow_remove`,
        method: "PUT", 
        body: data,
      }),
       
    }),   
    getUserPost: builder.query({
      query: (id) => ({
        url: `/api/v1/feed/get_user_post/${id}`,
        method: "GET", 
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserPost(result.data));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getUserFriendPost: builder.query({
      query: (id) => ({
        url: `/api/v1/feed/get_friend_post/${id}`,
        method: "GET", 
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserFriendPost(result.data));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }), 
    forgetEmail: builder.mutation({
      query: (email) => ({
        url: `/api/v1/user/forget/${email}`,
        method: "POST", 
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegistrationMutation,
  useAddNewFriendMutation, 
  useUnFollowFriendMutation, 
  useRemoveFollowMutation,
  useGetUserPostQuery, 
  useGetUserInfoQuery, 
  useGetAllUserQuery,
  useGetUserFriendPostQuery,   
  useForgetEmailMutation
   
} = authApi;