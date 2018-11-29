import React, { Component } from 'react'
import logo from './assets/logo.jpeg'
import './App.css'
import Home from './containers/home.js'
import Basic from './containers/basic.js'
import Education from './containers/education.js'
import ProfExp from './containers/profexp.js'
import Contact from './containers/contact.js'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import './fontawesome-all.js'
import { Button } from './styles.js'

class App extends Component {
  state = { currentPage: this.props.location.pathname.split('/')[1] }

  changePage = event => this.setState({ currentPage: event.target.name })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Content">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Kyle Sutton TEST</h1>
            <p className="info"> Harvard College Class of 2021</p>
            <p className="info">A.B. Candidate in Computer Science</p>
            <p className="icons">
              <a
                className="icon"
                href="https://www.linkedin.com/in/kyle-sutton-0a7008158/"
                target="_"
              >
                {' '}
                <i class="fab fa-linkedin" />{' '}
              </a>
              <a
                className="icon"
                href="https://github.com/SuttonKyle"
                target="_"
              >
                {' '}
                <i class="fab fa-github" />{' '}
              </a>
              <a
                className="icon"
                href="https://facebook.com/kyle.sutton.35762"
                target="_"
              >
                {' '}
                <i class="fab fa-facebook" />{' '}
              </a>
              <a
                className="icon"
                href="https://open.spotify.com/user/22dz2m3zzpiip4qx2juh52fra?si=tgtvwwT4QEOfxueVZU-hVA"
                target="_"
              >
                <i class="fab fa-spotify" />
              </a>
            </p>
          </div>
        </header>
        <div className="NavBar">
          <Link to="/projects">
            <Button
              name="projects"
              className="Nav"
              onClick={this.changePage}
              active={this.state.currentPage === 'projects'}
            >
              Projects
            </Button>
          </Link>
          <Link to="/about">
            <Button
              name="about"
              className="Nav"
              onClick={this.changePage}
              active={this.state.currentPage === 'about'}
            >
              About Me
            </Button>
          </Link>
          <Link to="/education">
            <Button
              name="education"
              className="Nav"
              onClick={this.changePage}
              active={this.state.currentPage === 'education'}
            >
              Education
            </Button>
          </Link>
          <Link to="/experience">
            <Button
              name="experience"
              className="Nav"
              onClick={this.changePage}
              active={this.state.currentPage === 'experience'}
            >
              Experience
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              name="contact"
              className="Nav"
              onClick={this.changePage}
              active={this.state.currentPage === 'contact'}
            >
              Contact
            </Button>
          </Link>
        </div>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/experience" component={ProfExp} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={Basic} />
          <Route path="/projects" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
