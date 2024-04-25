import axios from "axios";

// This is a custom axios call to the base url & below we are setting up the interceptors
const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

// 1. Request
authFetch.interceptors.request.use(
  (request) => {
    // We can add our headers
    request.headers["Accept"] = "application/json";
    console.log("2. Request Send from the Interceptor");
    // Must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 2. Response
authFetch.interceptors.response.use(
  (response) => {
    console.log("3. Response coming through the Interceptor");
    return response;
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
