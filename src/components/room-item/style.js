import styled from "styled-components";

export const ItemWrapper = styled.div`

  box-sizing: border-box;
  width: ${props => props.itemwidth};
  padding: 8px;
  margin: 8px 0;
  flex-shrink: 0;
  .inner {
    width: 100%;
    position: relative;

    .name{
      cursor: pointer;
    }
  }

  .slider{
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      /* background-color: skyblue; */

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
  }

  .indicator{
    position: absolute;
    bottom: 10px;
    width: 30%;
    z-index: 9;
    left: 0;
    right: 0;
    margin: 0 auto;

    .item{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.28%;

      .dot{
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;

        &.active{ 
        width: 8px;
        height: 8px;
      }
      }
    }
  }
}

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.itemcolor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
    color: ${props => props.itemcolor};
  }

  .bottom {
    position:absolute;
   
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    padding-bottom:0;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
     
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }

`