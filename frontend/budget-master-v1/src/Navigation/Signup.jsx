import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/Project/api/users/', { name, username, password, address, email });
          if (response.data.status === 'success') {
            setName('');
            setUsername('');
            setPassword('');
            setAddress('');
            setEmail('');
            history.push('/signin');
        } else {
            if (response.data.errors.name) {
                setNameError(response.data.errors.name);
            } else {
                setNameError('');
            }
            if (response.data.errors.username) {
                setUsernameError(response.data.errors.username);
            } else {
                setUsernameError('');
            }
            if (response.data.errors.password) {
                setPasswordError(response.data.errors.password);
            } else {
                setPasswordError('');
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

      const validateName = (name) => {
        const regex = /^[a-zA-Z]{2,15}$/;
        if (!regex.test(name)) {
          setNameError('Name must be 2-15 alphabets only');
        } else {
          setNameError('');
        }
      }
    
      const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9]{6,15}$/;
        if (!regex.test(username)) {
          setUsernameError('Username must be 6-15 alphanumeric characters only');
        } else {
          setUsernameError('');
        }
      }
    
      const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!regex.test(password)) {
          setPasswordError('Password must be 8-20 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character');
        } else {
          setPasswordError('');
        }
      }

    return (
        <form onSubmit={handleSubmit} className="form" style={{ backgroundColor: '#e0fff0' }}>
            <div className="form-group">
                <label className="label" htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => { setName(e.target.value); validateName(e.target.value); }} className="input" />
                {nameError && <p className="error">{nameError}</p>}
            </div>
                <div className="form-group">
                <label className="label" htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={e => { setUsername(e.target.value); validateUsername(e.target.value); }} autoComplete="username" className="input" />
                {usernameError && <p className="error">{usernameError}</p>}
            </div>
            <div className="form-group">
                <label className="label" htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={e => { setPassword(e.target.value); validatePassword(e.target.value); }} autoComplete="current-password" className="input" />
                {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div className="form-group">
                <label className="label" htmlFor="address">Address:</label>
                <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} className="input" />
            </div>
            <div className="form-group">
                <label className="label" htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
            </div>
                <button type="submit" className="button">Save</button>
        </form>
    );
}

export default Signup;