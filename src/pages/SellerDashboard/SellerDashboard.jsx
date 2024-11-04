
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
// import MainContent from './MainContent/MainContent';
import './SellerDashboard.css'; // 导入样式文件
// import { setActiveMenu } from '../../store/menuSlice';
import { useSelector } from 'react-redux';
import ProductForm from './ProductForm/ProductForm';


const SellerDashboard = () => {
  //触发usedispatch执行,使用userEffect显示
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchNaviList())
  // },[dispatch])

    //获取store中的数据，渲染数据列表
  const activeSubMenu = useSelector((state) => state.menu.activeSubMenu);
  const menusa = useSelector((state) => state.menu.menus);
  console.log(menusa)
  return (
          <div className="main-component">
          <Sidebar menus={menusa} />
          {activeSubMenu === 'Add a Product' && <ProductForm />}
          </div>
        );
};

export default SellerDashboard;
