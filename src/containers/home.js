import React, { Component } from 'react'
import '../App.css'
import { ColumnContainer } from './styles'
import whatsfordinner from '../assets/whatsfordinner.png'
import thissite from '../assets/thissite.png'
import rtitanic from '../assets/machinelearningR.png'
import thekey from '../assets/thekey.jpeg'
import NewModal from '../components/NewModal.js'
import fnvo from '../assets/farmnivorous.png'

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1> Portfolio </h1>
        <ColumnContainer noLeftMargin>
          <div className="body">
            I've been working at DEV, which unfortunately means that much of my
            work isn't publicly available due to non-disclosure agreements.
            Here's what I can show you!
          </div>
        </ColumnContainer>
        <div className="tiles">
          <NewModal
            Modalid="Farmnivorous"
            title="Farmnivorous"
            tiledesc="A two-sided farm-to-table marketplace."
            desc="Farmnivorous is a two-sided marketplace hoping to help consumers and small
            farms connect with one another. I worked on both frontend and backend for this app."
            img={fnvo}
            langs={['react', 'node.js', 'graphql']}
          />
          <NewModal
            Modalid="TheKey"
            title="The Key"
            tiledesc="A networking-focused mobile app and accompanying websites."
            desc="The Key is a selective networking app built for ease of use and functionality.  
            It officially launched at Harvard in September 2018.  I led frontend development on the web pages
            used by companies and administrators to advertise and recruit from the app, as well as
            to approve applicants."
            img={thekey}
            langs={['react', 'react native', 'graphql', 'node.js']}
          />
          <NewModal
            Modalid="Modal0"
            title="R Titanic"
            tiledesc="An R project focused on using machine learning and statistical analysis on the Titanic."
            desc="My final project for Math 23c (Mathematics for Computation, Statistics, and Data Science)
            was an R project that explored various machine learning techniques along with traditional statistical 
            analysis to try and predict outcomes for passengers of the Titanic."
            img={rtitanic}
            langs={['R']}
            link="https://github.com/SuttonKyle/MachineLearningR"
          />
          <NewModal
            Modalid="Modal1"
            title="What's For Dinner?"
            tiledesc="A simple webapp for finding recipes based on given ingredients."
            desc="What's For Dinner (or WhatsForDinner) is a simple webapp I built for my CS50 
            final project.  It uses a database of about 1000 recipes scraped from BBC food
            to return a list of recipes that can be made based on the ingredients the user
            inputs.  The recipes are listed in order of how many of the required ingredients
            the user has, and are available on the website itself."
            img={whatsfordinner}
            langs={['javascript', 'python', 'html', 'css', 'sqlite']}
            link="https://github.com/SuttonKyle/recipes"
          />

          <NewModal
            Modalid="Modal2"
            title="Portfolio"
            tiledesc="A portfolio of my web projects."
            desc="My portfolio (the site you're using right now) was my first project with React.  It's a
            static website that shows various information about me and my projects.  The code is (currently)
            a bit of a Frankenstein's monster of inexperienced and hacky React from last April and newer
            techniques I've picked up from DEV, since I've been haphazardly maintaining the site on and off
            for the last 6 months."
            img={thissite}
            langs={['react', 'html', 'css']}
            link="https://github.com/SuttonKyle/PersonalWebsite"
          />
        </div>
      </div>
    )
  }
}

export default Home
