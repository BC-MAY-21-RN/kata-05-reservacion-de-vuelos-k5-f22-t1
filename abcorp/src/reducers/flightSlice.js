import {createSlice} from '@reduxjs/toolkit';

export const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    uid: '',
    name: '',
    flight: [],
  },
  reducers: {
    getFlights: (state, action) => {
      
    },
  },
});

export const {} = flightSlice.actions;

export default flightSlice.reducer;
