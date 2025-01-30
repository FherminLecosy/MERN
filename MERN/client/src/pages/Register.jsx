import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import  Logo  from '../components/Logo';
import FormRow from '../components/FormRow';    


const Register = () => {
    return (
        <Wrapper>
            <form className='form'>
                <Logo />
                <h4>Register</h4>
                <FormRow type="text" name="name" defaultValue= 'John' labelText="name" />
                <FormRow type="text" name="lastName" defaultValue= 'Doe' labelText="last name" />
                <FormRow type="text" name="location" defaultValue= 'johndoe@example.com' />
                <FormRow type="password" name="password" defaultValue= '' />

                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    Already have an account?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>

            </form>
        </Wrapper>

    );
};

export default Register;