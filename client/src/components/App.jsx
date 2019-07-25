import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import CreateNews from './News/CreateNews'
import NavBar from './Navigation/NavBar'
import Register from './User/Register'
import Login from './User/Login'
import Logout from './User/Logout'
import { store } from '../store'

const App = () => (
  <div className="container">
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/news/new" component={CreateNews} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </BrowserRouter>
    </Provider>
  </div>
)

export default hot(App)
