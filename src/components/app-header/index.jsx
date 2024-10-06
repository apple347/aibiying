import React, { memo, useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
const AppHeader = memo(() => {

  const { headerConfig } = useSelector(state => state.main, shallowEqual);
  const { isFixed } = headerConfig;
  const [isSearch, setIsSearch] = useState(false);//是否处于搜索状态
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })} issearch={isSearch} >
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={e=>setIsSearch(true)}/>
          <HeaderRight />
        </div>
         <div className="search-area" ></div>{/* 处于搜索状态，增加100px的高度来显示搜索框 */}
      </div>
      {/* 蒙版cover */}
      {isSearch && <div className="cover" onClick={e=>setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader