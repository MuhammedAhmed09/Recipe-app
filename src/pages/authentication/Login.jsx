import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/')
        } catch (err)  {
            if (err.message === 'auth/email-already-in-use'){
                return(setError('This e-mail already in use'))                
            }else if(err.message === 'auth/invalid-credential') {
                return(setError('Check your e-mail or password'))
            } else {
                setError(err.message)
            }
        }
    }

  return (
    <div className='max-w-md mx-auto rounded border mt-20 p-4 shadow'>
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}     
        <form onSubmit={handleLogin}>
            <input 
                type="email" 
                placeholder='Email'
                className='w-full rounded border mb-4 p-2'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input 
                type="password" 
                placeholder='Password'
                className='w-full rounded border mb-4 p-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type='submit' className="w-full cursor-pointer bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
                Login
            </button>
        </form>
        <p className='mt-4 text-center'>
            Don't have an account?{' '}
            <Link to="/signup" className='text-blue-600 underline'>Sign Up</Link>
        </p>
        <p className='mt-2 text-center'>
            Don't have an account?{' '}
            <Link to="/forgot-password" className='text-gray-600 text-sm underline'>Forgot Password?</Link>
        </p>
    </div>
  )
}

export default Login