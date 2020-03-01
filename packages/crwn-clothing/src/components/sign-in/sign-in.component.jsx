import React,{useState} from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = (e) => { 
        e.preventDefault()
        
        setCredentials({ email: '', password: '' });
    };

    const handleChange = (e) => {
        const { value, name } = e.target;

        setCredentials({ ...credentials, [name]: value});
    }

    return (
        <div className="sign-in">
            <h2>i already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={credentials.email} handleChange={handleChange} label="email" required/>
                <FormInput type="password" name="password" value={credentials.password} handleChange={handleChange} label="password" required/>
                <div className="button">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} google>Sign In WITH Google</CustomButton>
                </div>
            </form>
            
            
        </div>
    )
}

export default SignIn