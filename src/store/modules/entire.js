import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireDataAction = createAsyncThunk('fetchEntire', async (page = 0, { dispatch }) => {
    //发送网络请求之前，增加蒙版   
    dispatch(changIsLoading(true));
    const res = await getEntireRoomList(page * 20);
    //发送完毕，删除蒙版
    dispatch(changIsLoading(false))

    dispatch(changeCurrentPage(page));
    dispatch(changeRoomList(res.list));
    dispatch(changTotalCount(res.totalCount))
})





const entireSlice = createSlice({
    name: 'entire',
    initialState: {
        currentPage: 0,//当前页码
        roomList: [],//房间列表
        totalCount: 0,//总数据的条数，用来计算页码总数
        isLoading: false,//用来标记是否正在发送数据，是的，就给显示的数据加上蒙版。
    },
    reducers: {
        changeCurrentPage(state, { payload }) {
            state.currentPage = payload
        },
        changeRoomList(state, { payload }) {
            state.roomList = payload
        },
        changTotalCount(state, { payload }) {
            state.totalCount = payload
        },
        changIsLoading(state, { payload }) {
            state.isLoading = payload
        },

    }
})

export const {
    changeCurrentPage,
    changeRoomList,
    changTotalCount,
    changIsLoading,
} = entireSlice.actions;

export default entireSlice.reducer;
