// bai 10
// import "./App.css";
// import ControlPanel from "./components/PTIT_CNTT4_IT104_SESSION12_BAI10/ControlPanel";
// import StudentList from "./components/PTIT_CNTT4_IT104_SESSION12_BAI10/StudentForm";
// import StudentForm from "./components/PTIT_CNTT4_IT104_SESSION12_BAI10/StudentList";

// function App() {
//   return (
//     <div className="row">
//       <div className="col-lg-7 grid-margin stretch-card">
//         <div className="card">
//           <ControlPanel />
//           <StudentList />
//         </div>
//       </div>
//       <div className="col-5 grid-margin">
//         <StudentForm />
//       </div>
//     </div>
//   );
// }

// export default App;
// bai 9
// import TodoForm from "./components/PTIT_CNTT4_IT104_SESSION12_BAI09/TodoForm";
// import TodoList from "./components/PTIT_CNTT4_IT104_SESSION12_BAI09/TodoList";

// export default function App() {
//   return (
//     <>
//       <section className="vh-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col col-xl-10">
//               <div className="card">
//                 <div className="card-body p-5">
//                   <h3 style={{ textAlign: "center", marginBottom: 40 }}>
//                     Quản lý công việc
//                   </h3>

//                   {/* Form thêm công việc */}
//                   <TodoForm />

//                   {/* Tabs navs */}
//                   <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
//                     <li className="nav-item" role="presentation">
//                       <a className="nav-link active">Tất cả công việc</a>
//                     </li>
//                   </ul>

//                   {/* Danh sách công việc */}
//                   <TodoList />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// bai 8
// import React from "react";
// import UserTable from "./components/PTIT_CNTT4_IT104_SESSION12_BAI08/UserTable";

// const App: React.FC = () => {
//   const users = [
//     { id: 1, name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
//     { id: 2, name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
//   ];

//   return (
//     <div className="app">
//       <h2>Danh sách người dùng</h2>
//       <UserTable users={users} />
//     </div>
//   );
// };

// export default App;
// bai 7
// import React from "react";
// import Header from "./components/PTIT_CNTT4_IT104_SESSION12_BAI07/Header";
// import Navigation from "./components/PTIT_CNTT4_IT104_SESSION12_BAI07/Navigation";
// import Menu from "./components/PTIT_CNTT4_IT104_SESSION12_BAI07/Menu";
// import Article from "./components/PTIT_CNTT4_IT104_SESSION12_BAI07/Article";
// import CartList from "./components/PTIT_CNTT4_IT104_SESSION12_BAI07/CartList";
// import "./index.css";

// const App: React.FC = () => {
//   return (
//     <div className="layout">
//       <Header />
//       <Navigation />
//       <div className="content">
//         <Menu />
//         <CartList />
//         <Article />
//       </div>
//     </div>
//   );
// };

// export default App;
// bai 6
// import React from "react";
// import Header from "./components/PTIT_CNTT4_IT104_SESSION12_BAI06/Header";
// import Menu from "./components/PTIT_CNTT4_IT104_SESSION12_BAI06/Menu";
// import Main from "./components/PTIT_CNTT4_IT104_SESSION12_BAI06/Main";
// import Footer from "./components/PTIT_CNTT4_IT104_SESSION12_BAI06/Footer";
// import "./index.css";

// const App: React.FC = () => {
//   return (
//     <div className="layout">
//       <Header />
//       <div className="body">
//         <Menu />
//         <Main />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;
// bai 5
// import React from "react";
// import FormatName from "./components/PTIT_CNTT4_IT104_SESSION12_BAI05/FormatName";

// function App() {
//   return (
//     <div>
//       <h2>React Component</h2>
//       <FormatName />
//     </div>
//   );
// }

// export default App;
// bai 4
// import React from "react";
// import ColorBox from "./components/PTIT_CNTT4_IT104_SESSION12_BAI04/ColorBox";

// function App() {
//   return (
//     <div style={{ display: "flex" }}>
//       <ColorBox color="red" />
//       <ColorBox color="blue" />
//       <ColorBox color="green" />
//     </div>
//   );
// }

// export default App;
// bai3
// import React from "react";
// import UserInfo from "./components/PTIT_CNTT4_IT104_SESSION12_BAI03/UserInfo";

// function App() {
//   return (
//     <div>
//       <UserInfo />
//     </div>
//   );
// }

// export default App;
// bai 2
// import React from "react";
// import Calculation from "./components/PTIT_CNTT4_IT104_SESSION12_BAI02/Calculation";

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Demo</h1>
//       <Calculation />
//     </div>
//   );
// };

// export default App;
// bai 1
import React from "react";
import ListCourse from "./components/PTIT_CNTT4_IT104_SESSION12_BAI01/ListCourse";

const App: React.FC = () => {
  return (
    <div>
      <ListCourse />
    </div>
  );
};

export default App;







