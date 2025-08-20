//  
// import React from 'react'
// import Exercises01 from './components/PTIT_CNTT4_IT104_SESSION13_BAI01/exc1'

// export default function App() {
//   return (
//     <div>
//       <Exercises01></Exercises01>
//     </div>
//   )
// }
// bai 2
// import React from 'react'
// import Exercise02 from './components/PTIT_CNTT4_IT104_SESSION13_BAI02/DemoStatus'
// export default function App() {
//   return (
//     <div>
//       <Exercise02></Exercise02>
//     </div>
//   )
// }
// bai 4

// import React, { Component } from 'react'
// import Parent_Comp from './components/PTIT_CNTT4_IT104_Session13_BAI04/Parent_Comp'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//          <Parent_Comp></Parent_Comp>
//       </div>
//     )
//   }
// }
// bai 5
// import React from 'react'
// import Parent from './components/PTIT_CNTT4_IT104_Session13_BAI05/Parent'
// export default function App() {
//   return (
//     <div>
//       <Parent></Parent>
//     </div>
//   )
// }
// bai6
// import React from 'react'
// import ListPost from './components/PTIT_CNTT4_IT104_SESSION13_BAI6/ListPost'
// export default function App() {
//   return (
//     <div>
//       <ListPost></ListPost>
//     </div>
//   )
// }
// bai 7
// import React, { useState } from "react";

// export default function App() {
//   const [appState] = useState({
//     theme: "light",
//     language: "english"
//   });

//   return (
//     <div>
//       <h1>Trạng thái ứng dụng</h1>
//       <p>Theme: {appState.theme === "light" ? "Sáng" : "Tối"}</p>
//       <p>Language: {appState.language === "english" ? "English" : "Tiếng Việt"}</p>
//     </div>
//   );
// }
// bai 8
// import React, { useState } from "react";

// export default function Todolist() {
//   // Hàm format thời gian
//   const formatDate = (date) => {
//     const d = new Date(date);
//     const day = String(d.getDate()).padStart(2, "0");
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const year = d.getFullYear();
//     const hours = String(d.getHours()).padStart(2, "0");
//     const minutes = String(d.getMinutes()).padStart(2, "0");
//     const seconds = String(d.getSeconds()).padStart(2, "0");
//     return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
//   };

//   // State danh sách công việc
//   const [tasks] = useState([
//     {
//       id: 1,
//       name: "Học ReactJS",
//       assign: "David",
//       status: false,
//       created_at: new Date()
//     },
//     {
//       id: 2,
//       name: "Hoàn thành bài tập",
//       assign: "Linda",
//       status: true,
//       created_at: new Date()
//     },
//     {
//       id: 3,
//       name: "Đọc tài liệu",
//       assign: "David",
//       status: false,
//       created_at: new Date()
//     }
//   ]);

//   return (
//     <div>
//       <h1>Danh sách công việc</h1>
//       <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Tên công việc</th>
//             <th>Người được giao</th>
//             <th>Trạng thái</th>
//             <th>Ngày tạo</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task) => (
//             <tr key={task.id}>
//               <td>{task.id}</td>
//               <td>{task.name}</td>
//               <td>{task.assign}</td>
//               <td>{task.status ? " Đã hoàn thành" : " Chưa hoàn thành"}</td>
//               <td>{formatDate(task.created_at)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// bai 9
// import React, { Component } from "react";

// export default class UpdateState extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       company: "Rikkei Academy",
//     };
//   }
//   handleChange = () => {
//     this.setState({
//       company: "Rikkei Soft",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Tên công ty: {this.state.company}</h1>
//         <button onClick={this.handleChange}>Change</button>
//       </div>
//     );
//   }
// }
// bai 10
import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "", 
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nhập nội dung"
          onChange={this.handleChange}
        />
        <p>Dữ liệu: {this.state.text}</p>
      </div>
    );
  }
}









