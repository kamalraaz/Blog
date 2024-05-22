import { createSlice } from "@reduxjs/toolkit";


const initialState={
  currentUser:null,
  error:null,
  isLoading:false

}

const userSlice=createSlice({
  name:"user",
  initialState,
  reducers:{
    SignInStart:(state)=>{
      state.isLoading=true;
      state.error=null; //clear the error if there is error befour
    },
    SignInSuccess:(state,action)=> {
      state.currentUser = action.payload; //user data is payload
      state.isLoading= false;
      state.error= null;
    },
    SignInFailure: (state,action)=> {
      state.isLoading=false;
      state.error = action.payload;
    }
  }
})

export const  {SignInStart,SignInSuccess,SignInFailure}= userSlice.actions;

export default userSlice.reducer;