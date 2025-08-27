import React,{useMemo} from 'react'
type User={
    id:number;
    name:string;
    age:number;
}
export default function Bai2() {
    const users:User[]=[
        {id:1,name:"Chien",age:19},
        {id:2,name:"An",age:17},
        {id:3,name:"Huy",age:16},
        {id:4,name:"Le",age:20},
    ]
    const user18=useMemo(()=>{
        return users.filter((user)=>user.age>18);
    },[users]);
  return (
    <div>
     <h2>nguoi tren 18 tuoi</h2>
     {user18.map((item,index)=>(<li key={index}>Id:{item.id} Ten:{item.name} tuoi: {item.age}</li>))}
    </div>
  )
}