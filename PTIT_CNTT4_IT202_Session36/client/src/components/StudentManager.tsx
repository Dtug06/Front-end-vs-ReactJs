import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser, updataUser } from '../store/slices/uerSlice';
import type { User } from '../utils/types';

export default function StudentManager() {
    const [name,setName]=useState<string>("")
    const result =useSelector((data:any)=>{
        console.log("Data",data);
        return data.user.users
        
    })
    const dispatch:any=useDispatch();
    useEffect(()=>{
  dispatch(getAllUser());
    },[]);

    const handleDele =(id:number)=>{
        dispatch(deleteUser(id))
        
    }
    const handleEdit=(id:number)=>{
        let newName:any =prompt("nhap ten moi")
        const newUser:User={
          id:id,
          name:newName
        }
        dispatch(updataUser(id,newUser))
    }
  return (
    <div>
        <h1>Quản lý sinh viên</h1>
        <ul>
            {result.map((item:User)=>{
             return   <li>{item.name} <button onClick={()=>handleEdit(item.id)}>Sửa</button><button onClick={()=>handleDele(item.id)}>Xóa</button></li>
    })}
        </ul>
    </div>
  )
}