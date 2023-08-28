import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 10,
        value2: 500,
        value3: 20,
        value4: 1200,
    },

    reducers: {
        increment: (state, action) => {
            state.value += action.payload

        },
        increment2: (state, action) => {
            state.value2 -= action.payload

        },
        increment3: (state, action) => {

            state.value3 *= action.payload

        },
        increment4: (state, action) => {

            state.value4 /= action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, increment2, increment3, increment4 } = counterSlice.actions;

export default counterSlice.reducer;
