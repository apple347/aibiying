import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { Pagination } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchEntireDataAction } from '@/store/modules/entire';

const EntirePagination = memo(() => {
  const {currentPage,totalCount}=useSelector(state=>state.entire,shallowEqual);
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20


  //事件处理
  const dispatch=useDispatch();
  function pageChangeHandle(page){
    dispatch(fetchEntireDataAction(page-1));
    window.scroll(0,0);
  }
  return (
    <PaginationWrapper>
     <div className="info">
      <Pagination total={totalCount} pageSize={20} showSizeChanger={false} onChange={pageChangeHandle}/>
        <div className="desc">
        第 {start} - {end} 个房源, 共超过 {totalCount} 个
        </div>
     </div>
    </PaginationWrapper>
  )
})

export default EntirePagination