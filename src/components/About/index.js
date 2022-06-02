import { useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import React from 'react';

const About = () => {
  const [letterClass] = useState('text-animate')


  return (
    <>
      <div className="container about-page">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['About', ' ', 'me']}
              idx={15}
            />
          </h1> 
          <div className="text-zone">
          <p>
            I am an ambitious fullstack developer looking for a role in
            a company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, love learning, and I am always working to improve myself and my programming capabilities one project at a time.
          </p>
          <p>
            My greatest strengths are my ability to learn at a fast pace, my drive for success, and my ability to adapt and overcome.  
          </p>
          <p> When I'm not working I love to play video games and sports, DJ, and spend time with my family and friends.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="green" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
