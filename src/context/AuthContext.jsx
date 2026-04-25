import React, { createContext, useState, useRef, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [globalLoading, setGlobalLoading] = useState(false);
  const requestCount = useRef(0);

  const api = useRef(
    axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true,
    }),
  ).current;

  // //Attach token to every request
  // useEffect(() => {
  //     console.log("here we are");
  //     const requestInterceptor = api.interceptors.request.use((config) => {
  //         const token = localStorage.getItem("access_token");
  //         if (token) {
  //             config.headers.Authorization = `Bearer ${token}`;
  //         }
  //         return config;
  //     });

  //     //Response interceptor (auto-refresh)
  //     const responseInterceptor = api.interceptors.response.use(
  //         (res) => res,
  //         async (err) => {
  //             const original = err.config;

  //             // Prevent infinite loop for refresh endpoint itself
  //             if (err.response?.status === 401 && original.url === "/v1/users/auth/refresh") {
  //                 return Promise.reject(err);
  //             }

  //             // Don't retry if already retried
  //             if (err.response?.status === 401 && !original._retry) {
  //                 original._retry = true;

  //                 try {
  //                     console.log("Trying refresh...");
  //                     const refreshRes = await api.get("/v1/users/auth/refresh");

  //                     const newToken = refreshRes.data.access_token;

  //                     if (!newToken) {
  //                         console.warn("Refresh returned NO token");
  //                         return Promise.reject(err);
  //                     }

  //                     console.log("New access token: ", newToken);

  //                     localStorage.setItem("access_token", newToken);
  //                     console.log("the local storage",localStorage);

  //                     api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
  //                     console.log("check the bearer");

  //                     // original.headers["Authorization"] = `Bearer ${newToken}`;
  //                     original.headers = {
  //                         ...original.headers,
  //                         Authorization: `Bearer ${newToken}`,
  //                       };
  //                     console.log("lets see whats happens here");
  //                     console.log(api(original));
  //                     console.log(err);

  //                     return api(original);
  //                 } catch (refreshError) {
  //                     console.log("Refresh failed");
  //                     localStorage.removeItem("access_token");
  //                     setAuthenticated(false)
  //                     setUser(null);
  //                     return Promise.reject(err);
  //                 }
  //             }

  //             return Promise.reject(err);
  //         }
  //     );

  //     return () => {
  //         api.interceptors.request.eject(requestInterceptor);
  //         api.interceptors.response.eject(responseInterceptor);
  //     };
  // }, [api]);

  // =========================
  // AXIOS INTERCEPTORS
  // =========================
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        requestCount.current += 1;
        setGlobalLoading(true);
        console.log("1");

        const token = localStorage.getItem("access_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
          console.log("2");
        }
        return config;
      },
      (err) => {
        requestCount.current -= 1;
        if (requestCount.current === 0) {
          setGlobalLoading(false);
        }
        return Promise.reject(err);
      },
    );

    const responseInterceptor = api.interceptors.response.use(
      (res) => {
        requestCount.current -= 1;
        if (requestCount.current === 0) {
          setGlobalLoading(false);
        }
        return res;
      },
      async (error) => {
        requestCount.current -= 1;
        if (requestCount.current === 0) {
          setGlobalLoading(false);
        }
        const original = error.config;

        if (
          error.response?.status === 401 &&
          !original._retry &&
          !original.url.includes("/login") &&
          !original.url.includes("/forgotpass") &&
          !original.url.includes("/auth/refresh") &&
          !original.url.includes("/v1/users/info")
        ) {
          original._retry = true;

          try {
            const refreshRes = await api.get("/v1/users/auth/refresh");
            const newToken = refreshRes.data.access_token;
            console.log("3");

            localStorage.setItem("access_token", newToken);
            api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
            original.headers.Authorization = `Bearer ${newToken}`;

            return api(original);
          } catch (err) {
            logout();
            return Promise.reject(err);
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  // //INITIAL LOAD
  // useEffect(() => {
  //     const init = async () => {
  //         console.log("here we are");

  //         try {

  //             // 1️⃣ Try refresh first (cookie-based)
  //             try {
  //                 console.log("Startup: trying refresh...");
  //                 const refreshRes = await api.get("/v1/users/auth/refresh");

  //                 const token = refreshRes.data.access_token;

  //                 if (token) {
  //                     console.log("Startup: got new token:", token);
  //                     localStorage.setItem("access_token", token);
  //                     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //                 } else {
  //                     console.log("Startup: refresh returned no token (cookie only auth)");
  //                     localStorage.removeItem("access_token");
  //                 }
  //             } catch {
  //                 console.log("Startup: refresh failed");
  //                 localStorage.removeItem("access_token");
  //             }

  //             // 2️⃣ Now fetch user info
  //             const res = await api.get("/v1/users/info");

  //             if (res.data?.authenticated) {
  //                 setUser(res.data);
  //                 setAuthenticated(true)
  //                 console.log("User Authenticated: ", res.data);
  //             } else {
  //                 setUser(null);
  //                 setAuthenticated(false);
  //             }
  //         } catch (e) {
  //             console.log("Init error", e);
  //             setUser(null);
  //             setAuthenticated(false);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };

  //     init();
  // }, [api]);

  useEffect(() => {
    const initAuth = async () => {
      console.log("checking / ");

      try {
        console.log("4");

        const res = await api.get("/v1/users/auth/refresh");
        const token = res.data.access_token;
        console.log("Token is ->", token);

        if (!token) throw new Error("No token");

        localStorage.setItem("access_token", token);
        // api.defaults.headers.common.Authorization = `Bearer ${token}`;

        // const userRes = await api.get("/v1/users/info");
        const userRes = await api.get("/v1/users/info");
        setUser(userRes.data);
        setRoles(userRes.data.role);
        console.log("user data ->", userRes.data);
          
        setAuthenticated(true);
      } catch (e) {
        setUser(null);
        setAuthenticated(false);
        localStorage.removeItem("access_token");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);
  // // Redirect only after loading finishes
  // useEffect(() => {
  //     if (!loading && !user) {
  //         navigate("/login");
  //     }
  // }, [loading, user, navigate]);

  const login = (userdata) => {
    console.log("The user in login function ->", userdata);

    setUser(userdata);
    // Normalize roles safely
    const normalizedRoles = Array.isArray(userdata?.roles)
      ? userdata.roles
      : [];
    console.log("role is ->", userdata.roles);

    setRoles(normalizedRoles);
    setAuthenticated(true);
    console.log(setAuthenticated);
  };

  const logout = async (email) => {
    try {
      await api.post(`/v1/users/logout/${email}`);
    } catch (error) {
      console.log("Logout error", error);
    }
    localStorage.removeItem("access_token");

    setUser(null);
    setAuthenticated(false);
    delete api.defaults.headers.common["Authorization"];
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        authenticated,
        setAuthenticated,
        logout,
        loading,
        api,
        globalLoading,
        roles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
