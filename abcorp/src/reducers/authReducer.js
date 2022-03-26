import {createSlice} from '@reduxjs/toolkit';

export const authReduce = createSlice({
  name: 'auth',
  initialState: {
    uid: '',
    name: '',
  },
  reducers: {
    login: (state, action) => {
      state.uid = action.payload.ud;
      state.name = action.payload.displayNae;
    },
  },
});

export const {login} = authReduce.actions;

//export default counterSlice.reducer
