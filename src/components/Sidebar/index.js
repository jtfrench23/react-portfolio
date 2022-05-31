import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faToolbox, faUser} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="French" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/react-portfolio/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/react-portfolio/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/react-portfolio/projects">
                <FontAwesomeIcon icon={faToolbox} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/react-portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jordan-t-french/">
                    <FontAwesomeIcon icon={faLinkedin} color="red" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/jtfrench23">
                    <FontAwesomeIcon icon={faGithub} color="red" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar;