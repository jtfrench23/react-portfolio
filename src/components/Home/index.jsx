import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect} from 'react';
import Loader from 'react-loaders';
import React from 'react';
const Home = () => {
    useEffect(() => {
        console.log('works')
    })
    
    return(
        <>
            <div className='Container home-page'>
                <div className='text-zone'>
                    <h1>
                        Hi, 
                        <br />
                        I'm Jordan French
                        <br />
                        Web Developer
                    </h1>
                    <div className='lowerBox'>
                    <h2>
                        Fullstack Developer / Python Ninja / Lifelong Learner
                    </h2>
                    <Link to="/react-portfolio/contact" className="flat-button">CONTACT ME</Link>
                    </div>
                </div>
                
            </div>
            <Loader type="pacman" />
            </>
    )
}
export default Home;