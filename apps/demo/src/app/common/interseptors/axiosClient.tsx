import React from "react";
import axios from "axios";

const axiosClient=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
})

// axiosClient.defaults.baseURL='https://jsonplaceholder.typicode.com'
axiosClient.defaults.headers.common['Authentication']='Auth token'
axiosClient.defaults.headers.post['Content-Type']='application/json'

axiosClient.interceptors.request.use(request => {
  console.log("request", request);
  return request;
}, error => {
  console.log("request", error);
  return Promise.reject(error);
});

axiosClient.interceptors.response.use(response => {
  console.log("response", response);
  return response;
}, error => {
  console.log("response", error);
  return Promise.reject(error);
});

export default axiosClient
