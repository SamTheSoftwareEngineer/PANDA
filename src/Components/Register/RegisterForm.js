import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../FormInput/FormInput'
import './RegisterForm.scss'

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
}

const RegisterForm = () => {
    const [formFields, setFormFields] = useState(INITIAL_STATE)
    const {firstName, lastName, email, username, password, confirmPassword} = formFields
    const navigate = useNavigate()

    const resetForm = () => {
        setFormFields(INITIAL_STATE)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            alert(`The username you entered was: ${username}`)
            resetForm()
            navigate('/')
        } catch(e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='RegisterForm-container'>
            <h2>Please create an account!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <FormInput
                        label='First Name'
                        inputOptions = {{
                            type: 'text',
                            name: 'firstName',
                            value: firstName,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>
                <div>
                <FormInput
                        label='Last Name'
                        inputOptions = {{
                            type: 'text',
                            name: 'firstName',
                            value: firstName,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>
                <div>
                <FormInput
                        label='Email'
                        inputOptions = {{
                            type: 'text',
                            name: 'firstName',
                            value: firstName,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>
                <div>
                <FormInput
                        label='Username'
                        inputOptions = {{
                            type: 'text',
                            name: 'firstName',
                            value: firstName,
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
                            name: 'firstName',
                            value: firstName,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>
                <div>
                <FormInput
                        label='Confirm Password'
                        inputOptions = {{
                            type: 'text',
                            name: 'firstName',
                            value: firstName,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                </div>

                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
