import { useEffect } from 'react'

// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products'

// Axios treats all the errors as errors unless fetch!
const FirstRequest = () => {
  return <h2 className="text-center">First Request</h2>
}
export default FirstRequest
