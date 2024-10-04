import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux';
import RoomItem from '@/components/room-item';


const EntireRooms = memo(() => {
  const {roomList,totalCount,isLoading}=useSelector(state=>state.entire,shallowEqual);
  return (
   <RoomsWrapper>
    <h2 className='title'>共{totalCount}处住所</h2>
    <div className="list">
    {roomList.map(item=>{
      return <RoomItem key={item._id} itemData={item} itemwidth='20%'></RoomItem>
    })}
    </div>

    {/* 这是蒙版 */}
    {isLoading&&(<div className="cover"></div>)}
   </RoomsWrapper>
  )
})

export default EntireRooms