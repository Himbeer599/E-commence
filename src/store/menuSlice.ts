import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuItem {
  id: string;
  name: string;
  subMenus?: MenuItem[];
}

interface MenuState {
  menus: MenuItem[];        // 存储从后端获取的菜单数据
  activeMenu: string | null;
  activeSubMenu: string | null;
}

const initialState: MenuState = {
  menus: [],
  activeMenu: null,
  activeSubMenu: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<MenuItem[]>) => {
      state.menus = action.payload;
    },
    setActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload;
    },
    clearActiveMenu: (state) => {
      state.activeMenu = null;
    },
    setActiveSubMenu: (state, action: PayloadAction<string>) => {
      state.activeSubMenu = action.payload; // 用于存储当前激活的二级菜单
    },
  },
});

export const { 
  setMenus, 
  setActiveMenu, 
  clearActiveMenu, 
  setActiveSubMenu 
} = menuSlice.actions;

// 导出类型
export type { MenuState, MenuItem };

export default menuSlice.reducer; 