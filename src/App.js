import React, { Component } from 'react'
import './App.css'
import Home from './containers/home.js'
import Basic from './containers/basic.js'
import Education from './containers/education.js'
import ProfExp from './containers/profexp.js'
import Contact from './containers/contact.js'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './fontawesome-all.js'
import Navbar from './components/Navbar'
import { Background } from './styles'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Background>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/experience" component={ProfExp} />
              <Route path="/education" component={Education} />
              <Route path="/about" component={Basic} />
              <Route path="/projects" component={Home} />
              <Route path="/" component={Basic} />
            </Switch>
          </Background>
        </div>
      </Router>
    )
  }
}

export default App
