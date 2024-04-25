import axios from "axios";

// This is a custom axios call to the base url & below we are setting up the interceptors
const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

// 1. Request
axios.interceptors.request.use(
  (request) => {
    // We can add our headers
    request.headers.common["Accept"] = "application/json";
    console.log("*** Request Send ***");
    // Must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 2. Response
axios.interceptors.request.use(
  (request) => {
    console.log("*** Got Response ***");
    return request;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      //   do something
      console.log("NOT FOUND!");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
