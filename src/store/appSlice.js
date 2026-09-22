import { createSlice } from '@reduxjs/toolkit';
import providerData from '../data/provider.json';

const initialState = {
  contactInfo: providerData.contactInfo,
  services: providerData.services
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Add any UI state reducers if needed later
  }
});

export const selectContactInfo = (state) => state.app.contactInfo;
export const selectServices = (state) => state.app.services;

export default appSlice.reducer;
