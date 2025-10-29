
import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";


export const  AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const  navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

        const api = axios.create({
            baseURL: 'http://localhost:8080',
            withCredentials:true
        });

        // api.interceptors.response.use(
        //     (res) => res,
        //     (err) =>{
        //         if (err?.response?.status === 401) {
        //             setUser(null);
        //             navigate("/login");
        //             // eslint-disable-next-line react-hooks/rules-of-hooks
        //         }
        //         return Promise.reject(err);
        //     }
        // )

    useEffect(() => {
        api.get("/v1/users/info")
            .then((res) => {
                const data = res.data;
                if(data.authenticated){
                    console.log("USer is Logged in ")
                    setUser(data)
                }else{
                    setUser(null)
                }
            })
            .catch(()=>setUser(null))
            .finally(() => setLoading(false))

    }, []);

        // useEffect(() => {
        //     if(!loading && !user){
        //         navigate("/login");
        //     }
        // },[user,loading]);
        const login = (userdata) => {
            setUser(userdata);
        };

        const logout = () => {
            api.post("/v1/users/logout")
                .then(()=>{setUser(null)})
        }
        return (
            <AuthContext.Provider value={{user, login, logout,loading}}>
                {children}
            </AuthContext.Provider>
        )
}