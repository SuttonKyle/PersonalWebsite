import React, { Component } from 'react'
import '../App.css'
import personalPhoto from '../assets/personalPhoto.jpeg'
import { MainContainer, ColumnContainer, RowContainer, Photo } from './styles'

class Basic extends Component {
  render() {
    return (
      <MainContainer>
        <h1>Hi, I'm Kyle!</h1>
        <RowContainer>
          <Photo src={personalPhoto} />
          <ColumnContainer>
            <div className="body">
              I'm a 20-year-old computer science major from Hingham,
              Massachusetts. I'm studying at Harvard currently. Besides
              programming, I love to run, ski, hike, climb, and play guitar. I
              write for Satire V, Harvard's satirical news publication, and am
              the Vice President of the Harvard Mounaineering Club.
            </div>
            {/* <h3> Praise for Kyle Sutton: </h3>
            <div className="body">
              "Also you are so goddamn smart 10/10 go Kyle would recommend" --
              Olivia Graham
            </div>
            <div className="body">
              "Could be granola gay" -- Also Olivia Graham
            </div>
            <div className="body">
              "Looks a little unrefined but has a heart of gold" -- Lauren Toman{' '}
            </div>
            <div className="body">
              "If I was lost in the woods, he would either save me or murder me"
              -- Randle Steinbeck
            </div>
            <div className="body">
              "Doesn't look as much like Post Malone as I expected" -- Caroline
              Graham
            </div> */}
            <h3> Check out some other stuff about me: </h3>
            <div className="icons-body">
              <a
                className="link"
                href="https://www.linkedin.com/in/kyle-sutton-0a7008158/"
                target="_"
              >
                <i class="fab fa-linkedin" />{' '}
              </a>
              <a
                className="link"
                href="https://github.com/SuttonKyle"
                target="_"
              >
                <i class="fab fa-github-square" />{' '}
              </a>
              <a
                className="link"
                href="https://angel.co/kyle-sutton-1"
                target="_"
                style={{ marginRight: '6px' }}
              >
                <i class="fab fa-angellist" />
              </a>
              <a
                className="link"
                href="https://facebook.com/kyle.sutton.35762"
                target="_"
              >
                <i class="fab fa-facebook" />{' '}
              </a>
              <a
                className="link"
                href="https://open.spotify.com/user/22dz2m3zzpiip4qx2juh52fra?si=tgtvwwT4QEOfxueVZU-hVA"
                target="_"
              >
                <i class="fab fa-spotify" />{' '}
              </a>
              <a
                className="link"
                href="https://instagram.com/suttonkylec"
                target="_"
              >
                <i class="fab fa-instagram" />
              </a>
            </div>
          </ColumnContainer>
        </RowContainer>
      </MainContainer>
    )
  }
}

export default Basic
