import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed up successfully:', userCredential);
        navigate('/login');
      })
      .catch((error) => {
        setError(error.message); // Display error message
        console.error('Error signing up:', error.message);
      });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        backgroundColor: '#f0f0f0' 
      }}
    >
      <Paper 
        elevation={6} 
        sx={{
          padding: '40px',
          maxWidth: '400px',
          borderRadius: '15px',
          backgroundColor: '#fff',
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#333' }}
        >
          Signup
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '20px', padding: '10px', borderRadius: '8px' }}
          >
            Sign Up
          </Button>
        </form>

        {error && (
          <Typography 
            color="error" 
            variant="body2" 
            align="center" 
            sx={{ marginTop: '20px' }}
          >
            {error}
          </Typography>
        )}

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Already have an account?{' '}
            <Button
              onClick={() => navigate('/login')}
              sx={{ color: '#1976d2', textDecoration: 'underline' }}
            >
              Go to Login
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
