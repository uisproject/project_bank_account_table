import { configureStore } from "@reduxjs/toolkit";
import getBankAccountsAPIReducer from "./getBankAccountsAPI";
import detailAccountReducer from "./detailAccount";

const store = configureStore({
  reducer: {
    getBankAccountsAPI: getBankAccountsAPIReducer,
    detailAccount: detailAccountReducer,
  },
});

export default store;
