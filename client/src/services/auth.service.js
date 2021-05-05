import axios from 'axios'

export default class Auth {
  authenticated = false
  loading = false
  success = false
  error = null
  username = null
  password = null
  verified = false
  // user = null
  constructor(username, password) {
    this.username = username
    this.password = password
  }
  login() {
    this.loading = true
    axios
      .post('http://localhost:5000/auth/login', {
        username: this.username,
        password: this.password,
      })
      .then((res) => {
        if (res.status === 200) {
          this.loading = false
          this.success = true
          this.authenticated = true
        } else {
          console.log('Returned status code is ' + res.status)
        }
      })
      .catch((err) => {
        if (err.response.data) {
          this.loading = false
          this.success = false
          this.authenticated = false
          this.error = err.response.data.error
        } else {
          console.log('Error Obect: ')
          console.error(err)
        }
      })
      .finally(() => {
        this.loading = false
      })
  }
  async verifyLogin() {
    const response = await axios.get('http://localhost:5000/auth/verify')
    return Promise.resolve(response)
    // if (!loginStatus.data.verified) setLoggedIn(false)
    // else if (loginStatus.data.verified && loginStatus.data.type) {
    //   setLoggedIn(loginStatus.data.verified)
    //   setUserType(loginStatus.data.type)
    // } else {
    //   console.log('Error occured')
    // }
  }
}
