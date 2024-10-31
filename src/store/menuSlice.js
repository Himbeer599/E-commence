import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menus: [],        // 存储从后端获取的菜单数据
    activeMenu: null, // 当前被激活的一级菜单
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
  },
});

export const { setMenus, setActiveMenu, clearActiveMenu } = menuSlice.actions;
export default menuSlice.reducer;
