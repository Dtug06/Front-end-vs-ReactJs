import React ,{useState}from 'react'

export default function Bai5() {
    const [quote,setQuote]= useState("");
  const  handleQuote=()=>{
let number1 = Math.floor(Math.random() * 6) + 1;
  switch (number1) {
    case 1:
    setQuote( "Học, học nữa, học mãi.");
        break;
   case 2:
    setQuote( "Thất bại là mẹ thành công.");
        break;
       case 3:
    setQuote(  "Không gì là không thể.");
        break;
         case 4:
    setQuote(   "Kiến tha lâu đầy tổ.");
        break;
         case 5:
    setQuote(   "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.");
        break; 
    default:
        return quote;
        break;
  }
    }
 
  return (
    <div>
        <h3>Cau chuyen cuoi hom nay:</h3>
        <p>{quote}</p>
        <button onClick={handleQuote}>lau cau noi moi</button>
    </div>
  )
}