import { createSlice } from "@reduxjs/toolkit";

const value = {
    initial : 99,
    max_val : 200
}
const counter = createSlice({
    name : "counter",
    initialState: value,
    reducers: {
        increaseCounter : (state) =>{
            state.initial = state.initial + 1
        },
        decreaseCounter : (state)=>{
            state.initial = state.initial - 1
        },
        increaseCounterByValue :(state, action)=>{
            state.initial = state.initial + action.payload
        },
        resetCounter : (state)=>{
            state.initial = 0
        },
        
    }
});
export const {increaseCounter, decreaseCounter, increaseCounterByValue, resetCounter} = counter.actions;
export default counter.reducer