import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to Your Account</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p className="redirect">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;