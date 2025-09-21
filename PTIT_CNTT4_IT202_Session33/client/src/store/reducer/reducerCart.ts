// // reducer là những hàm
// type Action={
//     type:string,
//     payload:any
// }
// const initialState={
//     cart:[
//         {
//             id:1,
//             title:"Cake",
//             price: 10,
//             quantity:3
//         },
//          {
//             id:2,
//             title:"Hamburger",
//             price: 15,
//             quantity:5
//         }
//     ],
    
// }
// export const reducerCart= (state=initialState, action:Action)=>{
//    switch (action.type) {
//     case "INCREMENT":
//         console.log("tăng giá trị",action.payload);
//         let index= state.cart.findIndex(item=> item.id==action.payload.id);
//         state.cart[index].quantity+=1;
//        return JSON.parse(JSON.stringify(state));
   
//     default:
//        return state;
//    }
// }
type Action = {
  type: string;
  payload: any;
};

const initialState = {
  cart: [
    {
      id: 1,
      title: "Cake",
      price: 10,
      quantity: 3,
    },
    {
      id: 2,
      title: "Hamburger",
      price: 15,
      quantity: 5,
    },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        // nếu sp đã có thì tăng số lượng
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // thêm sản phẩm mới vào giỏ
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "INCREMENT": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }

    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};
