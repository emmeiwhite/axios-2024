import { useEffect, useState } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://www.course-api.com/react-store-products";

// Axios treats all the errors as errors unless fetch!

const FirstRequest = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      setProducts(response.data);
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      const errorMessage = error.response.data.msg;
      setIsLoading(false);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>LOADING ...</h1>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }
  return <h2 className="text-center">Total Products: {products.length}</h2>;
};
export default FirstRequest;
