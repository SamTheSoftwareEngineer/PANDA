import React from 'react'

const RegisterForm = () => {
    return (
        <div className='RegisterForm-container'>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input name='firstName'/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input name='lastName'/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input name='email'/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input name='password'/>
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input name='confirmPassword'/>
            </div>
            <button>Register</button>
        </div>
    )

}

export default RegisterForm;
