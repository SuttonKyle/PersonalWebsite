import React, { Component } from 'react'
import '../App.css'
import { ColumnContainer } from './styles'

class ProfExp extends Component {
  render() {
    return (
      <div className="main">
        <h1>Professional Experience</h1>
        <ColumnContainer noLeftMargin>
          <h2 style={{ marginTop: '0px' }}>HSA DEV (May 2018 - present)</h2>
          <div className="body">
            I spent the summer working full-time as a software engineer for HSA
            DEV, and am currently working part-time with them over the school
            year.
          </div>
          <div className="body">
            Learn more about DEV{' '}
            <a className="link" href="https://www.dev.hsa.net/" target="_">
              here
            </a>
            .
          </div>
          <h2>Sunday River (November 2016 - March 2017)</h2>
          <div className="body">
            I also spent a winter working as a ski instructor at Sunday River
            ski resort in Maine.
          </div>
        </ColumnContainer>
      </div>
    )
  }
}

export default ProfExp
