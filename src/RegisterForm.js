import React from 'react'

const registerForm = () => {
    return (
        <div>
            <label>
                Username: <text name='username'></text>
            </label>
            <br />
            <label>
                Password: <text name='password'></text>
            </label>
            <br />
            <button>
                Register 
            </button>
        </div>
    )

}

export default registerForm;