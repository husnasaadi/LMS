import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import { db } from '../../Firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const TeacherRegistration = () => {
  const [teacher, setTeacher] = useState({ name: '', email: '', age: '', phone: '', subject: '', department: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'teachers'), teacher);
      alert('Teacher registered successfully!');
      setError('');
      setTeacher({ name: '', email: '', age: '', phone: '', subject: '', department: '' });
    } catch (error) {
      setError('Error adding teacher: ' + error.message);
      console.error('Error adding teacher: ', error);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        backgroundColor: '#f5f5f5', // Light background for contrast
      }}
    >
      <Paper
        elevation={3}
        sx={{ 
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#333' }}
        >
          Teacher Registration
        </Typography>

        {error && <Typography sx={{ color: 'red', textAlign: 'center' }}>{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={teacher.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            type="email"
            value={teacher.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            margin="normal"
            name="age"
            type="number"
            value={teacher.age}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            name="phone"
            type="tel"
            value={teacher.phone}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="normal"
            name="subject"
            value={teacher.subject}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Department"
            variant="outlined"
            margin="normal"
            name="department"
            value={teacher.department}
            onChange={handleInputChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: '20px', padding: '10px', borderRadius: '8px', backgroundColor: '#8E1DFF', color: 'white' }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default TeacherRegistration;
