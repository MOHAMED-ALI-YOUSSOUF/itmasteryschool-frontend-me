import {createSlice} from "@reduxjs/toolkit"

const initialstate = {
    user: null,
    isUserLogin: false,


}

export const authSlice = createSlice({
    name:'auth',
    initialState :initialstate ,
    reducers:{
        login:(state,action)=>{
            state.user= action.payload;
            state.isUserLogin=true;

        },
        logout :(state) =>{
            state.user= null;
            state.isUserLogin=false;
        }
    }
})
export const {login , logout} = authSlice.action;
export default authSlice.reducer;