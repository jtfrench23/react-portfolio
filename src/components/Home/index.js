import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='Container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm Jordan 
                <img src={LogoTitle} alt="devleper" />
                rench
                <br />
                web developer
                </h1>
                <h2>
                    Fullstack Developer / Python Ninja / Lifelong Learner
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home;