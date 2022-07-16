import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import moment from "moment";

const initialState = {
  transactionHistory: [],
  isLoading: false,
};

const detailAccountSlice = createSlice({
  name: "detailAccount",
  initialState,
  reducers: {
    setTransactionHistory: (state, { payload }) => {
      const { account, data } = payload;

      const filteredTransaction = data
        .filter((item) => item.category === account.category)
        .filter((item) => {
          if (
            moment(item.transactionDate).isSameOrBefore(
              moment(account.transactionDate)
            )
          ) {
            return item;
          }
        })
        .map((item) => {
          return {
            id: item.id,
            key: item.id,
            transactionDate: item.transactionDate,
            debit: item.debit,
            credit: item.credit,
          };
        })
        .reverse();

      state.transactionHistory = filteredTransaction;
      state.isLoading = false;
    },
  },
});

export const { setTransactionHistory } = detailAccountSlice.actions;

export const useSelectDetailAccount = () => {
  const state = useSelector((state) => state.detailAccount);
  return state;
};

export default detailAccountSlice.reducer;
