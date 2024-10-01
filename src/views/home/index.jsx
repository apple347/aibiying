import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'



const Home = memo(() => {


  /* 派发异步的事件，发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])


  //从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo,hotrecommend } = useSelector(state => state.home, shallowEqual);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 有数据再去渲染组件，没有数据，就不去渲染，可以减少渲染的次数 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(hotrecommend)&& <HomeSectionV2 infoData={hotrecommend}/>}
        {isEmptyO(goodPriceInfo)&&<HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo)&&<HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home