import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect} from 'react';
import Loader from 'react-loaders';
import React from 'react';
const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArrayFirst = ['','Jordan']
    const nameArray = [<img src={LogoTitle} alt="devleper" />,'rench']
    const jobArray = ['w','e','b',' ',' ','developer','.']
    useEffect(() => {
        console.log('works')
    })
    
    return(
        <>
            <div className='Container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span> 
                        <br /> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <AnimatedLetters letterClass={letterClass} strArray={nameArrayFirst} idx={15}/>
                        {/* <img src={LogoTitle} alt="devleper" /> */}
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={22}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={32}/>
                    </h1>
                    <div className='lowerBox'>
                    <h2>
                        Fullstack Developer / Python Ninja / Lifelong Learner
                    </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    </div>
                </div>
                
            </div>
            <Loader type="pacman" />
            </>
    )
}
export default Home;