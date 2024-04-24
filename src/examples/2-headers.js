import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState("random dad joke");
  const [error, setError] = useState(null);

  const fetchDadJoke = async () => {
    try {
      setLoading(true);
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });

      setLoading(false);
      console.log(response);
      setJoke(response.data.joke);
    } catch (error) {
      console.log("ERROR:");
      console.log(error.message);
      setLoading(false);
      setError(error.message);
    }
  };

  if (loading) {
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <section className="section text-center">
      <button
        className="btn"
        onClick={fetchDadJoke}
      >
        get a random joke
      </button>

      {loading ? <h3>loading...</h3> : <p className="dad-joke">{joke}</p>}
    </section>
  );
};
export default Headers;
