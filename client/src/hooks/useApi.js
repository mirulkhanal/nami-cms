import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = (url = '') => {
  const [getData, setGetData] = useState(null)
  const [getError, setGetError] = useState(null)
  const [getLoading, setGetLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    setGetLoading(true)
    if (isMounted) {
      axios
        .get(url)
        .then((res) => {
          if (isMounted) {
            setGetData(res.data.results)
            setGetError(null)
            setGetLoading(false)
          }
        })
        .catch((err) => {
          if (isMounted) {
            if (err.response) {
              setGetError(err.response.data.error)
              setGetLoading(false)
            }
          }
        })
        .finally(() => {
          if (isMounted) {
            setGetLoading(false)
          }
        })
    }

    return () => (isMounted = false)
  }, [url])

  return { getLoading, getError, getData }
}

export default useApi
