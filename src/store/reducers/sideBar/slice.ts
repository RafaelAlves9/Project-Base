import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isOpenSideBar: boolean;
};

const initialState: InitialState = {
  isOpenSideBar: false,
};

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState,
  reducers: {
    setOpenSideBar(state, { payload }: PayloadAction<boolean>) {
      state.isOpenSideBar = payload;
    },
  },
});

export const { setOpenSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
