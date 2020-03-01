import React,{useState} from 'react';
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUp = () => {
    const [signUp, setSignUp] = useState(initialState)
    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password, confirmPassword, displayName } = signUp;

        if (password !== confirmPassword) {
            alert("Password Doesnt match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            
            setSignUp(initialState)
        } catch (e) {
            console.error(e)
        
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setSignUp({ ...signUp, [name]: value});
    }
    return (
        <div className="sign-up">
            <h2 className="title">I dont have an account</h2>
            <span>SIGN UP WITH YOUR EMAIL AND PASSWORD</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={signUp.email} onChange={handleChange} label="Email" required/>
                <FormInput type="text" name="displayName" value={signUp.displayName} onChange={handleChange} label="Display Name" required/>
                <FormInput type="password" name="password" value={signUp.password} onChange={handleChange} label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={signUp.confirmPassword} onChange={handleChange} label="Password Confirmation" required/>
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
            
        </div>
    );
}

export default SignUp;
