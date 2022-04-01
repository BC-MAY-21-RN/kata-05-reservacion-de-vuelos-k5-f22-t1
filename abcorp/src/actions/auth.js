import {createAsyncThunk} from '@reduxjs/toolkit';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
  removeLoading,
  removeMsgError,
  setLoading,
  setMsgErrorLogin,
  setMsgErrorRegister,
} from '../reducers/uiSlice';

GoogleSignin.configure({
  webClientId:
    '256967765907-9s5tmvtoodhiqop6p50p91i6pooqusap.apps.googleusercontent.com',
});

export const loginWithGoogle = createAsyncThunk('auth/google', async () => {
  try {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await auth().signOut();
  await GoogleSignin.signOut();
});

export const registerWithEmailAndPassword = createAsyncThunk(
  'auth/register',
  async ({email, password, firstName: name}, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await user.updateProfile({displayName: name});
      thunkAPI.dispatch(removeMsgError());
      thunkAPI.dispatch(removeLoading());
    } catch (error) {
      thunkAPI.dispatch(setMsgErrorRegister());
      thunkAPI.dispatch(removeLoading());
    }
  },
);

export const loginWithEmailAndPassword = createAsyncThunk(
  'auth/login',
  async ({email, password}, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading());
      const {user} = await auth().signInWithEmailAndPassword(email, password);
      thunkAPI.dispatch(removeMsgError());
      thunkAPI.dispatch(removeLoading());
      return user;
    } catch (error) {
      thunkAPI.dispatch(setMsgErrorLogin());
      thunkAPI.dispatch(removeLoading());
    }
  },
);
