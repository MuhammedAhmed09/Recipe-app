import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        }catch (err) {
            if (err.message === 'auth/email-already-in-use'){
                setError('This e-mail already in use');
            }else if(err.message === 'auth/invalid-credential') {
                setError('Check your e-mail or password')
            } else {
                setError(err.message)
            }
        }
    }

  return (
    <div className='max-w-md mx-auto rounded border mt-20 p-4 shadow'>
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}     
        <form onSubmit={handleSignUp}>
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
            <button type='submit' className='w-full cursor-pointer bg-green-600 text-white rounded hover:bg-green-700 transition'>
                Sign Up
            </button>
        </form>
        <p className='mt-4 text-center'>
            Already have an account? <a href="/login" className='text-blue-600 underline'>Login</a>
        </p>
    </div>
  )
}

export default SignUp