import { createBrowserRouter } from "react-router";
import Header from "../Header/Header";
import Home from "../Pages/Home";
import AllfoodCard from "../Main/AllfoodCard";
import Menu from "../Components/Menu";
import PrivateRoutes from "../Private/PrivateRoutes";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Contect from "../Pages/Contect";
import Register from "../Pages/Register";
import ThreeItemsCard from "../Main/ThreeItemsCard";
import CardDitels from "../Pages/CardDitels";
import ErrorPage from "../Components/ErrorPage";
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
          loader:()=>fetch("/json/Items.json"),
          element:<PrivateRoutes>
            <Menu/>
          </PrivateRoutes>
        },
        {
          path:"/cardditels/:id",
          loader:()=>fetch("/json/Items.json"),
          element:<PrivateRoutes>
            <CardDitels/>
          </PrivateRoutes>
        },
        {
          path:"/threeitemscard/:id",
          element:<ThreeItemsCard/>
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
  },
  {
    path:"/register",
    Component:Register
  },
  {
    path:"/*",
    element:<ErrorPage></ErrorPage>
  }
]);