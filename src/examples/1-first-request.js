import { useEffect } from 'react'
import axios from 'axios'

// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products'

// Axios handles all HTTP errors consistently, unlike fetch which requires manual handling for certain errors.

const FirstRequest = () => {
  const getProducts = async () => {
    try {
      const { data } = await axios(url)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <h2 className="text-center">First Request</h2>
}
export default FirstRequest
