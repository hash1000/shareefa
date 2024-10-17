// import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
// import { AuthObj } from "../shared/constants/interfaces";

// const API_BASE_URL = "http://ec2-3-92-194-252.compute-1.amazonaws.com:3000/v1";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// api.interceptors.request.use(
//   (config: AxiosRequestConfig): any => {
//     const authObj: string | null = localStorage.getItem("avocado_auth");
//     const auth: AuthObj = authObj ? JSON.parse(authObj) : {};
//     config.headers = config.headers || {}; // Initialize headers if undefined

//     if (auth) {
//       const {
//         tokens: {
//           access: { token },
//           refresh: { token: refToken },
//         },
//       } = auth;

//       if (auth?.tokens) {
//         config.headers["Authorization"] = `Bearer ${token || refToken}`;
//       }
//     }
//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// export default api;
