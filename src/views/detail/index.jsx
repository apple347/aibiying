import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style';
import DetailInofs from './c-cpns/detail-infos';
import DetailPictures from './c-cpns/detail-pictures';
import { useDispatch } from 'react-redux';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Detail = memo(() => {  

  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed:false,topAlpha:false}))
  },[dispatch])
  return (
   <DetailWrapper>
    <DetailPictures />
    <DetailInofs />
   </DetailWrapper>
  )
})

export default Detail