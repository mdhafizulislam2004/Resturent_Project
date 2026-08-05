import { createBrowserRouter } from "react-router";
import Header from "../Header/Header";
import Home from "../Pages/Home";
import AllfoodCard from "../Main/AllfoodCard";
import Menu from "../Components/Menu";
import PrivateRoutes from "../Private/PrivateRoutes";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Contect from "../Pages/Contect";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:"/allfoodcard",
          element:<AllfoodCard/>
        },
        {
          path:"/menu",
          element:<PrivateRoutes>
            <Menu/>
          </PrivateRoutes>
        }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/about",
    Component:About
  },
  {
    path:"/contect",
    Component:Contect
  }
]);