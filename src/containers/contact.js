import React, { Component } from 'react'
import { ColumnContainer } from './styles'
import Resume from '../assets/ResumeFinal.pdf'
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
              download my resume
            </a>
          </div>
        </ColumnContainer>
      </div>
    )
  }
}

export default Contact
