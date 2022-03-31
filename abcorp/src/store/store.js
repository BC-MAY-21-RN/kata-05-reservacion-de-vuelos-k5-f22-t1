import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../reducers/authSlice';
import uiSlice from '../reducers/uiSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
