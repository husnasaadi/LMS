import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjectsCollection = collection(db, 'subjects');
      const subjectSnapshot = await getDocs(subjectsCollection);
      const subjectList = subjectSnapshot.docs.map((doc) => ({
        id: doc.id,  
        ...doc.data(),
      }));
      setSubjects(subjectList);
    };

    fetchSubjects();
  }, []);

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#f4f6f8'
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center" 
        sx={{ marginBottom: '20px', color: '#333' }}
      >
        Subject List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '800px', width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#f1f1f1' }}>ID</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#f1f1f1' }}>Subject Name</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#f1f1f1' }}>Class</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#f1f1f1' }}>Field</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell sx={{ color: '#8E1DFF' }}>{subject.id}</TableCell> 
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.class}</TableCell>
                <TableCell>{subject.field}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SubjectList;
