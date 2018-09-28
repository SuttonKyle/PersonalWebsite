import React, { Component } from 'react'
import '../App.css'
import whatsfordinner from '../assets/whatsfordinner.png'
import thissite from '../assets/thissite.png'
import rtitanic from '../assets/machinelearningR.png'
import NewModal from '../components/NewModal.js'

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1> Portfolio </h1>
        <p className="body">
          I've been working at DEV, which unfortunately means that much of my
          work isn't publicly available due to non-disclosure agreements. Here's
          what I can show you!
        </p>
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
          desc="My portfolio (the site you're using right now) is my first project with React.  It's a
            static website that shows various information about me and my projects."
          img={thissite}
          langs={['react', 'html', 'css']}
          link="https://github.com/SuttonKyle/PersonalWebsite"
        />
      </div>
    )
  }
}

export default Home
