import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  writingPackage: undefined,
  detailedResearch: undefined,
  publishPackage: undefined,
  account: undefined,
  brand: {
    brand_name: '',
    brand_country: '',
    website_link: '',
    representative_name: '',
    representative_email: '',
    agree: false,
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setStateAccount: (state, action) => {
      state.account = action.payload.account;
      // state.detailedResearch = action.payload.detailedResearch;
    },
    setStateWritingPackage: (state, action) => {
      state.writingPackage = action.payload.writingPackage;
      state.detailedResearch = action.payload.detailedResearch;
    },
    setStatePublishPackage: (state, action) => {
      state.publishPackage = action.payload.publishPackage;
      // state.detailedResearch = action.payload.detailedResearch;
    },
    setStateBrandDetails: (state, action) => {
      state.brand = action.payload.brands;
      // state.detailedResearch = action.payload.detailedResearch;
    },
  },
});

export const {
  setStateWritingPackage,
  setStatePublishPackage,
  setStateAccount,
  setStateBrandDetails,
} = orderSlice.actions;
export default orderSlice.reducer;
