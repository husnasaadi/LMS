import React, { useState } from 'react';
import { Paper, TextField, Button, FormControlLabel, Radio, RadioGroup, Typography, Box } from '@mui/material';
import { db } from '../../Firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const SubjectAdd = () => {
  const [subject, setSubject] = useState({ name: '', class: '', field: 'Arts' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubject({ ...subject, [name]: value });
  };

  const handleRadioChange = (e) => {
    setSubject({ ...subject, field: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'subjects'), subject);
      alert('Subject added successfully!');
      setError('');
      setSubject({ name: '', class: '', field: 'Arts' });
    } catch (error) {
      setError('Error adding subject: ' + error.message);
      console.error('Error adding subject: ', error);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '90vh',
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
          Add Subject
        </Typography>

        {error && <Typography sx={{ color: 'red', marginBottom: '15px' }}>{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Subject Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={subject.name}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label="Class"
            variant="outlined"
            margin="normal"
            name="class"
            value={subject.class}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '15px' }}
          />
          
          <Typography sx={{ marginTop: '16px', fontWeight: 'bold' }}>
            Field:
          </Typography>
          <RadioGroup 
            row 
            name="field" 
            value={subject.field} 
            onChange={handleRadioChange} 
            sx={{ marginTop: '10px', marginBottom: '16px' }}
          >
            <FormControlLabel value="Arts" control={<Radio />} label="Arts" />
            <FormControlLabel value="Commerce" control={<Radio />} label="Commerce" />
            <FormControlLabel value="Computer Science" control={<Radio />} label="Computer Science" />
            <FormControlLabel value="PE" control={<Radio />} label="Physical Education" />
            <FormControlLabel value="Eng" control={<Radio />} label="Engineering" />
          </RadioGroup>

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
            Add Subject
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SubjectAdd;
