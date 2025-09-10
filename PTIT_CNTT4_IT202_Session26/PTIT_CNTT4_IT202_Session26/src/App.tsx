import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bai3 from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI03/Student1";
import ProductDetail from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI01/ProtectDetail";
import Student from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI02/Student";
import Bai4 from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI04/Ex4";
import Home from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI05/Home";
import PrivateRouter from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI05/PrivateRouter";
import Account from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI05/Account";
import Login from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI05/Login";
import Teams from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI07/Teams";
import TeamsIndex from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI07/TeamsIndex";
import Team from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI07/Team";
import S26_8 from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI08/Bai8";
import S26_8_2 from "./pages/PTIT_CNTT4_IT202_SESSION26_BAI08/Bai8_2";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/bai3",
      element: <Bai3 />,
    },
    {
         path: "/bai4",
      element: <Bai4 />,
    },
     {
      path:"/product",
      element:<ProductDetail></ProductDetail>
    },
    {
      path:"/product/:id",
      element:<ProductDetail></ProductDetail>
    },
    {
      path:"/student",
      element:<Student></Student>
    },
    {
      path:"/student/:name",
      element:<Student></Student>
    },
   
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/Bai8",
      element:<S26_8></S26_8>
    },
    {
      
  path:"/account",
  element: <PrivateRouter element={<Account></Account>}></PrivateRouter>
},

    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/teams",
      element:<Teams></Teams>,
      children:[
        {
          index:true,
          element:<TeamsIndex></TeamsIndex>
        },
        {
          path:":id",
          element:<Team></Team>
        }
      ]
    }

  ]);

  return (
    <RouterProvider router={router} />
  );
}