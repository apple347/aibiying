import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
    const {children}=props;
    const [showRight,setShowRight]=useState(false);
    const [posIndex,setPosIndex]=useState(0);
    const scrollContentRef=useRef();
    /* //组件渲染完毕之后，再去判断要不要显示右边的按钮
    useEffect(()=>{
        const scrollWidth=scrollContentRef.current.scrollWidth;
        const clientWidth=scrollContentRef.current.clientWidth;
        const totalDistance=scrollWidth-clientWidth;
        setShowRight(totalDistance>0)
    },[children])

    //事件处理的逻辑
    function rightClickHandle(){
        const newIndex=posIndex+1;
        const newEl=scrollContentRef.current.children[newIndex];
    } */

  return (
    <ViewWrapper>
       {/*  <button>左边按钮</button>
        {showRight&&<button onClick={rightClickHandle}>右边按钮</button>} */}
        <div className="scroll-content" ref={scrollContentRef}>
            {children}
        </div>
        
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView