import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Ripple } from 'primereact/ripple';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users data on component mount
    fetch('/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
      navigate('/home');
    } else {
      setError('Invalid email or password.');
    }
    
}
  return (
    <>
      <section>
        <div className="img1">
          <img src="images/login.jpg" alt="Login" />
        </div>
        <div className="content">
          <div className="form1">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              {error && <p className="error">{error}</p>}
              <div className="input1">
                <span>E-Mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input1">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <div className="input1 p-ripple">
                <input type="submit" value="Login" />
                <Ripple/>
              </div>
              <div className="input1">
                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
