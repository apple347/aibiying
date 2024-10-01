import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecmmendData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//拿到网络请求的数据
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInofAction(res))
    });
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    });

    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    });

    getHomeHotRecmmendData().then(res=>{
        dispatch(changeHotRecommendInfoAction(res))
    })
});

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotrecommend:{},
    },
    reducers: {
        changeGoodPriceInofAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload;
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },changeHotRecommendInfoAction(state,{payload}){
            state.hotrecommend=payload;
        }

    },

})

export const {
    changeGoodPriceInofAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommendInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;