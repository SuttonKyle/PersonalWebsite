import React, { Component } from 'react'
import '../App.css'

class ProfExp extends Component {
  render() {
    return (
      <div className="main">
        <h1>Professional Experience</h1>
        <h2>Programming</h2>
        <h3>HSA DEV</h3>
        <p className="body">
          I spent the summer working full-time as a software engineer for HSA
          DEV, and am currently working part-time with them over the upcoming
          fall semester.
        </p>
        <p className="body">
          Learn more about DEV{' '}
          <a className="link" href="https://www.dev.hsa.net/" target="_">
            here
          </a>
          .
        </p>
        <h2>Other Stuff</h2>
        <h3>Sunday River</h3>
        <p className="body">
          I also spent a winter working as a ski instructor at Sunday River ski
          resort in Maine.
        </p>
      </div>
    )
  }
}

export default ProfExp
