import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext,Form,useNavigation } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";  
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = {msg: ''}
    try {
        await customFetch.post('/jobs/create-job', data);
        toast.success('login successful');
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
      }
}  

const AddJob = () => {
    const {user}= useOutletContext();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className="form-title">Add job</h4>
                <div className="form-center">
                    <FormRow type='text' name='position'/>
                    <FormRow type='text' name='company'/>
                    <FormRow type='text' name='jobLocation' labelText={'job location'} defaultValue={user.location}/>
                </div>
            </Form>
        </Wrapper>
    );
};
export default AddJob;