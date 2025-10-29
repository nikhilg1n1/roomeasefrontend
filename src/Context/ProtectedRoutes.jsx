import {useContext} from "react"
import {AuthContext} from "@/Context/AuthContext.jsx";
import {Navigate} from "react-router-dom"


function ProtectedRoutes({children}) {
    const {user,loading} = useContext(AuthContext);

    if(loading)<p>loading...</p>

    if(!user) return <Navigate to="/login" replace/>
    return children;
}

export default ProtectedRoutes;