import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import { Switch, Route } from 'react-router-dom'
import './styles/global.css'
import ApplicationPage from './pages/ApplicationPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <div style={{ height: '87vh' }}>
      <Navigation />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/apply' exact component={ApplicationPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/admin' exact component={AdminPage} />
      </Switch>
    </div>
  )
}

export default App
