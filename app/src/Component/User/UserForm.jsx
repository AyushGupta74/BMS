import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';

function UserForm() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

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
          } else {
            throw new Error('Failed to submit form');
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label" htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="input" />
          </div>
          <div className="form-group">
        <label className="label" htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" className="input" />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" className="input" />
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

export default UserForm;