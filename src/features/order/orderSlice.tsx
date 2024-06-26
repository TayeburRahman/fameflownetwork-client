import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  writingPackage: undefined,
  detailedResearch: undefined,
  publishPackage: undefined,
  account: undefined,
  nextState: '1st',
  brand: {
    brand_name: '',
    brand_country: '',
    website_link: '',
    representative_name: '',
    representative_email: '',
    agree: false,
  },
  newsStory: {
    docs_link: '',
    details: '',
  },
  price: undefined,
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
    },
    setStateBrandDetails: (state, action) => {
      state.brand = action.payload.brands;
    },
    setStateNewsStory: (state, action) => {
      state.newsStory = action.payload.news;
    },
    setStateNext: (state, action) => {
      state.nextState = action.payload.next;
    },
    setStateTotalPrice: (state, action) => {
      state.price = action.payload.total;
    },
  },
});

export const {
  setStateWritingPackage,
  setStatePublishPackage,
  setStateAccount,
  setStateBrandDetails,
  setStateNewsStory,
  setStateNext,
  setStateTotalPrice,
} = orderSlice.actions;
export default orderSlice.reducer;
