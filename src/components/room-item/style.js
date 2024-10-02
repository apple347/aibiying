import styled from "styled-components";
 
export const ItemWrapper=styled.div`

  box-sizing: border-box;
  width: ${props => props.itemwidth};
  padding: 8px;
  margin: 8px 0;
  flex-shrink: 0;
  .inner {
    width: 100%;
    position: relative;
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
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props=>props.itemcolor};
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
    color: ${props=>props.itemcolor};
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