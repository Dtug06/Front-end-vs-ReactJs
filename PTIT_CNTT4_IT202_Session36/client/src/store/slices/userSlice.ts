import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUser =createAsyncThunk("getAllUser",async ()=>{
  try {
    const   response = await axios.get("http://localhost:8080/users");
    return response.data
  } catch (error) {
    console.log(error);
    
  }
})
 export const deleteUser =createAsyncThunk("deleteUser",async (id:number)=>{
    try {
       await axios.delete(`http://localhost:8080/users/${id}`)
     return id
    } catch (error) {
        console.log(error);
    }
  })
   export const updataUser =createAsyncThunk("updataUser",async (id:number,newUser:any)=>{
    try {
       await axios.put(`http://localhost:8080/users/${id}`,newUser)
     return id
    } catch (error) {
        console.log(error);
    }
  })
const userSlice =createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending,()=>{
            console.log("dang trong qua trinh xu ly");
            
        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            console.log("lau du lieu thanh cong");
            state.users=action.payload;
            
        })
        .addCase(getAllUser.rejected,()=>{
            console.log("lay du lieu that bai");
            
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
            state.users=state.users.filter((user:any)=>user.id !== action.payload)
        })
    
    }
})
export default userSlice.reducer;