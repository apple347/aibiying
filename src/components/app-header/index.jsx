import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPostion from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'


const AppHeader = memo(() => {

  const { headerConfig } = useSelector(state => state.main, shallowEqual);
  const { isFixed,topAlpha } = headerConfig;
  const [isSearch, setIsSearch] = useState(false);//是否处于搜索状态
  //监听滚动
  const {scrollY}=useScrollPostion();
  const prevY=useRef(0);
  if(!isSearch) prevY.current=scrollY;
  //搜索框弹出，且滚动的距离差大于30时，隐藏搜索框
  if(isSearch&&Math.abs(scrollY-prevY.current)>30)  setIsSearch(false);
  /* 透明度的逻辑 */
  const isAlpha=(topAlpha&&scrollY===0);

  return (
    <ThemeProvider theme={{isAlpha:isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })} issearch={isSearch}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isAlpha||isSearch} searchBarClick={e=>setIsSearch(true)}/>
          <HeaderRight />
        </div>
         <div className="search-area" ></div>{/* 处于搜索状态，增加100px的高度来显示搜索框 */}
      </div>
      {/* 蒙版cover */}
      {isSearch && <div className="cover" onClick={e=>setIsSearch(false)}></div>}
    </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader