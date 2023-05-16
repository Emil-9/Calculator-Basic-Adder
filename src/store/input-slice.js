import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "number-0",
      amount: 100
    },
    {
      id: "number-1",
      amount: 30
    },
    {
      id: "number-2",
      amount: 7
    }
  ]
};

const calculationSlice = createSlice({
  name: "calculate",
  initialState: initialState,
  reducers: {
    addItem(state) {
      state.items.push({
        id: "number-" + Math.floor(Math.random() * 10000),
        amount: +0
      });
    },
    removeItem(state, action) {
      state.items = state.items.filter((elem) => elem.id !== action.payload.id);
    },

    reCalculate(state, action) {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[foundIndex].amount = parseFloat(
        action?.payload?.sign + action.payload.amount
      );
    }
  }
});

export const calculatorActions = calculationSlice.actions; // export actions type as methods

export default calculationSlice.reducer; // slice of a reducer
