import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../reducers/authSlice';
import flightSlice from '../reducers/flightSlice';
import uiSlice from '../reducers/uiSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    flight: flightSlice,
    ui: uiSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
