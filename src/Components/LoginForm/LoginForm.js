import React from 'react'

function LoginForm() {
    return (
        <div className='LoginForm-container'>
        <div>
            <label htmlFor='email'>Email:</label>
            <input name='email'/>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input name='password'/>
        </div>
        <button>Register</button>
    </div>
    );
}

export default LoginForm;
