import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLoading: boolean;
};

const initialState: InitialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
