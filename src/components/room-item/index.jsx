import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rate, Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';


const RoomItem = memo((props) => {

  const { itemData, itemwidth = '25%', itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();

  //事件处理,更新索引
  function controlClcikHandle(isRight = true,event) {
    //上一个面板，下一个面板
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    //阻止control的事件冒泡。
    event.stopPropagation();
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }


  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => controlClcikHandle(false,e)}>
          <IconArrowLeft height='30' width='30' />
        </div>
        <div className="btn right" onClick={e => controlClcikHandle(true,e)}>
          <IconArrowRight height='30' width='30' />
        </div>
      </div>

      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className='item' key={item}>
                <span className={classNames('dot', { active: index === selectIndex })} ></span>
              </div>)
          })}
        </Indicator>
      </div>

      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map(item => {
          return <div className="cover">
            <img src={item} alt="" key={item} />
          </div>
        })}
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper
      itemcolor={itemData?.verify_info?.text_color || "#39576a"}
      itemwidth={itemwidth}
      onClick={itemClickHandle}
    >

      <div className="inner">
        {itemData?.picture_urls ? sliderElement : pictureElement}
        <div className="desc">
          {itemData?.verify_info?.messages?.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            disabled
            allowHalf
            value={itemData?.star_rating ?? 2}
            style={{ color: '#00848a', fontSize: '12px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {
            itemData?.bottom_info && <span className="extra"> · {itemData?.bottom_info?.content}</span>
          }
        </div>

      </div>
    </ItemWrapper>

  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem