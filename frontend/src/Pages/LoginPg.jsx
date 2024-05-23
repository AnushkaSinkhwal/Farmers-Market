import React, { useState } from 'react';
import '../styles/LoginPg.css';
import BadgeIcon from '@mui/icons-material/Badge';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';

function LoginPg() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Fields cannot be empty');
      return;
    }

    const payload = { username, password };
    console.log('Payload:', payload); // Add logging here

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Login failed');
      }

      const data = await response.json();
      console.log(data);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-c">
      <div className="form-container-c">
        <div className="header-c">
          <div className="text-c">Login</div>
          <div className="underline-c"></div>
        </div>
        <form className="CustomerLogin-form-c" onSubmit={handleSubmit}>
          <div className="inputs-c">
            <div className="input-c">
              <span className="BadgeIcon-c">
                <BadgeIcon />
              </span>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="input-c">
              <span className="LockIcon-c">
                <LockIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="submit-container-c">
            <div className="submit-c">
              <Link to="/RegisterPg">
                <button type="button" name="Signup">
                  Signup
                </button>
              </Link>
            </div>
            <div className="submit-c">
              <button type="submit" name="Login">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPg;
