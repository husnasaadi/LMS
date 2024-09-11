import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import { db } from '../../Firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const StudentRegistration = () => {
  const [student, setStudent] = useState({ name: '', email: '', age: '', phone: '', studentClass: '', field: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'students'), student);
      alert('Student registered successfully!');
      setError('');
      setStudent({ name: '', email: '', age: '', phone: '', studentClass: '', field: '' });
    } catch (error) {
      setError('Error adding student: ' + error.message);
      console.error('Error adding student: ', error);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        backgroundColor: '#f4f6f8'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}
        >
          Student Registration
        </Typography>

        {error && <Typography sx={{ color: 'red', marginBottom: '10px' }}>{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={student.name}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            type="email"
            value={student.email}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            margin="normal"
            name="age"
            type="number"
            value={student.age}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            name="phone"
            type="tel"
            value={student.phone}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label="Class"
            variant="outlined"
            margin="normal"
            name="studentClass"
            value={student.studentClass}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label="Field"
            variant="outlined"
            margin="normal"
            name="field"
            value={student.field}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ 
              marginTop: '20px', 
              padding: '10px', 
              borderRadius: '8px', 
              backgroundColor: "#8E1DFF", 
              color: "white",
              '&:hover': {
                backgroundColor: "#6d1f8f"
              }
            }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default StudentRegistration;
