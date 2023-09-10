import React from 'react'
import {useState} from 'react'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The username you entered was: ${username}`)
    }


    return (
        <form onsubmit={handleSubmit}>
            <label> 
                Username: <input type='text' value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label> 
                Password: <input type='text' value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type='submit'>Login</button>
        </form>
    );
}


export default LoginForm;