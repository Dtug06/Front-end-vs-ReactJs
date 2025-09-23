import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
           state.value+1;
        }
    }
})
console.log(11111,counterSlice.actions);

export default counterSlice.reducer;
