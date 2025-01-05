import React, { useState, FormEvent, ChangeEvent } from 'react';
import './Registerpage.css';

interface RegisterResponse {
  message?: string;
  error?: string;
}

const Registerpage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
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
      const data: RegisterResponse = await response.json();

      if (response.ok) {
        setSuccessMessage('Registration successful!');
        // Clear the input fields
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setError(data.error || 'Registration failed.');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setError('Registration failed. Please try again.');
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: (value: string) => void
  ) => {
    setter(e.target.value);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => handleInputChange(e, setUsername)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => handleInputChange(e, setPassword)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registerpage; 