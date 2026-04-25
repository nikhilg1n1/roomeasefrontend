import axios from 'axios'

export const Base_Url = import.meta.env.VITE_API_URL || "http://localhost:8080"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL|| "http://localhost:8080",
    withCredentials: true

});
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response && error.status === 401) {
//             window.location.href = "/login"; // works in any React Router version
//             // window.location.reload();
//         }
//         return Promise.reject(error);
//     }


// );
export default api;
