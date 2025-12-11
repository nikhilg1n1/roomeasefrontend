import {useContext} from "react"
import {AuthContext} from "@/Context/AuthContext.jsx";
import {Navigate} from "react-router-dom"


function ProtectedRoutes({children}) {
    const {user,loading,authenticated} = useContext(AuthContext);

    if(loading) return <p>loading...</p>
    

    // if(!user) return <Navigate to="/login"/>
    if(!authenticated || !user) return <Navigate to = "/login"/>
    return children;
}

export default ProtectedRoutes;