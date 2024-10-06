import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RoomItem from '@/components/room-item';
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from '@/store/modules/detail';


const EntireRooms = memo(() => {
  const {roomList,totalCount,isLoading}=useSelector(state=>state.entire,shallowEqual);


  const navigate=useNavigate();
  const dispatch=useDispatch();
  //事件处理
  const itemClickHandle=useCallback((item)=>{
    dispatch(changeDetailInfoAction(item));
    navigate('/detail');
  },[navigate,dispatch])
  return (
   <RoomsWrapper>
    <h2 className='title'>共{totalCount}处住所</h2>
    <div className="list">
    {roomList.map(item=>{
      return <RoomItem 
      key={item._id} 
      itemData={item} 
      itemwidth='20%'
      itemClick={itemClickHandle}
      ></RoomItem>
    })}
    </div>

    {/* 这是蒙版 */}
    {isLoading&&(<div className="cover"></div>)}
   </RoomsWrapper>
  )
})

export default EntireRooms