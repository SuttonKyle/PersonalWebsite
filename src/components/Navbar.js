import '../App.css'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from '../styles.js'
import logo from '../assets/logo.jpeg'
import { LogoImage, NavRow, NavItem, SocialMediaContainer } from './styles'
import '../fontawesome-all.js'

class NavBar extends Component {
  state = {
    currentPage: this.props.location.pathname.split('/')[1] || 'about',
  }

  onChangePage = e => this.setState({ currentPage: e.target.name })

  render() {
    const { currentPage } = this.state
    return (
      <NavRow>
        <Link to="/">
          <LogoImage src={logo} className="App-logo" alt="logo" />
        </Link>
        <NavItem
          name="about"
          to="/about"
          selected={currentPage === 'about'}
          onClick={this.onChangePage}
        >
          about
        </NavItem>
        <NavItem
          name="projects"
          to="/projects"
          selected={currentPage === 'projects'}
          onClick={this.onChangePage}
        >
          projects
        </NavItem>
        <NavItem
          name="experience"
          to="/experience"
          selected={currentPage === 'experience'}
          onClick={this.onChangePage}
        >
          experience
        </NavItem>
        <NavItem
          name="contact"
          to="/contact"
          selected={currentPage === 'contact'}
          onClick={this.onChangePage}
        >
          contact
        </NavItem>
        <SocialMediaContainer>
          <a
            className="icon"
            href="https://www.linkedin.com/in/kyle-sutton-0a7008158/"
            target="_"
          >
            {' '}
            <i class="fab fa-linkedin" />{' '}
          </a>
          <a className="icon" href="https://github.com/SuttonKyle" target="_">
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
        </SocialMediaContainer>
      </NavRow>
    )
  }
}

export default withRouter(NavBar)
