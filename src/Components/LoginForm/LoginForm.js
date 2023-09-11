import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../FormInput/FormInput'
import './LoginForm.scss'

// Set initial state for username and password to empty string
const INITIAL_STATE = {
    username: '',
    password: ''
}

// Use state to store username and password
function LoginForm() {
    const [formFields, setFormFields] = useState(INITIAL_STATE)
    const {username, password} = formFields
    // Use useNavigate to redirect different pages 
    const navigate = useNavigate()

    const resetForm = () => {
        setFormFields(INITIAL_STATE)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
        alert(`The username you entered was: ${username}`)
        resetForm()
        navigate('/')
        } catch(e){
            console.log(e)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value})
    }


    return (
        <div className='Login-container'>
            <h2>Have an account - Sign in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormInput
                        label='Username'
                        inputOptions = {{
                            type: 'text',
                            name: 'username',
                            value: username,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>
                <div>
                <FormInput
                        label='Password'
                        inputOptions = {{
                            type: 'text',
                            name: 'password',
                            value: password,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
