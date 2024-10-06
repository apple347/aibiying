import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style';
import DetailInofs from './c-cpns/detail-infos';
import DetailPictures from './c-cpns/detail-pictures';

const Detail = memo(() => {  
  useEffect(()=>{
    window.scrollTo(0, 0); // 滚动到顶部
  },[])
  return (
   <DetailWrapper>
    <DetailPictures />
    <DetailInofs />
   </DetailWrapper>
  )
})

export default Detail