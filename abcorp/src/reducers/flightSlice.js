import {createSlice} from '@reduxjs/toolkit';
import {getFlightsApi} from '../actions/flights';

export const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    flight: [],
  },
  reducers: {
    // getFlights: (state, action) => {
    //   console.log(action);
    // },
  },
  extraReducers: builder => {
    builder.addCase(getFlightsApi.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.flight = action.payload;
    });
  },
});

// export const {getFlights} = flightSlice.actions;

export default flightSlice.reducer;
