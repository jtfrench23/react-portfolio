import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import {useState} from 'react';


const Projects = () => {
    const [letterClass] = useState('text-animate')
    return(
    <>
    <h1>
    <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
            />
    </h1>
    <p className='subtitle'>
    <AnimatedLetters
            letterClass={letterClass}
            strArray={['click','', 'titles','', 'to','', 'see','', 'live','', 'app','', 'or','', 'github','', 'repository']}
            idx={20}
            />
    </p>
    <div className='projectsContainer'>
        <div className='projectBox'>
            <h2><a href='https://github.com/Schneider-Alex/OnTrack'>OnTrack</a></h2>
            <p>This app is designed for track coaches to keep track of athletes' times in track events as well as post messages/announcements for their team to see.  Athletes can view all of their previous times as well as their teammates' top times and their team's records.  This was a group project where my main role was backend development.  I created the database, constructed many of the sql queries, tested the application for bugs, and made sure data was being passed and displayed properly between the application and the database.</p>
        </div>
        <div className='projectBox'>
            <h2><a href='https://github.com/jtfrench23/nats_store'>French's Boutique</a></h2>
            <p>This is an ecommerce platform that I created for my wife.  I used the Python/Django stack to build this application.  I utilized bootstrap as well as custom css to make the app responsive and visually appealing.  I was the sole developer for this project.</p>
        </div>
        <div className='projectBox'>
            <h2><a href='http://18.234.207.197'>Sasquatch Sitings</a></h2>
            <p>This app was created for my exam on Python/Flask for Coding Dojo.  The entire app had to be developed and deployed within 5 hours in order to earn a “Black Belt” which I completed with a perfect score. I used AWS to deploy this application.</p>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
)}
export default Projects;