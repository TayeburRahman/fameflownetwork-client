import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: undefined,
  user: undefined,
  id: undefined,
};

const authSlice = createSlice({
  name: 'auth',
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
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.id = action.payload.id;
    },
  },
});

export const { userLoggedIn, userLoggedOut, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
