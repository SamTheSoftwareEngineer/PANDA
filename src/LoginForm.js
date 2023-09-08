import React from 'react'

function loginForm() {
    return (
        <form>
            <label> 
                Username: <text name='username'></text>
            </label>
            <br />
            <label> 
                Password: <text name='password'></text>
            </label>
            <br />
            <button type='submit'>Login</button>
        </form>
    );
}

export default loginForm;