import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Paper 
      elevation={4} 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        background: 'linear-gradient(to right, #00796b, #004d40)', // Updated gradient background
        color: '#fff',
        padding: '20px',
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ fontWeight: 'bold', letterSpacing: '2px' }}
      >
        Welcome to Your Portal
      </Typography>
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ marginBottom: '30px', maxWidth: '500px' }}
      >
        Access personalized services by registering as a teacher or student. Enjoy a seamless experience tailored just for you.
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff5722', // Updated button color
            color: '#fff',
            marginBottom: '15px',
            padding: '10px 25px',
            fontSize: '16px',
            width: '80%', 
            maxWidth: '200px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => navigate('/teachers/registration')} // Path for teacher registration
        >
          Register as Teacher
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4caf50', // Updated button color
            color: '#fff',
            padding: '10px 25px',
            fontSize: '16px',
            width: '80%', 
            maxWidth: '200px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => navigate('/students/registration')} // Path for student registration
        >
          Register as Student
        </Button>
      </Box>
    </Paper>
  );
};

export default Dashboard;
