import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import  Logo  from '../components/Logo'; 


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa provident omnis quia laborum, distinctio eius! Ea et perferendis, molestias ipsum error eum consectetur harum, exercitationem repellat cum possimus aliquid.
                    </p>
                    <Link to='/register' className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn'>
                        Login / Demo User
                    </Link>
                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </div>
                    
        </Wrapper>
    );
};
export default Landing;