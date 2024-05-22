import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  writingPackage: undefined,
  detailedResearch: undefined,
  publishPackage: undefined,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setStateWritingPackage: (state, action) => {
      state.writingPackage = action.payload.writingPackage;
      state.detailedResearch = action.payload.detailedResearch;
    },
    setStatePublishPackage: (state, action) => {
      state.publishPackage = action.payload.publishPackage;
      // state.detailedResearch = action.payload.detailedResearch;
    },
  },
});

export const { setStateWritingPackage, setStatePublishPackage } =
  orderSlice.actions;
export default orderSlice.reducer;
