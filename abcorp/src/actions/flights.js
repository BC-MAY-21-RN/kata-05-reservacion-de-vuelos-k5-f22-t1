import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {removeLoading, setLoading} from '../reducers/uiSlice';

export const getFlightsApi = createAsyncThunk(
  'flights/get',
  async (uid, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());
      const data = await firestore()
        .collection('Flights')
        .where('user', '==', uid)
        .get();
      const flightsData = data._docs.map(flight => flight._data);
      thunkAPI.dispatch(removeLoading());
      return flightsData;
    } catch (error) {
      console.log(error);
    }
  },
);
