import React, { Component } from 'react'
import '../App.css'
import { ColumnContainer } from './styles'
import whatsfordinner from '../assets/whatsfordinner.png'
import thissite from '../assets/thissite.png'
import rtitanic from '../assets/machinelearningR.png'
import thekey from '../assets/thekey.png'
import NewModal from '../components/NewModal.js'
import fnvo from '../assets/farmnivorous.png'
import airr from '../assets/airr.png'
import blogwise from '../assets/blogwise.png'
import hopp from '../assets/hopp.png'
import aalum from '../assets/aalum.png'
import mytutor from '../assets/mytutor.png'

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1> Portfolio </h1>
        <div className="tiles">
          <NewModal
            Modalid="Airr"
            title="Airr"
            tiledesc="A new podcast listening experience"
            desc="I've been working on Airr for the last few months.  Airr is a podcast listener app
            that allows the listener to save snippets of a podcast episode, or AirrQuotes, and share them
            within the app and around the internet.  It also has a desktop site to display AirrQuotes to
            people who don't have the app."
            img={airr}
            langs={['react', 'react native', 'node.js']}
          />
          <NewModal
            Modalid="blogwise"
            title="blogwise"
            tiledesc="Content marketing made easy"
            desc="Blogwise is a SaaS product that makes it easy for startups, companies, and individuals 
            to build high-performance, aesthetically-pleasing blogs."
            img={blogwise}
            langs={['react', 'node.js']}
          />
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
            Modalid="aalum"
            title="AAlum"
            tiledesc="A dating app for college campuses."
            desc="AAlum, which was unfortunately never released, was a dating app centered on
            college campuses.  Although the product never reached the market, it became one
            of DEV's best resources for documentation and sample code, since it was one of the
            first projects to implement a lot of advanced functionality."
            img={aalum}
            langs={['react native', 'graphql', 'node.js']}
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
            Modalid="hopp"
            title="HOPP"
            tiledesc="On-campus snack delivery for students"
            desc="I worked on several iterations and design overhauls of HOPP, a suite of apps for a
            snack delivery service that caters to Harvard students and plans to expand to other campuses."
            img={hopp}
            langs={['react native', 'node.js']}
          />
          <NewModal
            Modalid="mytutor"
            title="MyTutor"
            tiledesc="Coordinating HSA's tutoring program"
            desc="MyTutor is a product built for HSA Tutoring that helps organize essentially all administrative
            tasks involved in running a tutoring service.  Tutors can request students, track hours, and submit
            receipts for reimbursement.  Administrators can keep track of all their tutors and customers, assign
            students to tutors, and view payroll information."
            img={mytutor}
            langs={['pug', 'javascript', 'node.js']}
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
