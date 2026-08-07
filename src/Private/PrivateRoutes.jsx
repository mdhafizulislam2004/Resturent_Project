import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import LoadingData from "../Main/LoadingData";

const PrivateRoutes = ({ children }) => {

    const { user, loder } = useContext(AuthContext)

    const location=useLocation()

    if (loder) {
        return <LoadingData/>

    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoutes;