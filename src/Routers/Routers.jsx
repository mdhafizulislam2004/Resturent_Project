import { createBrowserRouter } from "react-router";
import Header from "../Header/Header";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
]);