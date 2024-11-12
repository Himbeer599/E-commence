import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './Login.css';  // 引入外部CSS文件

    const images = require.context('./images', false, /\.(png|jpe?g|svg)$/).keys().map((image) => {
        return require(`./images/${image.slice(2)}`);
    });

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
//   const [backgroundImage, setBackgroundImage] = useState('');
  
    useEffect(() => {
      let index = 0; // 图片索引
      document.body.style.backgroundImage = `url(${images[index]})`

      const interval = setInterval(() => {
        index = (index + 1) % images.length; // 循环播放图片
      //   setBackgroundImage(images[index]); // 更新背景图片
        document.body.style.backgroundImage = `url(${images[index]})`;
      }, 100000); 
      return () => clearInterval(interval); // 清理定时器
    }, [images]);

    const navigate = useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      if (!username || !email || !password) {
        setError('Bitte füllen Sie alle Felder aus.');
        return;
      }
      setError('');
      try {
        const response = await fetch('http://192.168.2.31:5000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        console.log('Response:', response);
        console.log('Data:', data);

        if (response.ok) {
          // 保存用户信息并重定向到主页
          console.log('Login successful:', data);
          // 这里可以使用 React Router 进行页面导航，例如:
          navigate('/homepage');
        } 
          setError(data.error || 'Login failed. Please try again.');
          // navigate('/registerpage');
      } catch (err) {
        console.error('Error during login:', err);
        setError('Login failed. Please try again.');
      }
    };

    return (
      <div className="loginbody">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <div className="form-container"> 
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Geben Sie einen Benutzername ein"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Geben Sie Ihre E-Mail ein"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Geben Sie Ihr Passwort ein"
                />
                <div className="forgot-password">
                  <a href="/forgot-password">Forgot your password?</a>
                </div>
              </div>
              {/* <div className="checkbox-group"> */}
                <span className="checkbox-group">
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  checked={keepLoggedIn}
                  onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                />
                </span>
                <div className='keepLoggin'>
                <label htmlFor="keepLoggedIn">Keep me logged in</label>
                </div>
            </div>
            <button type="submit" className="login-button">Log in</button>
            {/* <Link to="./Registerpage">
            <button type="button" className="register-button">Register</button>
            </Link> */}
          </form>
          <button onClick={()=>navigate('/homepage')}>Go to Homepage</button>
          <button onClick={()=>navigate('/registerpage')}>Register</button>
        </div>
      </div>
    );
};

export default Login;
