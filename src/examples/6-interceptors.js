import { useEffect } from "react";

import authFetch from "../axios/interceptors";

const url = "https://www.course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      console.log("1. Request made from the Component UI");
      const response1 = await authFetch("/react-store-products");
      console.log("4.Got Response back in  the Component");
      console.log(response1);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
