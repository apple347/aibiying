import React, { memo,useState } from 'react'
import { FilterWrapper } from './style'


import filterData from '@/assets/data/filter_data.json';
import classNames from 'classnames';
const EntireFilter = memo(() => {
  const [selectItem,setSelectItem]=useState([]);
  function itemClickHandle(item){
    let newItems=[...selectItem];
    if(newItems.includes(item)){
      const index=newItems.indexOf(item);
       newItems.splice(index,1);
      }
    else{
      newItems.push(item);
    }
    setSelectItem(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
      {filterData.map((item,index)=>{
        return <div 
        className={classNames('item',{active:selectItem.includes(item)})}
        key={item}
        onClick={e=>itemClickHandle(item)}
        >{item}</div>
       })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter