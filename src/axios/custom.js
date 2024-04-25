import axios from "axios";

// This is a custom axios call to the base url with headers set
const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
