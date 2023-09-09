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
        const response = await fetch('http://localhost:1707/api/signin/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        }); 
        const data = await response.json();
        if (data) {
            if (data['account-type'] == 'student') {
                console.log(" >>  STUDENT LOG IN");
                navigate('/student');
            } else if (data['account-type'] == 'staff') {
                console.log(" >>  FACULTY LOG IN");
                navigate('/faculty');
            } else if(data['account-type'] == 'admin') {
                console.log(" >>  ADMIN LOG IN");
                navigate('/admin');
            }   
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
