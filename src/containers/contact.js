import React, { Component } from 'react'
import { ColumnContainer } from './styles'
import Resume from '../assets/Resume_Kyle_Sutton.pdf'
import '../App.css'

class Contact extends Component {
  render() {
    return (
      <div className="main">
        <h1>Contact</h1>
        <ColumnContainer noLeftMargin>
          <div className="body">
            email:{' '}
            <a className="link" href="mailto:kylesutton@college.harvard.edu">
              kylesutton@college.harvard.edu
            </a>
          </div>
          <div className="body">
            <a className="link" href={Resume} download="KYLE_SUTTON">
              download
            </a>
            {' '}or{' '}
            <a className="link" href={Resume} target="_">
              view{' '}
            </a>
            my resume
          </div>
        </ColumnContainer>
      </div>
    )
  }
}

export default Contact
