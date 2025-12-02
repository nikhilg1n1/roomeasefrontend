import React, { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const[authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const api = useRef(
        axios.create({
            baseURL: "http://localhost:8080",
            withCredentials: true,
        })
    ).current;

    //Attach token to every request
    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use( (config) => {
            const token = localStorage.getItem("access_token");
            if (token && token !== "undefined" && token !== "null") {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        //Response interceptor (auto-refresh)
        const responseInterceptor = api.interceptors.response.use(
            (res) => res,
            async (err) => {
                const original = err.config;

                // Don't retry if already retried
                if (err.response?.status === 401 && !original._retry) {
                    original._retry = true;

                    try {
                        console.log("Trying refresh...");
                        const refreshRes = await api.get("/v1/users/auth/refresh");

                        const newToken = refreshRes.data.access_token;

                        if (!newToken) {
                            console.warn("⚠ Refresh returned NO token");
                            return Promise.reject(err);
                        }

                        console.log("New access token: ", newToken);

                        localStorage.setItem("access_token", newToken);
                        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
                        original.headers["Authorization"] = `Bearer ${newToken}`;

                        return api(original);
                    } catch (refreshError) {
                        console.log("Refresh failed");
                        localStorage.removeItem("access_token");
                        setAuthenticated(false)
                        setUser(null);
                        return Promise.reject(err);
                    }
                }

                return Promise.reject(err);
            }
        );

        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [api]);

    //INITIAL LOAD
    useEffect(() => {
        const init = async () => {
            try {
                // 1️⃣ Try refresh first (cookie-based)
                try {
                    console.log("Startup: trying refresh...");
                    const refreshRes = await api.get("/v1/users/auth/refresh");

                    const token = refreshRes.data.access_token;

                    if (token) {
                        console.log("Startup: got new token:", token);
                        localStorage.setItem("access_token", token);
                        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    } else {
                        console.log("Startup: refresh returned no token (cookie only auth)");
                        localStorage.removeItem("access_token");
                    }
                } catch {
                    console.log("Startup: refresh failed");
                    localStorage.removeItem("access_token");
                }

                // 2️⃣ Now fetch user info
                const res = await api.get("/v1/users/info");

                if (res.data?.authenticated) {
                    setUser(res.data);
                    setAuthenticated(true)
                    console.log("User Authenticated: ", res.data);
                } else {
                    setUser(null);
                    setAuthenticated(false);
                }
            } catch (e) {
                console.log("Init error", e);
                setUser(null);
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [api]);

    // // Redirect only after loading finishes
    // useEffect(() => {
    //     if (!loading && !user) {
    //         navigate("/login");
    //     }
    // }, [loading, user, navigate]);

    const login = (userdata) => {
        setUser(userdata)
        setAuthenticated(true)
    };

    const logout = async () => {
        localStorage.removeItem("access_token");
        setUser(null);
        setAuthenticated(false);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login,authenticated, logout, loading, api }}>
            {children}
        </AuthContext.Provider>
    );
};
