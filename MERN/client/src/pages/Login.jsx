import { Form, Link,redirect, useNavigation, useActionData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import  Logo  from '../components/Logo';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import  customFetch  from '../utils/customFetch';

export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = {msg: ''}
    if(data.password.length < 6) {
        errors.msg = 'Password should be at least 6 characters';
        return errors
    }
    try {
        await customFetch.post('/auth/login', data);
        toast.success('login successful');
        return redirect('/dashboard');
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
      }
}  
const Login = () => {
      const errors = useActionData();
      const navigation = useNavigation();
      const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <Logo />
                <h4>Login</h4>
                {errors?.msg && <p style = {{color: 'red'}}>{errors.msg}</p>}
                
                <FormRow type="text" name="email" defaultValue= 'johndoe@example.com' />
                <FormRow type="password" name="password" defaultValue= '' />
                <button type='submit' className='btn btn-block' disabled= {isSubmitting}>
                {isSubmitting ? 'submitting' : 'submit'}
                </button>
                <button type="button" className="btn btn-block">
                    explore the app
                </button>
                <p>
                    Not a member yet?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};

export default Login;