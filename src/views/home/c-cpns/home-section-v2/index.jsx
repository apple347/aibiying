import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
    const {infoData}=props;
 //数据的转换
 const initialState=Object.keys(infoData.dest_list)[0];
 const [name,setName]=useState(initialState);
 const tabNames=infoData?.dest_address?.map(item=>{
   return item.name;
 })


 const tabClickHandle=useCallback(function (index,item){
   setName(item)//切换最新的城市名
 },[]);

  return (
   <SectionV2Wrapper>
    <div className="discount">
          <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={infoData?.dest_list?.[name]} itemwidth='33.33%'/>
          <SectionFooter name={name} />
        </div>
   </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2