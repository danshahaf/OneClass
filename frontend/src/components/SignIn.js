import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Update the navigation:
        navigate('/main');
    }

    return (
        <div className="signin-container">
            <h1>Evolutionary Education</h1> {/* Added title */}
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="email" 
                        value={email} 
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)} 
                        required
                    />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
