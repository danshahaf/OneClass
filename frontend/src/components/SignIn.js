import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // To store the error message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Call the backend to check the email
        const response = await fetch('http://localhost:1707/api/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        }); 
        console.log(" >>  RESPONSE ", response);
        const data = await response.json();
        console.log(" >> DATA", data);
        if (data.exists) {
            navigate('/main');
        } else {
            setErrorMessage(data.message);
        }
    }

    return (
        <div className="signin-container">
            <div className="form-container">
                <h1>Evolutionary Education</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input 
                            className="signin-email-input"
                            type="email" 
                            value={email} 
                            placeholder='Email'
                            onChange={e => setEmail(e.target.value)} 
                            required
                        />
                        {errorMessage && <span className="error-message">{errorMessage}</span>}
                    </label>
                    <button className="signin-submit" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
    
};

export default SignIn;
