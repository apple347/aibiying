import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireDataAction=createAsyncThunk('fetchEntire',({offset,currentPage},{dispatch})=>{
    console.log(offset,currentPage)
        getEntireRoomList(offset,currentPage).then(res=>{
        dispatch(changeRoomList(res.list));
        dispatch(changTotalCount(res.totalCount))
    })
})

const entireSlice = createSlice({
    name: 'entire',
    initialState: {
        currentPage: 0,//当前页码
        roomList: [],//房间列表
        totalCount: 0,//总数据的条数，用来计算页码总数
    },
    reducers: {
        changeCurrentPage(state, { payload }) {
            state.currentPage = payload
        },
        changeRoomList(state, { payload }) {
            state.roomList = payload
        },
        changTotalCount(state,{payload}){
            state.totalCount=payload
        }
    }
})

export const {
    changeCurrentPage,
    changeRoomList,
    changTotalCount
} = entireSlice.actions;

export default entireSlice.reducer;
