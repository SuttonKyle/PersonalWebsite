import '../App.css'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from '../styles.js'

class NavBar extends Component {
  state = {
    currentPage: this.props.location.pathname.split('/')[1] || 'projects',
  }

  changePage = event => this.setState({ currentPage: event.target.name })

  render() {
    return (
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
    )
  }
}

export default withRouter(NavBar)
