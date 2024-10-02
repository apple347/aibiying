import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd';

const RoomItem = memo((props) => {

  const { itemData, itemwidth = '25%' } = props;

  return (
    <ItemWrapper itemwidth={itemwidth} itemcolor={itemData?.verify_info?.text_color || "#39576a"}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          {itemData?.verify_info?.messages?.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            disabled 
            allowHalf
            value={itemData?.star_rating??2}
            style={{ color: '#00848a', fontSize: '12px'}}
          />
          <span className="count">{itemData.reviews_count}</span>
          {
           itemData?.bottom_info&&<span className="extra"> · {itemData?.bottom_info?.content}</span>
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