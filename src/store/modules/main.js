import { createSlice } from "@reduxjs/toolkit";


const mainSlice=createSlice({
    name:'main',
    initialState:{
        headerConfig:{
            isFixed:false,
            topAlpha:false,//顶部是否透明
        }
    },
    reducers:{
        changeHeaderConfigAction(state,{payload}){
            state.headerConfig=payload;
        }
    }
})

export const {changeHeaderConfigAction}=mainSlice.actions;
export default mainSlice.reducer;