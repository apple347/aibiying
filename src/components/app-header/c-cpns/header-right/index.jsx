import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'

const HeaderRight = memo(() => {
  const [showPanel,setShowPanel]=useState(false);

  //副作用代码
  useEffect(()=>{
    function windowHandleClick(){
      setShowPanel(false)
    }
    window.addEventListener('click',windowHandleClick,true);

    return ()=>{
      window.removeEventListener('click',windowHandleClick,true)
    }
  },[])

//点击事件处理
function profileClickHandle(){
  setShowPanel(true);
}

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
        <IconGlobal />
        </span>
        </div>    

        <div className="profile" onClick={profileClickHandle}>
        <IconProfileMenu />
        <IconProfileAvatar />
        {showPanel&&(
          <div className="panel">
          <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
          </div>
          <div className="bottom">
                <div className="rent item">出租房源</div>
                <div className="exp item">开展体验</div>
                <div className="help item">帮助</div>
          </div>
        </div>
        )}
        </div>
    </RightWrapper>
  )
})

export default HeaderRight