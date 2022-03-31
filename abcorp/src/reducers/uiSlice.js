import {createSlice} from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    msgErrorLogin:false,
    msgErrorRegister:false,
    loading:false,
  },
  reducers: {
   setMsgErrorLogin:state => {
       state.msgErrorLogin = true;
   },
   setMsgErrorRegister:state => {
    state.msgErrorRegister = true;
   },
   removeMsgError:state => {
       state.msgErrorLogin = false;
       state.msgErrorRegister = false;
   },
   setLoading:state => {
       state.loading = true;
   },
   removeLoading:state => {
    state.loading = false;
   },
  },
 
});

export const {setMsgErrorLogin,setMsgErrorRegister,removeMsgError,setLoading,removeLoading} = uiSlice.actions;

export default uiSlice.reducer;