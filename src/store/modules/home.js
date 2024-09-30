import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//拿到网络请求的数据
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInofAction(res))
    });
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
});

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScorInfo: {}
    },
    reducers: {
        changeGoodPriceInofAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload;
        }

    },
    
})

export const {
    changeGoodPriceInofAction,
    changeHighScoreInfoAction
} = homeSlice.actions;
export default homeSlice.reducer;