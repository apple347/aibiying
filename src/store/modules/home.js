import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecmmendData, getHomeLongforData, getHomePlusData } from "@/services";
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

    getHomeHotRecmmendData().then(res => {
        dispatch(changeHotRecommendInfoAction(res))
    });

    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    });
    
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
    });

});

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotrecommend: {},
        longforInfo: {},
        plusInfo: {},
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
        },
        changeHotRecommendInfoAction(state, { payload }) {
            state.hotrecommend = payload;
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload;
        },

        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload;
        },


    },

})

export const {
    changeGoodPriceInofAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;