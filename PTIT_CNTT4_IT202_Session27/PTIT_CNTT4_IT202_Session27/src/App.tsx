// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/PTIT_CNTT4_IT202_SESSION27_BA10/Home';
import About from './pages/PTIT_CNTT4_IT202_SESSION27_BA10/About';
import Contact from './pages/PTIT_CNTT4_IT202_SESSION27_BA10/Contact';
import Navbar from './pages/PTIT_CNTT4_IT202_SESSION27_BA10/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
