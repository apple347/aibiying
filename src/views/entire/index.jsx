import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import {useDispatch } from 'react-redux'
import { fetchEntireDataAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Entire = memo(() => {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchEntireDataAction());
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:false}))
  },[dispatch])
  
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire