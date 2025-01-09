import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialValue: CounterState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      return {
        count: state.count + 1,
      };
    },
    decrement: (state) => {
      return {
        count: state.count - 1,
      };
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      return {
        count: state.count + action.payload,
      };
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
