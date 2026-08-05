import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoutes = ({children}) => {

    const {user}=use(AuthContext)

    if(user){
        return children
    }
        return <Navigate to="/login"></Navigate>
}

export default PrivateRoutes;