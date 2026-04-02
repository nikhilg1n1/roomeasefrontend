import {useContext} from "react"
import {AuthContext} from "@/context/AuthContext.jsx";
import {Navigate} from "react-router-dom"
import GlobalLoader from "@/components/ui/GlobalLoader";


function ProtectedRoutes({children}) {
    const {user,loading,authenticated} = useContext(AuthContext);

    if(loading) return <GlobalLoader/>
    
    console.log("isAuthenticated -> ",authenticated);
    console.log("The user is -> " , user);
    
    
    // if(!user) return <Navigate to="/login"/>
    if(!authenticated || !user) return <Navigate to = "/login"/>
    // if(!authenticated) return <Navigate to = "/login"/>

    return children;
}

export default ProtectedRoutes;