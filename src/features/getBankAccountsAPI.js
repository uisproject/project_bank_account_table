import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const getDataFromSessionStorage = window.sessionStorage.getItem("accountsData")
  ? JSON.parse(window.sessionStorage.getItem("accountsData"))
  : false;
const initialState = {
  data: getDataFromSessionStorage || [],
  isLoading: true,
  isError: "",
};

export const getBankAccountsAPIService = createAsyncThunk(
  "api/getBankAccountsAPI",
  async (action, thunkAPI) => {
    try {
      if (getDataFromSessionStorage)
        return thunkAPI.fulfillWithValue(getDataFromSessionStorage);

      const response = await fetch(
        "https://api.sampleapis.com/fakebank/accounts"
      );
      const data = await response.json();
      const addedKey = data.map((item, idx) => ({ key: idx, ...item }));
      window.sessionStorage.setItem("accountsData", JSON.stringify(addedKey));
      return addedKey;
    } catch (e) {
      return thunkAPI.rejectWithValue("Something is wrong");
    }
  }
);

const getBankAccountsAPISlicer = createSlice({
  name: "api/getBankAccountsAPI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBankAccountsAPIService.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBankAccountsAPIService.fulfilled,
      (state, { payload = [] }) => {
        state.data = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      getBankAccountsAPIService.rejected,
      (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      }
    );
  },
});

export const useSelectBankAccountsAPI = () => {
  const state = useSelector((state) => state.getBankAccountsAPI);
  return state;
};

export const { showSizeChangeHandler } = getBankAccountsAPISlicer.actions;

export default getBankAccountsAPISlicer.reducer;
