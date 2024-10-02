import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
  const { children } = props;
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef(0);


  //组件渲染完毕之后，再去判断要不要显示右边的按钮
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    setShowRight(totalDistance > 0)
    totalDistanceRef.current = totalDistance;
  }, [children])

  //事件处理的逻辑
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;

    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex);

    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0)
  }


  return (
    <ViewWrapper>
      {showLeft &&
        <div onClick={e => controlClickHandle(false)}
          className='control left'
        >
          <IconArrowLeft />
        </div>
      }
      {showRight &&
        <div onClick={e => controlClickHandle(true)}
          className='control right'
        >
          <IconArrowRight />
        </div>}
      <div className="content">
        <div className="scroll" ref={scrollContentRef}>
          {children}
        </div>
      </div>

    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView