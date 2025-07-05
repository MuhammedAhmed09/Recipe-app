import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("A password reset email been sent.");
        } catch (err) {
            setError(err.message)
        }
    }

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleReset}>
            <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-2 mb-4 border rounded'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button
                type='submit'
                className='w-full bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700 transition'
            >
                Send Reset Link
            </button>
        </form>
        <p className='mt-4 text-center'>
            <Link to='/login' className='text-blue-600 underline' >Back to Login</Link>
        </p>
    </div>
  )
}

export default ForgotPassword