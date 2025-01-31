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
            <div>
                <h3>something went wrong</h3>
            </div>
            <div>
                <span>
                    <Link to='/' className='btn'>back home</Link>
                </span>
            </div>
        </Wrapper>
    )};

export default Error;