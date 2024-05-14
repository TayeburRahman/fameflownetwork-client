import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  user: undefined,
  id: undefined, 
  allusers: undefined,
  user_data: undefined,
  user_post: undefined,
  friend_post: undefined, 
  friendList: undefined,  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.id = action.payload.id; 
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
      state.id = undefined; 
    },
    setUserInfo: (state, action) => { 
      state.user_data = action.payload; 
    },
    setAllUsers: (state, action) => {
      state.allusers = action.payload;
    },
    setUserPost: (state, action) => {
      state.user_post = action.payload; 
    },
    setUserFriendPost: (state, action) => {
      state.friend_post = action.payload;
    },  
  },
});

export const {
  userLoggedIn,
  userLoggedOut,    
  setUserInfo,
  setAllUsers,
  setUserPost,
  setUserFriendPost, 
} = authSlice.actions;
export default authSlice.reducer;