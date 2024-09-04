import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    stauts : false,
    userData : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        login: (state , action)=>{
            state.stauts = true;
            state.userData = action.payload.userData;
        },

        logout: (state) =>{
            state.stauts = false;
            state. userData = null;
        }
    }
})

export const { login , logout } = authSlice.actions;
export default authSlice.reducer;