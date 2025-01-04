import React, { useState } from 'react';
import './Registerpage.css';

function Registerpage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();


    if (!username || !email || !password) {
      setError('Bitte füllen Sie alle Felder aus.');
      return;
    }
    setError('');
    try {
      const bd = JSON.stringify({ username, email, password });
      console.log(bd);
      const response = await fetch('http://192.168.2.52:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bd,
      });
      console.log(response);
      const data = await response.json();
      // setMessage(data.message);
      if (response.ok) {
        setSuccessMessage('Registration successful!'); // "Registration successful!"
        // Clear the input fields
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
          setError(data.error || 'Registration failed.'); // "Registration failed."
      } 
    } catch (err) {
        console.error('Error during registration:', err);
        setError('Registration failed. Please try again.'); // "Registration failed. Please try again."
      }
  };
    
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
            <label htmlFor="username">Username:</label> {/* "Username:" */}
            <input
          type="text" 
          id="username"
          placeholder="Benutzername" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          // required
            />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label> {/* "Email:" */}
          <input 
          type="email" 
          id="email"
          placeholder="E-Mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort:</label> {/* "Password:" */}
          <input 
          type="password" 
          id="password"
          placeholder="Passwort" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          // required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registerpage;
