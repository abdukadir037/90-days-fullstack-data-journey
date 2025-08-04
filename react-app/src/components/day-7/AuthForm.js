import { useState } from 'react';
import axios from '../../api/axios';

export function AuthForm({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); // or 'register'

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const url = mode === 'login' ? '/login' : '/register';
    const res = await axios.post(url, { email, password });
    const { token } = res.data;
    onAuth(token);
  } catch (err) {
    console.error(err);
    const msg =
      err.response?.data?.error ||       // when backend sends { error: '...' }
      err.response?.data?.message ||     // when backend sends { message: '...' }
      err.message ||                     // fallback to axios error message
      'Unknown error';
    alert('Auth failed: ' + msg);
  }
};


  return (
    <div style={{ padding: '2rem' }}>
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        Switch to {mode === 'login' ? 'Register' : 'Login'}
      </button>
    </div>
  );
}
