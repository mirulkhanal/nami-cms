import React, { useState } from 'react'
import Application from '../components/Application'
import Error from '../styles/handlers/Error'
import Loading from '../styles/handlers/Loading'
import { REQUEST_URLS } from '../config/constants'
import useApi from '../hooks/useApi'
import usePost from '../hooks/usePost'

const ApplicationPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [selectedModule, setSelectedModule] = useState('')

  const { getLoading, getError, getData } = useApi(REQUEST_URLS.GET_MODULES)
  const { postLoading, postError, postSuccess, postRequest } = usePost(
    REQUEST_URLS.POST_APPLICATION,
    {
      name,
      address,
      email,
      contact: phone,
      moduleID: selectedModule,
    }
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    postRequest()
  }
  return (
    <>
      {(getLoading || postLoading) && <Loading />}
      {(getError && <Error message={getError} />) ||
        (postError && <Error message={getError} />)}
      {getData && (
        <Application
          name={{ name, setName }}
          email={{ email, setEmail }}
          phone={{ phone, setPhone }}
          address={{ address, setAddress }}
          username={{ username, setUsername }}
          password={{ password, setPassword }}
          gender={{ gender, setGender }}
          module={{ selectedModule, setSelectedModule }}
          modules={getData}
          onSubmit={(e) => handleSubmit(e)}
        />
      )}
    </>
  )
}

export default ApplicationPage
