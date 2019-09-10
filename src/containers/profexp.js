import React, { Component } from 'react'
import '../App.css'
import { ColumnContainer } from './styles'

class ProfExp extends Component {
  render() {
    return (
      <div className="main">
        <h1>Professional Experience</h1>
        <ColumnContainer noLeftMargin>
          <h2 style={{ marginTop: '0px' }}>Airr (May 2019 - present)</h2>
          <div className="body">
            Airr is a podcasting startup that I joined as a software engineering consultant
            in May 2019.  I worked with the team full-time over the summer and I'm currently
            doing part-time work during the semester.
          </div>
          <div className="body">
            Learn more about Airr{' '}
            <a className="link" href="https://airr.io/" target="_">
              here
            </a>
            .
          </div>
          <h2>HSA DEV (May 2018 - May 2019)</h2>
          <div className="body">
            I spent freshman summer working full-time as a software engineer for
            HSA DEV, and worked part-time with them over the sophomore school year.
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
