import {configureStore, createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({
    name:"user",
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        },
    },

});
const sellerSlice=createSlice({
    name:"seller",
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        },
    },
});

export const userAction = userSlice.actions;
export const sellerAction = sellerSlice.actions;
export const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        seller:sellerSlice.reducer
    }
});