import React, { Component } from 'react'
import '../App.css'

class Basic extends Component {
  render() {
    return (
      <div className="main">
        <h1> Hi, I'm Kyle!</h1>
        <p className="body">
          You may know me from the picture above! I'm a 19-year-old aspiring
          computer programmer from Hingham, Massachusetts. I'm studying at
          Harvard currently. Besides programming, I love to run, ski, hike,
          climb, and play guitar. I write for Satire V, Harvard's satirical news
          publication, and am the newly elected "Gear Tsar" for the Harvard
          Mounaineering Club.
        </p>
        <h3> Praise for Kyle Sutton: </h3>
        <p className="body">
          "Also you are so goddamn smart 10/10 go Kyle would recommend" --
          Olivia Graham
        </p>
        <p className="body"> "Could be granola gay" -- Also Olivia Graham </p>
        <p className="body">
          "Looks a little unrefined but has a heart of gold" -- Lauren Toman{' '}
        </p>
        <p className="body">
          "If I was lost in the woods, he would either save me or murder me" --
          Randle Steinbeck
        </p>
        <p className="body">
          "Doesn't look as much like Post Malone as I expected" -- Caroline
          Graham
        </p>
        <h3> Check out some other stuff about me: </h3>
        <p className="icons-body">
          <a
            className="link"
            href="https://www.linkedin.com/in/kyle-sutton-0a7008158/"
            target="_"
          >
            <i class="fab fa-linkedin" />{' '}
          </a>
          <a className="link" href="https://github.com/SuttonKyle" target="_">
            <i class="fab fa-github-square" />{' '}
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
        </p>
      </div>
    )
  }
}

export default Basic
