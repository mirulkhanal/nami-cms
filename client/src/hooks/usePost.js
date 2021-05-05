import { useState, useCallback } from 'react'
import axios from 'axios'

const usePost = (URL = '', params = null) => {
  const [postSuccess, setPostSuccess] = useState(null)
  const [postError, setPostError] = useState(null)
  const [postLoading, setPostLoading] = useState(false)

  const postRequest = useCallback(() => {
    setPostLoading(true)
    axios
      .post(URL, params)
      .then((res) => {
        setPostSuccess(res.data.results)
        setPostError(null)
        setPostLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          setPostSuccess(null)
          setPostError(err.response.data.error)
          setPostLoading(false)
        }
      })
      .finally(() => {
        setPostLoading(false)
      })
  }, [URL, params])

  return { postSuccess, postError, postLoading, postRequest }
}

export default usePost
