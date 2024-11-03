import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menus: [],        // 存储从后端获取的菜单数据
    activeMenu: null,
    activeSubMenu: null,
  },
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    clearActiveMenu: (state) => {
      state.activeMenu = null;
    },
    setActiveSubMenu: (state, action) => {
      state.activeSubMenu = action.payload; // 用于存储当前激活的二级菜单
    },
  },
});


export const { setMenus, setActiveMenu, clearActiveMenu,setActiveSubMenu } = menuSlice.actions;
export default menuSlice.reducer;
