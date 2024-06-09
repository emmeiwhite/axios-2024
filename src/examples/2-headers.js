import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [loading, setLoading] = useState(false)
  const [joke, setJoke] = useState('random dad joke')
  const [error, setError] = useState(null)

  const getJoke = async () => {
    setLoading(true)
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json'
        }
      })
      setJoke(data.joke)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error.message)
    }
  }
  function getRandomJoke() {
    getJoke()
  }

  if (error) {
    return <h3>{error}</h3>
  }

  return (
    <section className="section text-center">
      <button
        className="btn"
        onClick={getRandomJoke}
      >
        get a random joke
      </button>

      {loading ? <h3>loading...</h3> : <p className="dad-joke">{joke}</p>}
    </section>
  )
}
export default Headers
