import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//路由变化，页面自动回滚到顶部。
function useScrollTop(){
    const location=useLocation();
    useEffect(()=>{
      window.scrollTo(0,0);
    },[location.pathname])
}

export default useScrollTop;