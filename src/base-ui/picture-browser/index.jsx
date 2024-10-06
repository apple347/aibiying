import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import IconClose from '@/assets/svg/icon-close';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom';
import Indicator from '../indicator';
import classNames from 'classnames';
import IconTriangleTop from '@/assets/svg/icon-triangle-top';

const PictureBrowser = memo((props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { pictureUrls, closeClick } = props;
    const [isNext, setIsNext] = useState(true);
    const [showList,setShowList]=useState(true);
    //当图片浏览器显示出来时，滚动的功能消失
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        //当图片浏览器消失，滚动的功能重现
        return (() => {
            document.body.style.overflow = 'auto'
        })
    }, [])

    //事件处理逻辑
    function closeBtnClickHandle() {
        if (closeClick) closeClick();
    }

    function controlClickHandle(isNext = true) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;//需要考虑索引越界的问题
        if (newIndex < 0) newIndex = pictureUrls.length - 1;
        if (newIndex > pictureUrls.length - 1) newIndex = 0;
        setCurrentIndex(newIndex)
        setIsNext(isNext);
    }

    function bottomItemClickHandle(index){
        setIsNext(index>currentIndex);
        setCurrentIndex(index)
    }
    
    return (
        <BrowserWrapper isnext={isNext} showlist={showList}>
            <div className="top">
                <div className="close-btn" onClick={closeBtnClickHandle}>
                    <IconClose />
                </div>
            </div>
            <div className="slider">
                <div className="control" >
                    <div className="btn left" onClick={e => controlClickHandle(false)}>
                        <IconArrowLeft width='77' height='77' />
                    </div>
                    <div className="btn right" onClick={e => controlClickHandle(true)}>
                        <IconArrowRight width='77' height='77' />
                    </div>

                </div>
                <div className="picture">
                    <SwitchTransition mode='out-in'>
                        <CSSTransition
                            key={pictureUrls[currentIndex]}
                            classNames='pic'/* 注意这里的属性名不是className */
                            timeout={200}>
                            <img src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>{currentIndex+1}/{pictureUrls.length}</span>
                            <span> : room apartment图片{currentIndex+1}</span>
                        </div>
                        <div className="toggle" onClick={e=>setShowList(!showList)} >
                            <span>{showList?'隐藏':'显示'}照片列表</span>
                            {showList?<IconTriangleBottom />:<IconTriangleTop />}
                        </div>
                    </div>
                    <div className="list">
                        <Indicator selectIndex={currentIndex}>
                            {pictureUrls.map((item,index)=>{
                                return <div 
                                className={classNames('item',{active:currentIndex===index})} 
                                key={item}
                                onClick={e=>bottomItemClickHandle(index)}
                                >
                                    <img src={item} alt="" />
                                </div>
                            })}
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser