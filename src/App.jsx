import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Activites from "./pages/Activites";

function Layout() {
  return (
    <div className="min-h-screen bg-primary-50 text-navy">
      <Navbar />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activites",
        element: <Activites />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
