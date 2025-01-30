import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from '../assets/images/not-found.svg';
const Error = () => {
    const error = useRouteError();

    if(error.status === 404){
        return <Wrapper>
            <div>
                <img src={img} alt='not found' />
                <h3>ohh! page not found</h3>
                <p>We cant seem to find the page youre looking for</p>
                <Link to='/' className='btn'>back home</Link>
            </div>
        </Wrapper>
    }

    return (
        <Wrapper>
            <img src={img} alt='not found' />
            <Link to='/' className='btn'>back home</Link>        
        </Wrapper>
    )};

export default Error;