import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import OverWiev from "../pages/Dashboard/Overview";
import Transication from "../pages/Dashboard/Transication";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
     children:[
      {
        path:'overWiev',
        element:<OverWiev/>
      },
      {
        path:'Transication',
        element:<Transication/>
      }
     ]
    
  },
]);
